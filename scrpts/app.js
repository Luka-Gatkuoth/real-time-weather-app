// query document
const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const year = document.querySelector("footer");


//updating UI
const updateUI = (weatherData) => {
    details.innerHTML = `
        <h5 class="my-3"><span>${
          weatherData.name
        }</span>, <span>${convertCountryCode(weatherData.sys.country)}</span></h5>
        <p class="my-3">${convertTimeStamp(
          weatherData.dt,
          weatherData.timezone
        )}</p>
        <div class="my-3">${weatherData.weather[0].main}</div>
        <div class="display-4 my-4">
          <span>${weatherData.main.temp}</span><span>&deg;C</span>
        </div>
    `;
  };
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
  