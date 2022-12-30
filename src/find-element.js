function findElement() {
  const inputBox = document.querySelector('.location');
  const enterButton = document.querySelector('.enter');
  const toggleButton = document.querySelector('.toggle');
  const tempDiv = document.querySelector('.temp');
  const degreeDiv = document.querySelector('.degree');
  const nameDiv = document.querySelector('.name');
  return { inputBox, enterButton, toggleButton, tempDiv, degreeDiv, nameDiv };
}

export default findElement;
