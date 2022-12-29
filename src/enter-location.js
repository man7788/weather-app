import findElement from './find-element';
// import getWeather from './hit-API';
import { saveWeatherObj, saveTempObj } from './weather-output';
// import { convertUnits } from './unit-convertion';

function findLocation() {
  const { inputBox } = findElement();
  const { enterButton } = findElement();

  enterButton.addEventListener('click', () => {
    const location = inputBox.value;
    saveWeatherObj(location);
    saveTempObj(location, 'metric');
  });
}

export default findLocation;
