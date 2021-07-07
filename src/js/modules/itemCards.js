// import { forEach } from "core-js/core/array";

const itemCards = () => {
  
  const wrapItemCard = document.querySelector('.item-card__wrap');

  const getResourse = async (url) => {
    const res = await fetch(url);
  
    if(!res.ok) {
      throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };
  
  getResourse('assets/db.json')
    .then(res => {
      createItemCard(res.items);
    })
    .catch(error => console.log(error));

  function createItemCard(response) {
    response.forEach((item) => {
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
      btnId.textContent= "Подробнее";
      divItemCard.append(btnId);

      // console.log(divItemCard);
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
  wrapItemCard.addEventListener('click', (e) => {
    const target = e.target;
    if (target.getAttribute('data-id')) {
    // if (target.classList.contains('item-card__img') ) {
      const idItem = target.getAttribute('data-id');
     console.log(idItem+" - ID карточки товара на которую кликнула");
      if (idItem) {
        const getProduct = async () => {
          const res = await fetch('assets/db.json');
      
          if(!res.ok) {
            throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
          }
        // const product = res.json().items.find(p => p.id === id);
        // return product;
        return await res.json();
        };

        getProduct('assets/db.json', idItem)
        .then((res) => {
          const product = res.items[idItem];
          console.log(product);
          const prod = res.items[idItem].id;
          console.log(prod + " - Ответ от сервера c ID");
          // const product = res.items.find(p => p.id === id);
          if(idItem == prod){
            createModalItem(product);
            // createModalOrder(product);
          }
        })
        
        .catch(error => console.log(error));
      }
    }
 
  });

  modalItemClose.addEventListener('click', () => {
    modalItem.style.display = "none";
    document.body.style.overflow = "";
    modalItemContent.innerHTML = "";
  });

  function createModalItem(response) {
    modalItem.style.display = "block";
    document.body.style.overflow = "hidden";
    modalItem.append(modalItemClose);
    modalItemContent.innerHTML = `
    <div class="item wrapper">
      <div class="item__img">
        <div class="item__img--main">
          <img class="img--main" src= ${response.src} alt="">
        </div>
        <div class="item__img--mini">
          <img class="img-active" data-img = "0" src=${response.minies[0]} alt="">
          <img data-img = "1" src=${response.minies[1]} alt="">
          <img data-img = "2" src=${response.minies[2]} alt="">
          <img data-img = "3" src=${response.minies[3]} alt="">
        </div>
      </div>
      <div class="item__text">
        <div class="item__text--header">
          <h1>${response.title}</h1>
          <span>${response.subtitle}</span>
          <h4><span>${response.price}</span></h4>
          <button class="button" data-btn=${response.id}>В корзину</button>
        </div>
  
        <div class="item__text--descrip">
          <p>${response.description}</p>
        </div>
          <div class="item__text--info">
            <p><span>Материалы:</span> ${response.material}</p>
            <p><span>Размеры:</span> ${response.size}</p>
            <p><span>Рекомендации по возрасту:</span>  ${response.recomends}</p>
          </div>
      </div>
    </div>
    `;  
  
    const modalItemImgMini = document.querySelectorAll('.item__img--mini [data-img]'),
          modalItemImgMain = document.querySelector('.item__img--main img');

    modalItemImgMini.forEach (item => {
      const imgMiniSrc = item.src;
      item.addEventListener('click', function(e) {
        const target = e.target;
        
        this.classList.add("img-active");
        
        if (target.getAttribute('data-img')) {
          modalItemImgMain.src = imgMiniSrc;
        }
      });
    });
    
  } 


  const modalOrder = document.querySelector('.modal-order'),
        modalOrderContent = document.querySelector('.modal-order__content'),
        modalOrderClose = document.querySelector('.modal-order__close');

  modalItem.addEventListener('click', (e) => {
    const target = e.target;
    if (target.getAttribute('data-btn')) {
      const idBtn = target.getAttribute('data-btn');
      console.log(idBtn);
      
      if (idBtn) {
        const getProduct = async () => {
          const res = await fetch('assets/db.json');
      
          if(!res.ok) {
            throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
          }
        // const product = res.json().items.find(p => p.id === id);
        // return product;
        return await res.json();
        };
        getProduct('assets/db.json', idBtn)
        .then((res) => {
          const product = res.items[idBtn];
          console.log(product);
          const prod = res.items[idBtn].id;
          console.log(prod + " - Ответ от сервера c ID");
          // const product = res.items.find(p => p.id === id);
          if(idBtn == prod){
 
            createModalOrder(product);
          }
        })
        .catch(error => console.log(error));
      }
    }
  });

    modalOrderClose.addEventListener('click', () => {
    modalOrder.style.display = "none";
    document.body.style.overflow = "";
    modalOrderContent.innerHTML = "";
  });

  function createModalOrder(response) {
    modalItem.style.display = "none";
    modalOrder.style.display = "block";
    document.body.style.overflow = "hidden";
    modalOrder.append(modalOrderClose);
    modalOrderContent.innerHTML = `
        <h2>Ваш заказ</h2>
        <!-- <button class="button">Продолжить покупки</button> -->
          <div class="modal-order__wrap">
            <div class="modal-order__item">
              <div class="modal-order__item--img"><img src= ${response.src} alt="" width="120"></div>
              <div class="modal-order__item--info">
                <h4>${response.title}</h4>
               <span>${response.subtitle}</span>
                <p>${response.material}</p>
              </div>
              <button class="button">1</button>
              <p>${response.price} ₽</p>
              <button class="button btn__order">&times;</button>
            </div>
            <div class="modal-order__total">
            <p>Товаров на сумму:${response.price} ₽</p>
            </div>
          </div>
          <form class = "form form__order" id="form">
            <input class = "form__input" name="name" type="text" placeholder="Ваше имя">
            <input class = "form__input" name="email" type="text" placeholder="Ваш e-mail">
            <input class = "form__input" name="phone" type="text" placeholder="Ваш телефон">
            <button class="button submit__btn"  type="submit" name="submit">Оформить заказ</button>
          </form>
          <!-- <button class="button">Оформить заказ</button> -->
    `;
  }


};

export default itemCards;