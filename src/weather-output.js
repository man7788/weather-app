import { clickConvert, convertUnits } from './unit-converion';
import getWeather from './hit-API';
import findElement from './find-element';
import displayInfo from './weather-display';

function saveWeatherObj(location) {
  const weather = getWeather(location);
  const { errorDiv } = findElement();

  weather
    .then((data) => {
      errorDiv.textContent = '';
      displayInfo(
        data.name,
        data.humidity,
        data.main,
        data.descript,
        data.icon
      );
    })
    .catch((error) => {
      console.log(error);
      errorDiv.textContent = 'No Location Found.';
    });
}

function saveTempObj(location, units) {
  const { tempDiv } = findElement();
  const { degreeDiv } = findElement();
  const { maxTempDiv } = findElement();
  const { minTempDiv } = findElement();
  const { maxDegreeDiv } = findElement();
  const { minDegreeDiv } = findElement();
  const temp = convertUnits(location, units);

  temp
    .then((data) => {
      tempDiv.textContent = Math.floor(data.temp);
      maxTempDiv.textContent = `H: ${Math.floor(data.tempMax)}`;
      minTempDiv.textContent = `L: ${Math.floor(data.tempMin)}`;

      degreeDiv.textContent = '\u2103';
      maxDegreeDiv.textContent = '\u2103';
      minDegreeDiv.textContent = '\u2103';

      clickConvert(location);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { saveWeatherObj, saveTempObj };
