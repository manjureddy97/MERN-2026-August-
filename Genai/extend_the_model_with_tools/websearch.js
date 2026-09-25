import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

const response = await client.responses.create({
    model: "gpt-4o-mini",
    tools:[
        {
         type:"web_search"
        }
    ],
    input: "What was a positive news story from today?"
});

console.log(response.output_text);