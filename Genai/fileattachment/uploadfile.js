import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

const file = await client.files.create({
    file: fs.createReadStream("Asif_resume_2026.pdf"),
    purpose:"user_data"
})

const messages = [
    {
       role:"user",
       content: [
         {
            type:"input_text",
            text:
            `Analyze this resume and provide me 
              todays data: 06-07-2026
            json format:
             {
               Full_name: <string>,
               Designation: <string>,
               total_exp: number,
               skill: Array<string>,
               company:Array<#ref001>
             }

             #ref001
             [{
               company_nam: <string>
               location:<string>
               isCurrentlyWorking:<boolean>
               total_year_worked: <string> example: 1 year 2 months            
              }]
            `
         },
         {
            type:"input_file",
            file_id: file.id
         }
       ]
    }  
]

const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: messages,
});

console.log(response.output_text);