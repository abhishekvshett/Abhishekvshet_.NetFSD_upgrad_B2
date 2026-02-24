const fetchWeatherPromise = () => {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.current_weather;

      console.log(`
      ===== Weather Report =====
      Temperature: ${weather.temperature}°C
      Wind Speed: ${weather.windspeed} km/h
      Time: ${weather.time}
      `);
    })
    .catch(error => {
      console.error(`Error: ${error.message}`);
    });
};

fetchWeatherPromise();