// response_format: { type: "json_object" }
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

const messages = [
   {
    role:"system",
    content:`You are a helpfull assistant that responds only in JSON format.User will mostly ask about place so respnse in JSON format :
      {
       city: string,
       country: string,
       famous_for: Array<string>
      }
    `
   },
   {
    role:"user",
    content:"Give me details about Hyderabad."
   }
]

const response = await client.chat.completions.create({
    model:"gpt-4o-mini",
    messages: messages,
    response_format: {"type":"json_object"},
    temperature: 0.8
})

console.log("Assistant : ",JSON.parse(response.choices[0].message.content));


