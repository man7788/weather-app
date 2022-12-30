import { clickConvert, convertUnits } from './unit-converion';
import getWeather from './hit-API';
import findElement from './find-element';
import displayInfo from './weather-display';

function saveWeatherObj(location) {
  const weather = getWeather(location);

  weather.then((data) => {
    console.log(data);
    displayInfo(data.name);
  });
}

function saveTempObj(location, units) {
  const { tempDiv } = findElement();
  const { degreeDiv } = findElement();
  const temp = convertUnits(location, units);

  temp.then((data) => {
    tempDiv.textContent = Math.floor(data.temp);
    degreeDiv.textContent = '\u2103';
    clickConvert(location);
  });
}

export { saveWeatherObj, saveTempObj };
