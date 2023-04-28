import { pizzas } from './pizzas';
import { createPizzasMarkup } from './createPizzasMarkup';

const catList = document.querySelector('.categories > ul');
const pizzasList = document.querySelector('.cards-list');
const catItem = pizzas.map(({ category }) => category);

const uniqueCatItm = [...new Set(catItem)];

const catItemMarkup = uniqueCatItm
  .map(category => `<li>${category}</li>`)
  .join(' ');

catList.insertAdjacentHTML('afterbegin', catItemMarkup);

function filterPizzas(e) {
  if (e.target.nodeName === 'LI') {
    const selectedCateg = e.target.textContent;
    const filteredArrey = pizzas.filter(
      pizza => pizza.category === selectedCateg
    );

    const pizzasMarcup = createPizzasMarkup(filteredArrey);

    pizzasList.innerHTML = '';

    pizzasList.insertAdjacentHTML('afterbegin', pizzasMarcup);
  }
}

catList.addEventListener('click', filterPizzas);
