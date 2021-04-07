const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsEl = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    ingredientsEl.append(liItem);
})