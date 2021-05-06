const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const element = ingredients.map(ingredient => {
	const ingredientsItemEl =document.createElement('li');
	ingredientsItemEl.textContent = ingredient;
	return ingredientsItemEl;
});

ingredientsEl.append(...element);
console.log(ingredientsEl);