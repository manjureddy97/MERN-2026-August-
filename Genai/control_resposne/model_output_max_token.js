import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

const messages = [
    // {
    //   role:"system",
    //   content:"U are a World class Author how is creative.note: response in plain text not in markdown"
    // },
    {
      role:"user",
      content:"Write a bedtime story about a unicorn."  
    }
]

const response = await client.chat.completions.create({
    model:"gpt-4o-mini",
    messages: messages,
    max_completion_tokens: 50
})

// temperture (0 to 1)
// Low (0-0.3) focused,predictable,same as eachtime
//  High (0.7 to 1.0)  creative,varied,sometimes surprising.

console.log("Assistant : ",response.choices[0].message);


// roles
// system  -> instructions
// user -> what the human says
// assisstant what the ai said