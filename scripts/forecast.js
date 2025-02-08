const key = "51a17df105e024f49c4eb74868e5f16e";
const units = "metric";

// Get weather function
const getWeather = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?appid=${key}&q=${city}&units=${units}`;

  const response = await fetch(base + query);
  if (!response.ok) {
    // Check if the response is not OK
    alert("City not found, try again!");
    throw new Error("City not found");
  }

  const data = await response.json(); // Parse the JSON data
  return data; // Return the data
};

const convertTimeStamp = (timestamp, timezone) => {
    // Convert timezone from seconds to hours
    const convertTimeZone = timezone / 3600;
  
    // Create a date object from the timestamp
    let date = new Date(timestamp * 1000);
  
    // Create options for formatting the date
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Corrected from hourly12 to hour12
      timeZone: `Etc/GMT${convertTimeZone >= 0 ? "-" : "+"}${Math.abs(
        convertTimeZone
      )}`
    };
  
    // Return the formatted date string
    return date.toLocaleString("en-US", options);
  };