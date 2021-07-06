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
  
  wrapItemCard.addEventListener('click', (e) => {
    const target = e.target;
    if (target.getAttribute('data-id')) {
    // if (target.classList.contains('item-card__img') ) {
      const id = target.getAttribute('data-id');
    //  console.log(id+" - ID карточки товара на которую кликнула");
      if (id) {
        const getProduct = async () => {
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
          // console.log(product);
          const prod = res.items[id].id;
          // console.log(prod + " - Ответ от сервера c ID");
          // const product = res.items.find(p => p.id === id);
          if(id == prod){
            createModalItem(product);
          }
        })
        .catch(error => console.log(error));
      }
    }
    modalItemClose.addEventListener('click', () => {
      modalItem.style.display = "none";
      document.body.style.overflow = "";
      modalItemContent.innerHTML = "";
    });
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
          <img data-img = "0" src=${response.minies[0]} alt="">
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
          <button class="button btn">В корзину</button>
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

      modalItemImgMini.forEach ((item) => {
        const imgMiniSrc = item.src;
        item.addEventListener('click', (e) => {
          const target = e.target;
          if (target.getAttribute('data-img')) {
            modalItemImgMain.src = imgMiniSrc;
          }
        });
      });
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