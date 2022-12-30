function findElement() {
  const inputBox = document.querySelector('.location');
  const enterButton = document.querySelector('.enter');
  const toggleButton = document.querySelector('.toggle');
  const tempDiv = document.querySelector('.temp');
  const degreeDiv = document.querySelector('.degree');
  const nameDiv = document.querySelector('.name');
  const humidityDiv = document.querySelector('.humidity');
  const mainDiv = document.querySelector('.main');
  const descriptDiv = document.querySelector('.descript');
  const maxTempDiv = document.querySelector('.max-temp');
  const minTempDiv = document.querySelector('.min-temp');
  const maxDegreeDiv = document.querySelector('.max-degree');
  const minDegreeDiv = document.querySelector('.min-degree');
  const iconDiv = document.querySelector('.icon');
  const errorDiv = document.querySelector('.error');
  return {
    inputBox,
    enterButton,
    toggleButton,
    tempDiv,
    degreeDiv,
    nameDiv,
    humidityDiv,
    mainDiv,
    descriptDiv,
    maxTempDiv,
    minTempDiv,
    maxDegreeDiv,
    minDegreeDiv,
    iconDiv,
    errorDiv,
  };
}

export default findElement;
