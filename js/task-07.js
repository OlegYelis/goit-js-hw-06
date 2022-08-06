const controlInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const controlHandler = event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

controlInputEl.addEventListener('input', controlHandler);
