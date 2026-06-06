# JS Weather App

A browser-based weather app built with HTML, CSS, and JavaScript that fetches and displays real-time weather data for any city using the WeatherAPI.com API.

## Features

- Search weather by city name
- Displays temperature in both Celsius and Fahrenheit
- Shows weather condition description
- Shows humidity percentage
- Clean, responsive UI with a glassmorphism card design

## Files

- `index.html` — app layout and structure
- `style.css` — styling and layout
- `script.js` — fetch logic and DOM updates
- `config.js` — API key (gitignored)

## How to Use

1. Open `index.html` in your browser
2. Type a city name in the input field
3. Click "Search"
4. Weather data for that city will display instantly

## How to Run

No installation needed — just open `index.html` directly in any modern browser via Live Server.

## API

This app uses the [WeatherAPI.com](https://www.weatherapi.com/) free tier API. You will need your own API key stored in `config.js`:

```javascript
const API_KEY = 'your_api_key_here';
```

## What I Learned

- Using `fetch()` to make API requests
- Chaining `.then()` promises to handle async data
- Reading and understanding API documentation
- Hiding API keys using `config.js` and `.gitignore`
- Parsing and displaying JSON data in the DOM

## Possible Improvements

- Add weather icons from the API response
- Add a 7-day forecast
- Add geolocation to detect the user's current city automatically
- Add error handling for invalid city names