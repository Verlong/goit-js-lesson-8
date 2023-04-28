export const createPizzasMarkup = pizzas => {
  return pizzas
    .map(({ imageUrl, title, id }) => {
      return `<li class="card" id="${id}">
                <div class="card__image">
           <img src="${imageUrl}" alt="${title}" />
                 </div>
               <div class="card__info">
                   <div class="car__info--title">
             <h3>${title}</h3>
                      </div>
                    <div class="card__info--button">
            <div data-heart>&#x2764;</div>
                      </div>
                 </div>
              </li>`;
    })
    .join('');
};
