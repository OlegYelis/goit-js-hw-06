const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsListEl = document.querySelector('#ingredients');

const indArr = [];

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  indArr.push(ingredientEl);
}

ingredientsListEl.append(...indArr);
