function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInputEl = document.querySelector('input[type="number"]');
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const divBoxEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  const divArr = [];

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${(width += 10)}px`;
    newDiv.style.height = `${(height += 10)}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    divArr.push(newDiv);
  }

  divBoxEl.append(...divArr);
}

function destroyBoxes() {
  divBoxEl.innerHTML = '';
}

createButtonEl.addEventListener('click', () => {
  createBoxes(numberInputEl.value);
});

destroyButtonEl.addEventListener('click', destroyBoxes);
