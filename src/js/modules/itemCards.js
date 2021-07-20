import {getProduct} from '../services/services';
// import createBtnCart from './createBtnCart';

const itemCards = () => {
  
  const wrapItemCard = document.querySelector('.item-card__wrap');

  getProduct('assets/db.json')
    .then(res => {
      createItemCard(res.items);
    })
    .catch(error => console.log(error));

  function createItemCard(response) {
    response.forEach((item) => {
      const divItemCard = document.createElement('div');
      divItemCard.classList.add('item-card');
      wrapItemCard.append(divItemCard);

      divItemCard.innerHTML = `
        <img class="item-card__img" src=${item.src} alt="${item.alt}">
        <div class="item-card__text">
          <h4>${item.title}</h4>
          <span>${item.subtitle}</span>
          <h4>${item.price} ₽</h4>
        </div>
      `;
      const btnId = document.createElement('button');
      btnId.classList.add('button');
      btnId.setAttribute('data-id', `${item.id}`);
      btnId.textContent= "Подробнее";
      divItemCard.append(btnId);
      wrapItemCard.appendChild(divItemCard);
    });
  }
  // createBtnCart();
};

export default itemCards;