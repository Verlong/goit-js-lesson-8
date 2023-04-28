// Зарендери розмітку піц у список.
// Використовуй шаблон карточки піци, який наведений нижче.
// У кожної піци є своя категорія, тому зроби масив категорій,
//  які є унікальними на основі масиву об'єктів піц і зарендери категорії у
//  список контейнера categories, просто огорнувши назву категорії у елемент списку.
//  Тепер ти можеш додати динаміку і зробити фільтр по категоріях, показуй ті піци,
//     які співпали з обраною категорією.
// Використовуй html з файлу pizzas.html.
// Використовуй масив піц з файлу pizzas.js
// <li class="card" id="${id}">
//   <div class="card__image">
//     <img src="${imgUrl}" alt="${title}" />
//   </div>
//   <div class="card__info">
//     <div class="car__info--title">
//       <h3>${title}</h3>
//     </div>
//     <div class="card__info--button">
//       <div data-heart>&#x2764;</div>
//     </div>
//   </div>
// </li>

import { pizzas } from './pizzas';
import { createPizzasMarkup } from './createPizzasMarkup';

const pizzasList = document.querySelector('.cards-list');

const pizzasMarcup = createPizzasMarkup(pizzas);
pizzasList.insertAdjacentHTML('afterbegin', pizzasMarcup);
