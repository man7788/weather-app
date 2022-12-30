import findElement from './find-element';

function combineClickConvert() {
  const { nameDiv } = findElement();
  const location = nameDiv.textContent;

  const units = Promise.resolve(findUnits());

  units
    .then((degree) => {
      const newUnits = convertUnits(location, degree);
      return newUnits;
    })
    .then((newUnits) => {
      changeUnits(newUnits);
    });
}

function clickConvert() {
  const { toggleButton } = findElement();

  toggleButton.addEventListener('click', combineClickConvert);

  return toggleButton;
}

function convertUnits(location, units) {
  const weather = {};

  const hit = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=75762c93605145e9e1be5788efb4b738&units=${units}`,
    { mode: 'cors' }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('No location found.');
    })
    .then((response) => {
      weather.temp = response.main.temp;
      weather.tempMax = response.main.temp_max;
      weather.tempMin = response.main.temp_min;
      weather.degree = units;
    })
    .then(() => weather);
  return hit;
}

function findUnits() {
  const { degreeDiv } = findElement();

  let units;
  if (degreeDiv.textContent === '\u2103') {
    units = 'imperial';
  }
  if (degreeDiv.textContent === '\u2109') {
    units = 'metric';
  }

  return units;
}

function changeUnits(data) {
  const { tempDiv } = findElement();
  const { degreeDiv } = findElement();
  const { maxTempDiv } = findElement();
  const { minTempDiv } = findElement();
  const { maxDegreeDiv } = findElement();
  const { minDegreeDiv } = findElement();

  if (data.degree === 'metric') {
    tempDiv.textContent = Math.floor(data.temp);
    maxTempDiv.textContent = Math.floor(data.tempMax);
    minTempDiv.textContent = Math.floor(data.tempMin);

    degreeDiv.textContent = '\u2103';
    maxDegreeDiv.textContent = '\u2103';
    minDegreeDiv.textContent = '\u2103';
  } else if (data.degree === 'imperial') {
    tempDiv.textContent = Math.floor(data.temp);
    maxTempDiv.textContent = Math.floor(data.tempMax);
    minTempDiv.textContent = Math.floor(data.tempMin);

    degreeDiv.textContent = '\u2109';
    maxDegreeDiv.textContent = '\u2109';
    minDegreeDiv.textContent = '\u2109';
  }
}

export { clickConvert, convertUnits };
