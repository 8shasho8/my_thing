const API_KEY_WEATHER = 'a3940d35b7cbf0d7199654651541f7f6';
const URL = "https://api.openweathermap.org/data/2.5/weather?";
const CITY = 'q=Sado'; 

const url = URL + CITY + '&appid=' + API_KEY_WEATHER;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    // Retrieve weather information
    const weather = data.weather[0].main;   // Weather
    const city = data.name;                 // City name
    const maxTempKelvin = data.main.temp_max; // Max temperature (Kelvin)
    const maxTempCelsius = (maxTempKelvin - 273.15).toFixed(1); // Convert to Celsius

    // Format date and time
    const dateObj = new Date(data.dt * 1000); // Convert API's dt to milliseconds
    const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

    // Translate weather to English (already in English, kept for consistency)
    let weatherEnglish = '';
    switch (weather) {
      case 'Clear':
        weatherEnglish = 'Clear';
        break;
      case 'Rain':
        weatherEnglish = 'Rain';
        break;
      case 'Clouds':
        weatherEnglish = 'Cloudy';
        break;
      case 'Snow':
        weatherEnglish = 'Snow';
        break;
      case 'Thunderstorm':
        weatherEnglish = 'Thunderstorm';
        break;
      default:
        weatherEnglish = 'Other Weather';
        break;
    }

    // Reflect data in HTML
    const weatherElement = document.getElementById("weather");
    const dateElement = document.getElementById("date");
    const weatherImageElement = document.getElementById("weather-image");

    let weatherImage = '';

    // Change the image based on the weather
    switch (weather) {
      case 'Clear':
        weatherImage = 'https://img.icons8.com/?size=100&id=n8viW0X2OYKw&format=png&color=000000';  // Clear
        break;
      case 'Rain':
        weatherImage = 'https://img.icons8.com/?size=100&id=pMGukwJCfgd0&format=png&color=000000';   // Rain
        break;
      case 'Clouds':
        weatherImage = 'https://img.icons8.com/?size=100&id=69bf287oWHbX&format=png&color=000000'; // Cloudy
        break;
      case 'Snow':
        weatherImage = 'https://img.icons8.com/?size=100&id=GMLfiiwrC4PS&format=png&color=000000';   // Snow
        break;
      case 'Thunderstorm':
        weatherImage = 'https://img.icons8.com/?size=100&id=GH8NkpA3qHRX&format=png&color=000000'; // Thunderstorm
        break;
      default:
        weatherImage = 'https://img.icons8.com/?size=100&id=fTt1KFKoL8IW&format=png&color=000000'; // Other Weather
        break;
    }

    if (weatherElement && dateElement && weatherImageElement) {
      dateElement.innerHTML = `<p>Date and Time: ${formattedDate}</p>`;
      weatherElement.innerHTML = `
      <p>Max Temperature: ${maxTempCelsius}℃</p>
      <p>Weather: ${weatherEnglish}</p>
      `;
      weatherImageElement.innerHTML = `<img src="${weatherImage}" alt="${weatherEnglish}" />`;
    } else {
      console.error("Required HTML elements not found");
    }

    // Console output (for debugging)
    console.log(`City: ${city}, Weather: ${weatherEnglish}, Max Temperature: ${maxTempCelsius}℃, Date and Time: ${formattedDate}`);
  })
  .catch(error => {
    console.error("An error occurred while fetching data:", error);
  });
