import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

function getWeather(city) {
 const weather = {
    hyderabad: {
      temperature: 32,
      condition: "Sunny"
    },

    delhi: {
      temperature: 40,
      condition: "Hot"
    },

    mumbai: {
      temperature: 29,
      condition: "Rainy"
    }
  };

   return weather[city.toLowerCase()] || {
    temperature: "Unknown",
    condition: "City not found"
  };
}


const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});


const response = await client.responses.create({
    model: "gpt-4o-mini",
tools: [
    {
      type: "function",

      name: "getWeather",

      description: "Get current weather of a city",

      parameters: {
        type: "object",
        properties: {
          city: {
            type: "string",
            description: "City name"
          }
        },

        required: ["city"]
      }
    }
  ],
    input: "What is the weather in hyderabad?"
});

console.log(response);

const toolCall = response.output.find(item => item.type === "function_call")

if(toolCall){
    console.log(toolCall.arguments)
    const args = JSON.parse(toolCall.arguments);
    const result = getWeather(args.city);

    // send function result back to llm
    const finalResponse = await client.responses.create({
         model: "gpt-4o-mini",
         previous_response_id: response.id,
         input: [
            {
                type:"function_call_output",
                call_id: toolCall.call_id,
                output: JSON.stringify(result)
            }
         ]
    })

    console.log(finalResponse.output_text)
}