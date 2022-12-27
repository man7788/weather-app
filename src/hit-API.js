function getWeather(location, units) {
  const weather = {};

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=75762c93605145e9e1be5788efb4b738&units=${units}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      weather.temp = response.main.temp;
      weather.humidity = response.main.humidity;
      weather.tempMax = response.main.temp_max;
      weather.tempMin = response.main.temp_min;
      weather.main = response.weather[0].main;
      weather.descript = response.weather[0].description;
      weather.icon = response.weather[0].icon;
    })
    .then(() => {
      console.log(weather);
    });
}

export default getWeather;
