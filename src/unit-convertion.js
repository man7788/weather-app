import findElement from './find-element';

function clickConvert(location) {
  const { toggleButton } = findElement();

  toggleButton.addEventListener('click', () => {
    const units = Promise.resolve(findUnits());

    units
      .then((degree) => {
        console.log(degree);
        const newUnits = convertUnits(location, degree);
        return newUnits;
      })
      .then((newUnits) => {
        console.log(newUnits);
        changeUnits(newUnits);
      });
  });
}

function convertUnits(location, units) {
  const weather = {};

  const hit = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=75762c93605145e9e1be5788efb4b738&units=${units}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
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
  console.log(data.degree);
  if (data.degree === 'metric') {
    tempDiv.textContent = data.temp;
    degreeDiv.textContent = '\u2103';
  } else if (data.degree === 'imperial') {
    tempDiv.textContent = data.temp;
    degreeDiv.textContent = '\u2109';
  }
}

export { clickConvert, convertUnits };
