console.log(1);

import itemCards from './modules/itemCards';
import forms from './modules/forms';
import modals from './modules/modals';

// window.addEventListener('DOMContentLoaded', () => {

// });
itemCards();
modals('.item-card__wrap','data-id');
modals('.modal-item', 'data-btn');
forms();
