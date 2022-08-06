const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', decrementHandler);
incrementEl.addEventListener('click', incrementHandler);

function decrementHandler() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function incrementHandler() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
