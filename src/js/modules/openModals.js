import createModalItem from './createModalItem';
import createModalOrder from './createModalOrder';
import {getProduct} from '../services/services';

const openModal = (parentSelector,attribute) => {
  const parent = document.querySelector(parentSelector);

  parent.addEventListener('click', (e) => {
    const target = e.target;
    // console.log(target);

    if(target.getAttribute(attribute)) {
      const idd = target.getAttribute(attribute);
      // console.log(idd+" - ID карточки товара на которую кликнула");
      getProduct('assets/db.json', idd)
        .then((res) => {
          const product = res.items[idd];
          // console.log(product);
          const productId = res.items[idd].id;
          // console.log(prod + " - Ответ от сервера c ID");
          if(idd == productId && attribute == ['data-id']) {
            createModalItem(product, '.modal-item', '.modal-item__content','.model-item__wrap');
          } else if (attribute == ['data-btn']) {
            let order = {
              'toy':`${product.title}`,
              'subscr':`${product.subtitle}`,
              'quantity': 1,
              'price':`${product.price}`*1,
              'img':`${product.src}`,
            };

            localStorage.setItem ("order", JSON.stringify(order));
            order = JSON.parse(localStorage.getItem ("order"));
            // console.log(typeof order); // объект
            // console.log(order);
            // console.log(order.toy);
          
            createModalOrder('.modal-item', '.modal-order','.modal-order__content','.modal-order__wrap', '.modal-order__close','.form__order'); 

          } 
        })
        .catch(error => console.log(error));
    }
  });
};

export default openModal;