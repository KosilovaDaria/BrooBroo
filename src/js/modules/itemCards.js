import {getProduct} from '../services/services';
import modalThanks from './modalNotice';

const itemCards = () => {
  
  const itemCardRainbow = document.querySelector('[data-toy="rainbow"]'),
        itemCardSort = document.querySelector('[data-toy="sort"]'),
        itemCardWood = document.querySelector('[data-toy="wood"]');


  getProduct('assets/db.json')
    .then(res => {
      createItemCard(res.items);
    })
    .catch(error => modalThanks('.modal-order','[data-err = "err"]'));

  function createItemCard(response) {
    console.log(response);
    response.forEach((item) => {
      const divItemCard = document.createElement('div');
      divItemCard.classList.add('item-card');

      function createCard(itemCard) {
        itemCard.append(divItemCard);
        divItemCard.innerHTML = `
          <img src=${item.src} alt="${item.alt}">
            <h4>${item.title}</h4>
            <span>${item.subtitle}</span>
            <h4>${item.price} ₽</h4>
            <button class="button" data-id=${item.id}>Подробнее</button>
        `;
      }
      
      if (item.type === 'rainbow') {
        createCard (itemCardRainbow);
      } else if ((item.type === 'sort')) {
        createCard (itemCardSort);
      } else if ((item.type === 'wood')) {
        createCard (itemCardWood);
      } 
    });
  }
};

export default itemCards;