import { clickConvert, convertUnits } from './unit-convertion';
import getWeather from './hit-API';
import findElement from './find-element';

function saveWeatherObj(location) {
  const weather = getWeather(location);

  weather.then((data) => {
    console.log(data);
  });
}

function saveTempObj(location, units) {
  const { tempDiv } = findElement();
  const { degreeDiv } = findElement();
  const temp = convertUnits(location, units);

  temp.then((data) => {
    tempDiv.textContent = `${data.temp}`;
    degreeDiv.textContent = '\u2103';
    clickConvert(location);
  });
}

export { saveWeatherObj, saveTempObj };
