console.log(1);

import itemCards from './modules/itemCards';
import forms from './modules/forms';
import openModal from './modules/openModals';
import closeModal from './modules/closeModals';


itemCards();
openModal('.item-card__wrap','data-id');
openModal('.modal-item', 'data-btn');
openModal('.btn-cart');
// openModal('.btn-rmv');
closeModal('.modal-item','.modal-item__close','.model-item__wrap');
closeModal('.modal-order','.modal-order__close',".modal-order__wrap");
closeModal('.modal-thanks','.modal-thanks__close');
forms();
