import dotenv from "dotenv";
import OpenAI from "openai";
import pkg from "pg";
dotenv.config();

const {Pool} = pkg;

const pool = new Pool({
    host: "localhost",
    port:"5432",
    user:"admin",
    password:"admin",
    database:"embeddings"
})

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});


async function getEmbeddings(text){
    const response = await client.embeddings.create({
        model:"text-embedding-3-small",
        input: text
    })
  return response.data[0].embedding;
}

const documents = [
    {
        name: "Rahul Sharma",
        experience: 6,
        designation: "Senior Backend Developer",
        resume_text: "Senior Backend Developer with 6 years of experience building scalable REST APIs using Node.js, Express.js, PostgreSQL, Redis, RabbitMQ, Docker, AWS, JWT authentication, and microservices."
    },
    {
        name: "Priya Verma",
        experience: 4,
        designation: "MERN Stack Developer",
        resume_text: "Full Stack MERN Developer experienced in React.js, Node.js, MongoDB, Express.js, Redux Toolkit, Tailwind CSS, Firebase, and REST APIs."
    },
    {
        name: "Asif Khan",
        experience: 5,
        designation: "LLM Engineer",
        resume_text: "AI Engineer specializing in OpenAI API, LangChain, FastAPI, PostgreSQL, pgvector, embeddings, vector search, RAG, semantic search, Redis, and Docker."
    },
    {
        name: "Sneha Patel",
        experience: 3,
        designation: "Frontend React Developer",
        resume_text: "Frontend Developer with expertise in React.js, Next.js, TypeScript, Redux Toolkit, Material UI, HTML, CSS, JavaScript, and responsive web design."
    },
    {
        name: "Amit Singh",
        experience: 7,
        designation: "DevOps Engineer",
        resume_text: "DevOps Engineer experienced in Kubernetes, Docker, AWS, Terraform, Jenkins, GitHub Actions, Linux, NGINX, and CI/CD pipelines."
    },
    {
        name: "Neha Gupta",
        experience: 5,
        designation: "Java Spring Boot Developer",
        resume_text: "Java Backend Developer specializing in Spring Boot, Hibernate, Kafka, MySQL, Docker, Microservices, REST APIs, and JUnit."
    },
    {
        name: "Karan Mehta",
        experience: 6,
        designation: "Python Data Engineer",
        resume_text: "Data Engineer experienced in Python, Apache Spark, Airflow, SQL, Snowflake, AWS Glue, ETL pipelines, Pandas, and data warehousing."
    },
    {
        name: "Anjali Reddy",
        experience: 4,
        designation: "Machine Learning Engineer",
        resume_text: "Machine Learning Engineer skilled in Python, TensorFlow, Scikit-learn, NLP, Computer Vision, MLflow, Docker, and Pandas."
    },
    {
        name: "Vikram Rao",
        experience: 5,
        designation: "Flutter Mobile Developer",
        resume_text: "Cross-platform Mobile Developer with expertise in Flutter, Dart, Firebase, REST APIs, SQLite, Android, and iOS."
    },
    {
        name: "Mohammad Ali",
        experience: 6,
        designation: "Full Stack LLM Engineer",
        resume_text: "Full Stack Engineer with expertise in React.js, Node.js, Express.js, OpenAI API, LangChain, PostgreSQL, pgvector, Redis, Docker, AWS, semantic search, embeddings, and AI-powered recruitment platforms."
    }
];

async function insertDocuments(documents){
    try{
       for(const document of documents){
           console.log(`Generating embedding for ${document.name}...`);

           const embedding = await getEmbeddings(document.resume_text);

           await pool.query(
            `
            INSERT INTO resumes
            (
              name,
              experience,
              designation,
              resume_text,
              embedding
            )
            VALUES
            ($1,$2,$3,$4,$5)
            `,
            [
              document.name,
              document.experience,
              document.designation,
              document.resume_text,
              JSON.stringify(embedding)
            ]
           )

           console.log(`Inseted ${document.name}`)
       }
    }catch(error){
       console.error(error);
    }finally{
        await pool.end();
    }
}

insertDocuments(documents);