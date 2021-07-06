// import { forEach } from "core-js/core/array";

const itemCards = () => {
  
  const wrapItemCard = document.querySelector('.item-card__wrap');
  // const modal = document.querySelector('.modal-cart');
 
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
      const divItemCardId = document.createElement('div');
      divItemCardId.setAttribute('data-id', `${item.id}`);
      divItemCard.append(divItemCardId);

      divItemCardId.innerHTML = `
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
    
      if(item.largeCard) {
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
      // console.log(divItemCard);
      wrapItemCard.appendChild(divItemCard);
    });
  }
  // const modal = document.querySelector('.modal-item');
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
  
  wrapItemCard.addEventListener('click', (e) => {
    const target = e.target;
      if (target.getAttribute('data-id')) {
    // if (target.classList.contains('item-card__img') ) {
     const id = target.getAttribute('data-id');
     console.log(id+" - ID карточки товара на которую кликнула");
     if (id) {
      const getProduct = async (id) => {
        const res = await fetch('assets/db.json');
      
        if(!res.ok) {
          throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
        }
        
        // const product = res.json().items.find(p => p.id === id);
        // return product;
        return await res.json();
      };
    getProduct('assets/db.json', id)
    .then((res) => {
      const product = res.items[id];
      console.log(product);
      const prod = res.items[id].id;
      console.log(prod + " - Ответ от сервера c ID");
      // const product = res.items.find(p => p.id === id);
     if(id == prod){
      createModalItem(product);
     }

      
    })
    .catch(error => console.log(error));
    // getProduct('assets/db.json')
    // .then(res => createModalItem(res))
    // .catch(error => console.log(error));
     }
  
      // console.log();
    }
    modalItemClose.addEventListener('click', () => {
      modalItem.style.display = "none";
      document.body.style.overflow = "";
      modalItemContent.innerHTML = "";
    });
    
  });

  // const getProduct = async (id) => {
  //   const res = await fetch('assets/db.json');
  
  //   if(!res.ok) {
  //     throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
  //   }
    
  //   const product = res.json().items.find(p => p.id === id);
  //   return product;
  //   // return res.json();
  // };
  // getProduct('assets/db.json')
  //   .then((res) => {
  //     const product = res.items.find(p => p.id === 2);
  //     console.log(product);
  //   })
  //   .catch(error => console.log(error));
    

  function createModalItem(response) {
  // response.forEach((i) => {
    modalItem.style.display = "block";
    document.body.style.overflow = "hidden";
    modalItem.append(modalItemClose);
    modalItemContent.innerHTML = `
    <div class="item wrapper">
      <div class="item__img">
        <div class="item__img--main">
          <img src= ${response.src} alt="">
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
          <h1>${response.title}</h1>
          <span>Набор для сортировки по цветам </br> 7 шаров, 7 тарелочек, 1 чаша</span>
          <h4><span>${response.price}</span></h4>
          <button class="button btn">В корзину</button>
        </div>
  
        <div class="item__text--descrip">
          <p>${response.description}</p>
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
  // });
      
   
      
  }      
  
 const modalCart = document.querySelector('.modal-cart');
  modalItem.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('btn') ) {
      modalItem.style.display = "none";
      modalCart.style.display = "block";
      document.body.style.overflow = "hidden";

    }
  });



};

export default itemCards;