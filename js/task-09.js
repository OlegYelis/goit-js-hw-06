function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorButtonEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');

changeColorButtonEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = getRandomHexColor();
});
