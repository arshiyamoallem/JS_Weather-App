const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById("location");
const temperature_C_Element = document.getElementById("temperature_c");
const temperature_F_Element = document.getElementById("temperature_f");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {getWeather(location);}
});

function getWeather(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.location.name;
        temperature_C_Element.textContent = `Celsius: ${data.current.temp_c}°C`;
        temperature_F_Element.textContent = `Farrenheit: ${data.current.temp_f}°F`;
        descriptionElement.textContent = data.current.condition.text;
        humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
}