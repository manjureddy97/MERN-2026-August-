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

// <=> Cosine Distance

async function searchResumes(query){
    try{

        console.log(`User Query: ${query}`)
        const embedding = await getEmbeddings(query);
        const sql = `
                   SELECT
                      id,name,designation,experience,resume_text,embedding <=> $1 AS distance
                   FROM resumes
                   ORDER BY distance
                   LIMIT 5
                  `
        const result = await pool.query(sql,
            [
              JSON.stringify(embedding)
            ]
        )

        console.table(result.rows);

    }catch(error){
        console.error(error);
    }finally{
        await pool.end();
    }
}

searchResumes("React frontend");