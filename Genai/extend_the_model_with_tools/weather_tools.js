export function getWeather(city) {
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
