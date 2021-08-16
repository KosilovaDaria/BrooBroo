// console.log(1);


import itemCards from './modules/itemCards';
import forms from './modules/forms';
import openModal from './modules/openModals';
import closeModal from './modules/closeModals';
import openBurger from './modules/openBurger';


itemCards();
openModal('.item-card__wrap','data-id');
openModal('.item-card__wrap','data-id');
openModal('.modal-item', 'data-btn');
openModal('.btn-cart');
closeModal('.modal-item','.modal-item__close','.model-item__wrap');
closeModal('.modal-order','.modal-order__close','.modal-order__wrap');
closeModal('.modal-notice','.modal-notice__close','.modal-notice__content');
forms();
openBurger('.burger-icon','.header__nav');
