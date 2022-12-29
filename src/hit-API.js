function getWeather(location) {
  const weather = {};

  const hit = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=75762c93605145e9e1be5788efb4b738`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      weather.humidity = response.main.humidity;
      weather.main = response.weather[0].main;
      weather.descript = response.weather[0].description;
      weather.icon = response.weather[0].icon;
    })
    .then(
      () =>
        // console.log(weather);
        weather
    );

  return hit;
}

export default getWeather;
