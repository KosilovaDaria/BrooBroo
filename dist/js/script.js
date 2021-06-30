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
console.log(2);


 // window.addEventListener('DOMContentLoaded', () => {
// });

Object(_modules_itemCards__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'); // Отправка данных на сервер

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }; // Очистка инпутов


  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  }; // Сбор данных форм и отправка


  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(item);
      console.log(formData);
      postData('assets/server.php', formData).then(res => {
        console.log(res);
      }).finally(() => {
        clearInputs();
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
  const wrapItemCard = document.querySelector('.item-card__wrap'); // const modal = document.querySelector('.modal-cart');
  // wrapItemCard.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (target.classList.contains('btn') ) {
  //     modal.style.display = "block";
  //       document.body.style.overflow = "hidden";
  //   }
  //   close.addEventListener('click', () => {
  //     modal.style.display = "none";
  //     document.body.style.overflow = "";
  //   });
  // });

  const getResourse = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getResourse('assets/db.json').then(res => createItemCard(res.items)).catch(error => console.log(error));

  function createItemCard(response) {
    response.forEach(item => {
      const divItemCard = document.createElement('div');
      divItemCard.classList.add('item-card');
      wrapItemCard.append(divItemCard);
      divItemCard.innerHTML = `
     <img class="item-card__img" src=${item.src} alt="${item.alt}">
        <div class="item-card__title">
          <h4>${item.title}</h4>
          <span>${item.price}</span>
        </div>
        <div class="item-card__text">
          <span>${item.text}</span>
          <button class="button btn" data-btn>В корзину</button>
        </div>
      `;

      if (item.largeCard) {
        divItemCard.classList.add('item-card__lg');
        divItemCard.innerHTML = `
        <img class="item-card__img img__lg" src=${item.src} alt="${item.alt}">
        <div class="item-card__title item-card__lg">
          <h4>${item.title}</h4>
          <span>${item.price}</span>
        </div>
        <div class="item-card__text item-card__lg">
          <span>${item.text}</span>
          <button class="button btn" data-btn>В корзину</button>
        </div>
      `;
      }

      console.log(divItemCard);
      wrapItemCard.appendChild(divItemCard);
    });
  } // const modal = document.querySelector('.modal-item');
  // wrapItemCard.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (target.classList.contains('item-card__img') ) {
  //     modal.style.display = "block";
  //       document.body.style.overflow = "hidden";
  //   }
  //   close.addEventListener('click', () => {
  //     modal.style.display = "none";
  //     document.body.style.overflow = "";
  //   });
  // });


  const modalItem = document.querySelector('.modal-item'),
        modalItemContent = document.querySelector('.modal-item__content'),
        modalItemClose = document.querySelector('.modal-item__close');

  function createModalItem() {
    modalItem.style.display = "block";
    document.body.style.overflow = "hidden";
    modalItem.append(modalItemClose);
    modalItemContent.innerHTML = `
    <div class="item wrapper">
      <div class="item__img">
        <div class="item__img--main">
          <img src="assets/img/balls.jpg" alt="">
        </div>
        <div class="item__img--mini">
          <img src="assets/img/balls.jpg" alt="">
          <img src="assets/img/balls.jpg" alt="">
          <img src="assets/img/balls.jpg" alt="">
          <img src="assets/img/balls.jpg" alt="">
        </div>
      </div>
      <div class="item__text">
        <div class="item__text--header">
          <h1> шары на тарелочках в чаше</h1>
          <span>Набор для сортировки по цветам </br> 7 шаров, 7 тарелочек, 1 чаша</span>
          <h4><span>1500 р</span></h4>
          <button class="button btn">В корзину</button>
        </div>
  
        <div class="item__text--descrip">
          <p>Этот набор радужных шаров и тарелок можно использовать для сортировки по цвету,
          сопоставления цветов, подсчета, складывания и многого другого. 
            Набор расписан карнаубским воском, что делает его идеальным для маленьких ручек.</p>
          <p>Обратите внимание, что все шары выточены вручную и могут быть неидеально круглыми.</p>
        </div>
          <div class="item__text--info">
            <p><span>Материалы:</span> липа, карнаубский воск</p>
            <p><span>Размеры:</span> шар 3 см,  тарелка 4 см,  чаша 10 см</p>
            <p><span>Рекомендации по возрасту:</span> детям от 3 лет</p>
          </div>
       
      </div>
    </div>
    `;
  }

  wrapItemCard.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('item-card__img')) {
      createModalItem();
      console.log();
    }

    modalItemClose.addEventListener('click', () => {
      modalItem.style.display = "none";
      document.body.style.overflow = "";
      modalItemContent.innerHTML = "";
    });
  });
  const modalCart = document.querySelector('.modal-cart');
  modalItem.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('btn')) {
      modalItem.style.display = "none";
      modalCart.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (itemCards);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          wrapItemCard = document.querySelector('.item-card__wrap');
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });
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
  } // bindModal('.item-card__title', '.modal-item','.modal-item__close');


  bindModal('.btn', '.modal-cart', '.modal-cart__close');
  bindModal('.submit__btn', '.modal-thanks', '.modal-thanks__close');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map