const key = "51a17df105e024f49c4eb74868e5f16e";
const units = "metric";

// Get weather function
const getWeather = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?appid=${key}&q=${city}&unit=${units}`;

  const response = await fetch(base + query);
  if (!response.ok) {
    // Check if the response is not OK
    alert("City not found, try again!");
    throw new Error("City not found");
  }

  const data = await response.json(); // Parse the JSON data
  return data; // Return the data
};
