import dotenv from "dotenv";
import { Agent, run, MCPServerStdio, MemorySession } from "@openai/agents";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MCP_BIN = path.join(__dirname, "node_modules/postgres-mcp-server/dist/index.js");

const MODEL = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

function parseConnectionString(connectionString) {
  const url = new URL(connectionString);
  return {
    DB_HOST: url.hostname,
    DB_PORT: url.port || "5432",
    DB_USER: decodeURIComponent(url.username),
    DB_PASSWORD: decodeURIComponent(url.password),
    DB_NAME: url.pathname.replace(/^\//, ""),
    DB_SSL: "false",
  };
}

function getMcpEnv() {
  if (process.env.DB_PASSWORD) {
    return {
      DB_HOST: process.env.DB_HOST ?? "127.0.0.1",
      DB_PORT: process.env.DB_PORT ?? "5432",
      DB_USER: process.env.DB_USER ?? "postgres",
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME ?? "postgres",
      DB_SSL: process.env.DB_SSL ?? "false",
    };
  }

  const connectionString =
    process.env.POSTGRES_CONNECTION_STRING ??
    process.env.DATABASE_URL ??
    "postgresql://admin:admin@localhost:5432/typeormdb";

  return parseConnectionString(connectionString);
}

const mcpEnv = getMcpEnv();

const mcpServer = new MCPServerStdio({
  name: "PostgreSQL MCP",
  command: process.execPath,
  args: [MCP_BIN],
  env: {
    ...process.env,
    ...mcpEnv,
  },
  clientSessionTimeoutSeconds: 60,
  timeout: 120000,
});

const agent = new Agent({
  name: "MCP Assistant",
  model: MODEL,
  instructions: `You are a helpful assistant with access to PostgreSQL MCP tools.
Use MCP tools whenever the user asks for database work, data lookups, SQL queries, or schema inspection.
For general questions outside database scope, answer directly.
Be concise and practical.`,
  mcpServers: [mcpServer],
});

let session = new MemorySession();

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in .env");
    process.exit(1);
  }

  const rl = readline.createInterface({ input, output });

  console.log("OpenAI + MCP assistant");
  console.log(`Model: ${MODEL}`);
  console.log(`Database: ${mcpEnv.DB_USER}@${mcpEnv.DB_HOST}:${mcpEnv.DB_PORT}/${mcpEnv.DB_NAME}`);
  console.log("MCP mode: local stdio (postgres-mcp-server)");
  console.log("Connecting to MCP server...");
  console.log("Ask anything. Type 'exit' to quit, 'clear' to reset chat.\n");

  await mcpServer.connect();
  console.log("MCP server connected.\n");

  try {
    while (true) {
      const userMessage = (await rl.question("You: ")).trim();

      if (!userMessage) continue;

      if (["exit", "quit", "q"].includes(userMessage.toLowerCase())) {
        console.log("Goodbye!");
        break;
      }

      if (userMessage.toLowerCase() === "clear") {
        session = new MemorySession();
        console.log("Chat history cleared.\n");
        continue;
      }

      try {
        process.stdout.write("Assistant: ");
        const result = await run(agent, userMessage, { session });
        console.log(`${result.finalOutput ?? "(No response)"}\n`);
      } catch (error) {
        console.error(
          `Error: ${error?.message ?? error}\nCheck PostgreSQL is running and your DB credentials are correct.\n`
        );
      }
    }
  } finally {
    rl.close();
    await mcpServer.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});