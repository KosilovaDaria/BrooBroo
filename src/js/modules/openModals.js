import createModalItem from './createModalItem';
import createModalOrder from './createModalOrder';
import {getProduct} from '../services/services';
// import createCart from './createCart';

const openModal = (parentSelector,attribute) => {
  const parent = document.querySelector(parentSelector);

  parent.addEventListener('click', (e) => {
    const target = e.target;

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
            createModalItem(product, '.modal-item', '.modal-item__content');
          } else if (attribute == ['data-btn']) {
            createModalOrder(product, '.modal-item', '.modal-order','.modal-order__content',".modal-order__wrap", '.modal-order__close','.form__order'); 
          }
        })
        .catch(error => console.log(error));
    }
  });
};

export default openModal;