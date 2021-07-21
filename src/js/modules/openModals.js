import createModalItem from './createModalItem';
import createModalOrder from './createModalOrder';
import {getProduct} from '../services/services';
import modalNotice from './modalNotice';

const openModal = (parentSelector,attribute) => {
  const parent = document.querySelector(parentSelector);
  const btnCartMain = document.querySelector('[data-cart]');

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
            createModalItem(product, '.modal-item', '.modal-item__content','.model-item__wrap');
          } else if (attribute == ['data-btn']) {
            let order = {
              'toy':`${product.title}`,
              'subscr':`${product.subtitle}`,
              'quantity': 1,
              'price':`${product.price}`*1,
              'img':`${product.src}`,
            };
            // let order = [`${product.title}`,`${product.subtitle}`,1,`${product.price}`*1,`${product.src}`];

            localStorage.setItem ("order", JSON.stringify(order));
            order = JSON.parse(localStorage.getItem ("order"));
            // console.log(typeof order); // объект
            // console.log(order);
            // console.log(order.toy);
          
            createModalOrder('.modal-item', '.modal-order','.modal-order__content','.modal-order__wrap', '.modal-order__close','.form__order'); 
            btnCartMain.style.display = "block";
           
          } 
        })
        .catch(error => modalNotice('.modal-order','[data-err = "err"]'));
    } else if (target.classList.contains('btn-cart')) {
      console.log(target);
      createModalOrder('.modal-item', '.modal-order','.modal-order__content','.modal-order__wrap', '.modal-order__close','.form__order'); 

    } 
  });

};

export default openModal;