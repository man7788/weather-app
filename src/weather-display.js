import findElement from './find-element';

function displayInfo(name, humidity, main, descript, icon) {
  const { nameDiv } = findElement();
  const { humidityDiv } = findElement();
  const { mainDiv } = findElement();
  const { descriptDiv } = findElement();
  const { iconDiv } = findElement();

  nameDiv.textContent = name;
  humidityDiv.textContent = `${humidity}%`;
  mainDiv.textContent = main;
  descriptDiv.textContent = descript;
  iconDiv.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

export default displayInfo;
