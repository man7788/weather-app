import findElement from './find-element';

function displayInfo(name) {
  const { nameDiv } = findElement();
  nameDiv.textContent = name;
}

export default displayInfo;
