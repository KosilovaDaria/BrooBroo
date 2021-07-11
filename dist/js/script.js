/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_itemCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/itemCards */ "./src/js/modules/itemCards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
console.log(7);


 // import modalThanks from './modules/modalThanks';
// window.addEventListener('DOMContentLoaded', () => {
// });

Object(_modules_itemCards__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/js/modules/createModalItem.js":
/*!*******************************************!*\
  !*** ./src/js/modules/createModalItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createModalItem = (product, modalSelector, modalContentSelector, closeSelector) => {
  const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        close = document.querySelector(closeSelector);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modal.append(close);
  modalContent.innerHTML = `
  <div class="item wrapper">
    <div class="item__img">
      <div class="item__img--main">
        <img class="img--main" src= ${product.src} alt="">
      </div>
      <div class="item__img--mini">
        <img class="img-active" data-img = "0" src=${product.minies[0]} alt="">
        <img data-img = "1" src=${product.minies[1]} alt="">
        <img data-img = "2" src=${product.minies[2]} alt="">
        <img data-img = "3" src=${product.minies[3]} alt="">
      </div>
    </div>
    <div class="item__text">
      <div class="item__text--header">
        <h1>${product.title}</h1>
        <span>${product.subtitle}</span>
        <h4><span>${product.price}</span></h4>
        <button class="button" data-btn=${product.id}>В корзину</button>
      </div>

      <div class="item__text--descrip">
        <p>${product.description}</p>
      </div>
        <div class="item__text--info">
          <p><span>Материалы:</span> ${product.material}</p>
          <p><span>Размеры:</span> ${product.size}</p>
          <p><span>Рекомендации по возрасту:</span>  ${product.recomends}</p>
        </div>
    </div>
  </div>
  `;
  const modalItemImgMini = document.querySelectorAll('.item__img--mini [data-img]'),
        modalItemImgMain = document.querySelector('.item__img--main img');
  modalItemImgMini.forEach(item => {
    const imgMiniSrc = item.src;
    item.addEventListener('click', function (e) {
      const target = e.target;
      this.classList.add("img-active");

      if (target.getAttribute('data-img')) {
        modalItemImgMain.src = imgMiniSrc;
      }
    });
  });
  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createModalItem);

/***/ }),

/***/ "./src/js/modules/createModalOrder.js":
/*!********************************************!*\
  !*** ./src/js/modules/createModalOrder.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createModalOrder = (product, parentSelector, modalSelector, modalContentSelector, closeSelector, formSelector) => {
  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        close = document.querySelector(closeSelector),
        form = document.querySelector(formSelector);
  parent.style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modal.append(close);
  modalContent.innerHTML = `
      <h2>Ваш заказ</h2>
      <!-- <button class="button">Продолжить покупки</button> -->
        <div class="modal-order__wrap">
          <div class="modal-order__item">
            <div class="modal-order__item--img"><img src= ${product.src} alt="" width="120"></div>
            <div class="modal-order__item--info">
              <h4>${product.title}</h4>
              <span>${product.subtitle}</span>
              <p>${product.material}</p>
            </div>
            <button class="button">1</button>
            <p>${product.price} ₽</p>
            <button class="button btn__order">&times;</button>
          </div>
          <div class="modal-order__total">
          <p>Товаров на сумму:${product.price} ₽</p>
          </div>
        </div>
  `;
  modal.append(form);
  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createModalOrder);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalThanks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalThanks */ "./src/js/modules/modalThanks.js");


const forms = () => {
  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'); // Отправка данных на сервер

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }; // Очистка инпутов


  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  }; // Сбор данных форм и отправка


  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log(formData);
      postData('assets/server.php', formData).then(res => {
        console.log(res);
      }).finally(() => {
        clearInputs();
        Object(_modalThanks__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-order', '.modal-thanks', '.modal-thanks__close');
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/itemCards.js":
/*!*************************************!*\
  !*** ./src/js/modules/itemCards.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const itemCards = () => {
  const wrapItemCard = document.querySelector('.item-card__wrap');

  const getResourse = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getResourse('assets/db.json').then(res => {
    createItemCard(res.items);
  }).catch(error => console.log(error));

  function createItemCard(response) {
    response.forEach(item => {
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
      btnId.textContent = "Подробнее";
      divItemCard.append(btnId); // console.log(divItemCard);

      wrapItemCard.appendChild(divItemCard);
    });
  }

  const modalItem = document.querySelector('.modal-item'),
        modalItemContent = document.querySelector('.modal-item__content'),
        modalItemClose = document.querySelector('.modal-item__close');
  /* когда карточка товара создалась динамически я вешаю на родительский элемент всех карточек
  обработчик событий с делегированием тем элементам, у которых есть атрибут с номером
  записываю в переменную этот номер элемента по атрибуту 
  если эта переменная есть есть то я обращаюсь к серверу и обрабатываю промис в зен
  так что получаю айди товара по которому был клик
  и если номер атрибута и номер айди от сервера совпадают 
  то я вызываю функцию создания модального окна в которую передаю айди товара
  */
  // wrapItemCard.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (target.getAttribute('data-id')) {
  //   // if (target.classList.contains('item-card__img') ) {
  //     const idItem = target.getAttribute('data-id');
  //    console.log(idItem+" - ID карточки товара на которую кликнула");
  //     if (idItem) {
  //       const getProduct = async () => {
  //         const res = await fetch('assets/db.json');
  //         if(!res.ok) {
  //           throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
  //         }
  //       // const product = res.json().items.find(p => p.id === id);
  //       // return product;
  //       return await res.json();
  //       };
  //       getProduct('assets/db.json', idItem)
  //       .then((res) => {
  //         const product = res.items[idItem];
  //         console.log(product);
  //         const prod = res.items[idItem].id;
  //         console.log(prod + " - Ответ от сервера c ID");
  //         // const product = res.items.find(p => p.id === id);
  //         if(idItem == prod){
  //           createModalItem(product);
  //           // createModalOrder(product);
  //         }
  //       })
  //       .catch(error => console.log(error));
  //     }
  //   }
  // });
  // modalItemClose.addEventListener('click', () => {
  //   modalItem.style.display = "none";
  //   document.body.style.overflow = "";
  //   modalItemContent.innerHTML = "";
  // });
  // function createModalItem(response) {
  //   modalItem.style.display = "block";
  //   document.body.style.overflow = "hidden";
  //   modalItem.append(modalItemClose);
  //   modalItemContent.innerHTML = `
  //   <div class="item wrapper">
  //     <div class="item__img">
  //       <div class="item__img--main">
  //         <img class="img--main" src= ${response.src} alt="">
  //       </div>
  //       <div class="item__img--mini">
  //         <img class="img-active" data-img = "0" src=${response.minies[0]} alt="">
  //         <img data-img = "1" src=${response.minies[1]} alt="">
  //         <img data-img = "2" src=${response.minies[2]} alt="">
  //         <img data-img = "3" src=${response.minies[3]} alt="">
  //       </div>
  //     </div>
  //     <div class="item__text">
  //       <div class="item__text--header">
  //         <h1>${response.title}</h1>
  //         <span>${response.subtitle}</span>
  //         <h4><span>${response.price}</span></h4>
  //         <button class="button" data-btn=${response.id}>В корзину</button>
  //       </div>
  //       <div class="item__text--descrip">
  //         <p>${response.description}</p>
  //       </div>
  //         <div class="item__text--info">
  //           <p><span>Материалы:</span> ${response.material}</p>
  //           <p><span>Размеры:</span> ${response.size}</p>
  //           <p><span>Рекомендации по возрасту:</span>  ${response.recomends}</p>
  //         </div>
  //     </div>
  //   </div>
  //   `;  
  //   const modalItemImgMini = document.querySelectorAll('.item__img--mini [data-img]'),
  //         modalItemImgMain = document.querySelector('.item__img--main img');
  //   modalItemImgMini.forEach (item => {
  //     const imgMiniSrc = item.src;
  //     item.addEventListener('click', function(e) {
  //       const target = e.target;
  //       this.classList.add("img-active");
  //       if (target.getAttribute('data-img')) {
  //         modalItemImgMain.src = imgMiniSrc;
  //       }
  //     });
  //   });
  // } 

  const modalOrder = document.querySelector('.modal-order'),
        modalOrderContent = document.querySelector('.modal-order__content'),
        modalOrderClose = document.querySelector('.modal-order__close'); // modalItem.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (target.getAttribute('data-btn')) {
  //     const idBtn = target.getAttribute('data-btn');
  //     console.log(idBtn);
  //     if (idBtn) {
  //       const getProduct = async () => {
  //         const res = await fetch('assets/db.json');
  //         if(!res.ok) {
  //           throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
  //         }
  //       // const product = res.json().items.find(p => p.id === id);
  //       // return product;
  //       return await res.json();
  //       };
  //       getProduct('assets/db.json', idBtn)
  //       .then((res) => {
  //         const product = res.items[idBtn];
  //         console.log(product);
  //         const prod = res.items[idBtn].id;
  //         console.log(prod + " - Ответ от сервера c ID");
  //         // const product = res.items.find(p => p.id === id);
  //         if(idBtn == prod){
  //           createModalOrder(product);
  //         }
  //       })
  //       .catch(error => console.log(error));
  //     }
  //   }
  // });
  //   modalOrderClose.addEventListener('click', () => {
  //   modalOrder.style.display = "none";
  //   document.body.style.overflow = "";
  //   modalOrderContent.innerHTML = "";
  // });
  // function createModalOrder(response) {
  //   modalItem.style.display = "none";
  //   modalOrder.style.display = "block";
  //   document.body.style.overflow = "hidden";
  //   modalOrder.append(modalOrderClose);
  //   modalOrderContent.innerHTML = `
  //       <h2>Ваш заказ</h2>
  //       <!-- <button class="button">Продолжить покупки</button> -->
  //         <div class="modal-order__wrap">
  //           <div class="modal-order__item">
  //             <div class="modal-order__item--img"><img src= ${response.src} alt="" width="120"></div>
  //             <div class="modal-order__item--info">
  //               <h4>${response.title}</h4>
  //              <span>${response.subtitle}</span>
  //               <p>${response.material}</p>
  //             </div>
  //             <button class="button">1</button>
  //             <p>${response.price} ₽</p>
  //             <button class="button btn__order">&times;</button>
  //           </div>
  //           <div class="modal-order__total">
  //           <p>Товаров на сумму:${response.price} ₽</p>
  //           </div>
  //         </div>
  //         <form class = "form form__order" id="form">
  //           <input class = "form__input" name="name" type="text" placeholder="Ваше имя">
  //           <input class = "form__input" name="email" type="text" placeholder="Ваш e-mail">
  //           <input class = "form__input" name="phone" type="text" placeholder="Ваш телефон">
  //           <button class="button submit__btn"  type="submit" name="submit">Оформить заказ</button>
  //         </form>
  //         <!-- <button class="button">Оформить заказ</button> -->
  //   `;
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (itemCards);

/***/ }),

/***/ "./src/js/modules/modalThanks.js":
/*!***************************************!*\
  !*** ./src/js/modules/modalThanks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalThanks = (parentSelector, modalSelector, closeSelector) => {
  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);
  parent.style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }); //закрытие модалки по внешней области

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modalThanks);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createModalItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createModalItem */ "./src/js/modules/createModalItem.js");
/* harmony import */ var _createModalOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createModalOrder */ "./src/js/modules/createModalOrder.js");



const modals = () => {
  function openModal(parentSelector, attribute) {
    const parent = document.querySelector(parentSelector);
    parent.addEventListener('click', e => {
      const target = e.target;

      if (target.getAttribute(attribute)) {
        const idd = target.getAttribute(attribute);
        console.log(idd + " - ID карточки товара на которую кликнула");

        if (idd) {
          const getProduct = async () => {
            const res = await fetch('assets/db.json');

            if (!res.ok) {
              throw new Error(`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
            }

            return await res.json();
          };

          getProduct('assets/db.json', idd).then(res => {
            const product = res.items[idd]; // console.log(product);

            const prod = res.items[idd].id;
            console.log(prod + " - Ответ от сервера c ID");

            if (idd == prod && attribute == ['data-id']) {
              Object(_createModalItem__WEBPACK_IMPORTED_MODULE_0__["default"])(product, '.modal-item', '.modal-item__content', '.modal-item__close');
            } else if (attribute == ['data-btn']) {
              Object(_createModalOrder__WEBPACK_IMPORTED_MODULE_1__["default"])(product, '.modal-item', '.modal-order', '.modal-order__content', '.modal-order__close', '.form__order');
            }
          }).catch(error => console.log(error));
        }
      }
    });
  }

  openModal('.item-card__wrap', 'data-id');
  openModal('.modal-item', 'data-btn');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map