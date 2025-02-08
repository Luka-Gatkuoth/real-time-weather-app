// query document
const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const year = document.querySelector("footer");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon >img")

// convert country code to name
const convertCountryCode = (country) => {
    let countryName = new Intl.DisplayNames(["eng"], { type: "region" });
    return countryName.of(country);
  };  

//updating UI
const updateUI = (weatherData) => {
  console.log(weatherData); 
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
    const sunrise = weatherData.sys.sunrise * 1000; // Convert to milliseconds
    const  sunset = weatherData.sys.sunset * 1000; // Convert to milliseconds
    const  current_time = new Date().getTime(); // Get current time in milliseconds

    // Determine if it's day or night
    let timeSrc = null;
    if (current_time >= sunrise && current_time <= sunset) {
      timeSrc = "img/day.svg"
        console.log("day");
    } else {
        timeSrc = "img/night.svg"
        console.log("night");
    }
    time.setAttribute("src", timeSrc)

    // image icons
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

      // setLocalStorage
      localStorage.setItem("city", city);
  });

  // check if any city exist
  if(localStorage.getItem('city')){
    getWeather(localStorage.getItem('city'))
    .then(data =>updateUI(data))
    .catch(err =>console.log(err));
  }

  
  // year at copy right

const now = new Date().getFullYear();
year.innerHTML = `
  <p> &copy; <span> ${now} </span>, All right are reserved </p>
`;