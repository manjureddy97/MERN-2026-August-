import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

const messages = [
    {
      role:"system",
      content:"You are a friendly tutor.Keep answers of 30 words."  
    },
    {
       role:"user",
       content:"What is an API?"
    },
    {
        role: 'assistant',
        content: 'An API, or Application Programming Interface, is a set of rules that allows different software applications to communicate and interact with each other, facilitating data exchange and functionality integration.',
    },
    {
      role:"user",
      content:"My name is Asif Khan."
    },
    {
        role: 'assistant',
        content: 'Nice to meet you, Asif Khan! How can I assist you today?',
    },
    {
        role:"user",
        content:"What is my Name?"
    },
    {
    role: 'assistant',
    content: 'Your name is Asif Khan. How can I help you, Asif?',
    }    
]
// this is for input and output a single resposne
// const response = await client.responses.create({
//     model: "gpt-4o-mini",
// });

const response = await client.chat.completions.create({
    model:"gpt-4o-mini",
    messages: messages
})


console.log("Assistant : ",response.choices[0].message);


// roles
// system  -> instructions
// user -> what the human says
// assisstant what the ai said