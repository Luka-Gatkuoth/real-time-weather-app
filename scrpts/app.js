// query document
const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const year = document.querySelector("footer");


// Add event listener to the form

cityForm.addEventListener("submit", async (e) => {
    console.log(e);
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    console.log(city);
    try {
      const weatherData = await getWeather(city); // Call getWeather with the city value
      console.log(weatherData); // Log the weather data
      updateUI(weatherData);
      // You can add code here to display the weather data in the UI
    } catch (err) {
      console.log(err.message); // Log any errors
    }
  });
  