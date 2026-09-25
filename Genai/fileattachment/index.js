import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

// image url  example 1
// const messages = [
//     {
//        role:"user",
//        content: [
//          {
//             type:"input_text",
//             text:"What is in this image?"
//          },
//          {
//             type:"input_image",
//             image_url:"https://openai-documentation.vercel.app/images/cat_and_otter.png"
//          }
//        ]
//     }  
// ]

// file url
const messages = [
    {
       role:"user",
       content: [
         {
            type:"input_text",
            text:"Analyze th letter and provide a summary of the key points."
         },
         {
            type:"input_file",
            file_url:"https://www.berkshirehathaway.com/letters/2024ltr.pdf"
         }
       ]
    }  
]

const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: messages
});

console.log(response.output_text);