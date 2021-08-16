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
/* harmony import */ var _modules_openModals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/openModals */ "./src/js/modules/openModals.js");
/* harmony import */ var _modules_closeModals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/closeModals */ "./src/js/modules/closeModals.js");
/* harmony import */ var _modules_openBurger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/openBurger */ "./src/js/modules/openBurger.js");
// console.log(1);





Object(_modules_itemCards__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_openModals__WEBPACK_IMPORTED_MODULE_2__["default"])('.item-card__wrap', 'data-id');
Object(_modules_openModals__WEBPACK_IMPORTED_MODULE_2__["default"])('.item-card__wrap', 'data-id');
Object(_modules_openModals__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal-item', 'data-btn');
Object(_modules_openModals__WEBPACK_IMPORTED_MODULE_2__["default"])('.btn-cart');
Object(_modules_closeModals__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal-item', '.modal-item__close', '.model-item__wrap');
Object(_modules_closeModals__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal-order', '.modal-order__close', '.modal-order__wrap');
Object(_modules_closeModals__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal-notice', '.modal-notice__close', '.modal-notice__content');
Object(_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_openBurger__WEBPACK_IMPORTED_MODULE_4__["default"])('.burger-icon', '.header__nav');

/***/ }),

/***/ "./src/js/modules/checkNumInputs.js":
/*!******************************************!*\
  !*** ./src/js/modules/checkNumInputs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkNumInputs = selector => {
  const numInputs = document.querySelectorAll(selector);
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkNumInputs);

/***/ }),

/***/ "./src/js/modules/closeModals.js":
/*!***************************************!*\
  !*** ./src/js/modules/closeModals.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const closeModal = (modalSelector, closeSelector, modalContentSelector) => {
  const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        close = document.querySelector(closeSelector);
  modal.append(close);
  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });
};

/* harmony default export */ __webpack_exports__["default"] = (closeModal);

/***/ }),

/***/ "./src/js/modules/createModalItem.js":
/*!*******************************************!*\
  !*** ./src/js/modules/createModalItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createModalItem = (product, modalSelector, modalContentSelector, modalWrapSelector) => {
  const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        modalWrap = document.querySelector(modalWrapSelector);
  const btnCartItem = document.querySelector('.btn-cart');
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalWrap.innerHTML = `
    <div class="item wrapper">
      <div class="item__img">
      <div class="item__img--mini">
      <img class="img-active" data-img = "0" src=${product.minies[0]} alt="">
      <img data-img = "1" src=${product.minies[1]} alt="">
      <img data-img = "2" src=${product.minies[2]} alt="">
      <img data-img = "3" src=${product.minies[3]} alt="">
    </div>
        <div class="item__img--main">
          <img class="img--main" src= ${product.src} alt="">
        </div>
      </div>
      <div class="item__text">
        <div class="item__text--header">
          <h4>${product.title}</h4>
          <span>${product.subtitle}</span>
          <h4>${product.price} ₽</h4>
          <button class="button" data-btn=${product.id}>В корзину</button>
        </div>
        <div class="item__text--descrip">
          <p>${product.description}</p>
        </div>
          <div class="item__text--info">
            <p><span>Материалы:</span> ${product.material}</p>
            <p><span>Размеры:</span> ${product.size}</p>
            <p><span>Возраст:</span>  ${product.recomends}</p>
          </div>
      </div>

  `; //Переключение миниатюр

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
/* harmony import */ var _modalNotice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalNotice */ "./src/js/modules/modalNotice.js");


const createModalOrder = (parentSelector, modalSelector, modalContentSelector, modalWrapSelector, closeSelector, formSelector) => {
  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        modalWrap = document.querySelector(modalWrapSelector),
        close = document.querySelector(closeSelector),
        form = document.querySelector(formSelector);
  let order = JSON.parse(localStorage.getItem("order")),
      currentQuantity = order.quantity,
      currentPrice = order.price;
  parent.style.display = "none";
  modal.style.display = "block";
  modalContent.append(close);
  document.body.style.overflow = "hidden";
  modalWrap.innerHTML = `
    <div class="modal-order__item">  
      <div class="modal-order__item--info">
        <h4 >${order.toy}</h4>
        <span>${order.subscr}</span>
      </div>
      <div class="wrap-qnty" data-q>
        <button class="btn-qnty minus">&ndash;</button>
        <p data-qty>${currentQuantity}</p>
        <button class="btn-qnty plus">+</button>
      </div>
      <p data-price>${currentPrice} ₽</p>
      <button class="btn-rmv">&times;</button>
    </div>
    <div class="modal-order__total">
      <p>Товаров на сумму: <p data-price> ${currentPrice} ₽</p></p>
    </div>`;
  modalContent.append(form); //Изменение кол-ва позиций

  let currentCount = 1;
  const btnCartMain = document.querySelector('.btn-cart');
  document.querySelector('[data-q]').addEventListener('click', e => {
    const target = e.target,
          quantity = document.querySelector('[data-qty]'),
          prices = document.querySelectorAll('[data-price]');

    if (target.classList.contains('plus')) {
      order.quantity = order.quantity + 1;
      order.price = currentPrice + order.price;
    }

    if (target.classList.contains('minus') && currentCount > 1) {
      order.quantity = order.quantity - 1;
      order.price = order.price - currentPrice;
    }

    quantity.textContent = order.quantity;
    prices.forEach(price => {
      price.textContent = order.price + ' ₽';
    });
    currentCount = order.quantity;
    btnCartMain.textContent = currentCount;
    localStorage.setItem("order", JSON.stringify(order));
  });
  document.querySelector('.btn-rmv').addEventListener('click', e => {
    const target = e.target;
    console.log(target);
    localStorage.removeItem("order");
    Object(_modalNotice__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-order', '[data-cart="empty"]');
    btnCartMain.style.display = 'none';
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
/* harmony import */ var _modalNotice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalNotice */ "./src/js/modules/modalNotice.js");
/* harmony import */ var _checkNumInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkNumInputs */ "./src/js/modules/checkNumInputs.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");




const forms = () => {
  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
  Object(_checkNumInputs__WEBPACK_IMPORTED_MODULE_1__["default"])('input[name = "phone"]');

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);

      if (form.getAttribute('data-order') === "order") {
        let order = JSON.parse(localStorage.getItem("order"));

        for (let key in order) {
          formData.append(key, order[key]);
        }
      } // console.log(formData);


      Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["postData"])('assets/server.php', formData).then(res => {
        if (form.getAttribute('data-order') === "order") {
          Object(_modalNotice__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-order', '[data-order = "thanks"]');
        } else {
          Object(_modalNotice__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-order', '[data-form = "thanks"]');
        }
      }).catch(error => Object(_modalNotice__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal-order', '[data-err = "err"]')).finally(() => {
        clearInputs();
        localStorage.removeItem("order");
        document.querySelector('[data-cart]').style.display = "none";
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
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _modalNotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalNotice */ "./src/js/modules/modalNotice.js");



const itemCards = () => {
  const itemCardRainbow = document.querySelector('[data-toy="rainbow"]'),
        itemCardSort = document.querySelector('[data-toy="sort"]'),
        itemCardWood = document.querySelector('[data-toy="wood"]');
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getProduct"])('assets/db.json').then(res => {
    createItemCard(res.items);
  }).catch(error => Object(_modalNotice__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal-order', '[data-err = "err"]'));

  function createItemCard(response) {
    // console.log(response);
    response.forEach(item => {
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
        createCard(itemCardRainbow);
      } else if (item.type === 'sort') {
        createCard(itemCardSort);
      } else if (item.type === 'wood') {
        createCard(itemCardWood);
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (itemCards);

/***/ }),

/***/ "./src/js/modules/modalNotice.js":
/*!***************************************!*\
  !*** ./src/js/modules/modalNotice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalNotice = (parentSelector, modalSelector) => {
  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector);
  parent.style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // modal.append(close);
  //закрытие модалки по внешней области

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modalNotice);

/***/ }),

/***/ "./src/js/modules/openBurger.js":
/*!**************************************!*\
  !*** ./src/js/modules/openBurger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const openBurger = (burgerTriggerSelector, burgerMenuSelector) => {
  const burgerTrigger = document.querySelector(burgerTriggerSelector),
        burgerMenu = document.querySelector(burgerMenuSelector);
  burgerTrigger.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
    burgerTrigger.classList.toggle('active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (openBurger);

/***/ }),

/***/ "./src/js/modules/openModals.js":
/*!**************************************!*\
  !*** ./src/js/modules/openModals.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createModalItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createModalItem */ "./src/js/modules/createModalItem.js");
/* harmony import */ var _createModalOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createModalOrder */ "./src/js/modules/createModalOrder.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _modalNotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalNotice */ "./src/js/modules/modalNotice.js");





const openModal = (parentSelector, attribute) => {
  const parents = document.querySelectorAll(parentSelector);
  const btnCartMain = document.querySelector('[data-cart]');
  parents.forEach(parent => {
    parent.addEventListener('click', e => {
      const target = e.target;

      if (target.getAttribute(attribute)) {
        const idd = target.getAttribute(attribute); // console.log(idd+" - ID карточки товара на которую кликнула");

        Object(_services_services__WEBPACK_IMPORTED_MODULE_2__["getProduct"])('assets/db.json', idd).then(res => {
          const product = res.items[idd]; // console.log(product);

          const productId = res.items[idd].id; // console.log(prod + " - Ответ от сервера c ID");

          if (idd == productId && attribute == ['data-id']) {
            // console.log(idd);
            Object(_createModalItem__WEBPACK_IMPORTED_MODULE_0__["default"])(product, '.modal-item', '.modal-item__content', '.model-item__wrap');
          } else if (attribute == ['data-btn']) {
            let order = {
              'toy': `${product.title}`,
              'subscr': `${product.subtitle}`,
              'quantity': 1,
              'price': `${product.price}` * 1,
              'img': `${product.src}`
            };
            localStorage.setItem("order", JSON.stringify(order));
            order = JSON.parse(localStorage.getItem("order"));
            Object(_createModalOrder__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal-item', '.modal-order', '.modal-order__content', '.modal-order__wrap', '.modal-order__close', '.form__order');
            btnCartMain.style.display = "block";
          }
        }).catch(error => Object(_modalNotice__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal-order', '[data-err = "err"]'));
      } else if (target.classList.contains('btn-cart')) {
        // console.log(target);
        Object(_createModalOrder__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal-item', '.modal-order', '.modal-order__content', '.modal-order__wrap', '.modal-order__close', '.form__order');
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (openModal);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: getProduct, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const getProduct = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};




/***/ })

/******/ });
//# sourceMappingURL=script.js.map