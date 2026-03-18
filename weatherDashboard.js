// weatherDashboard.js

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const weatherContainer = document.getElementById('weather-container');
const form = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');

// Function to fetch weather data
async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

// Function to update the UI with weather data
function updateUI(data) {
    if (data.cod === 200) {
        weatherContainer.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        weatherContainer.innerHTML = `<p>${data.message}</p>`;
    }
}

// Event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page refresh
    const city = cityInput.value;
    const weatherData = await fetchWeather(city);
    updateUI(weatherData);
});

// Initial UI setup
updateUI({ cod: 0, message: 'Please enter a city to get weather information.' });