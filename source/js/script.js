"use strict";
let items = [
  {
    isAvailable: true,
    src: './img/balls.jpg', 
    alt: "Шары",
    title: 'Шары на тарелочках в чаше',
    text: 'Набор для сортировки по цветам<br>7 шаров, 7 тарелочек, 1 чаша', 
    price: 1500,
    largeCard: true
  },
  {
    isAvailable: true,
    src: './img/dolls.jpg', 
    alt: "Куклы",
    title: 'Куклы-колышки в стаканчиках',
    text: 'Набор для сортировки по цветам<br>7 шаров, 7 тарелочек, 1 чаша', 
    price: 1500,
    largeCard: true
  },
  {
    isAvailable: true,
    src: './img/rainbow.jpg', 
    alt: "Радуга",
    title: 'Радуга Монтессори',
    text: '12 элементов<br>Радужные цвета', 
    price: 2500,
    largeCard: false
  },
  {
    isAvailable: true,
    src: './img/rainbow_violet.jpeg', 
    alt: "Радуга градиент",
    title: 'Радуга Монтессори',
    text: '12 элементов<br>Фиолетовый градиент', 
    price: 2500,
    largeCard: false
  },
  {
    isAvailable: true,
    src: './img/rainbow_wood.jpg', 
    alt: "Радуга дерево",
    title: 'Радуга Монтессори',
    text: '12 элементов<br>Натуральное дерево', 
    price: 2500,
    largeCard: false
  },
  {
    isAvailable: true,
    src: './img/rainbow_reverse.jpg', 
    alt: "Радуга обратный градиент",
    title: 'Радуга Монтессори',
    text: '12 элементов<br>Фиолетовый градиент', 
    price: 2500,
    largeCard: false
  },
];

let wrapItemCard = document.querySelector('.item-card__wrap');
console.log(wrapItemCard);

function createItemCard(arr) {
  for (let i = 0; i < arr.length; i++){
    let divItemCard = document.createElement('div');
    divItemCard.classList.add('item-card');
    wrapItemCard.append(divItemCard);

    let imgItemCard = document.createElement('img');
    imgItemCard.classList.add('item-card__img');
    imgItemCard.src = arr[i].src;
    imgItemCard.alt = arr[i].alt;
    divItemCard.append(imgItemCard);

    let titleItemCard = document.createElement('div');
    titleItemCard.classList.add('item-card__title');
    divItemCard.append(titleItemCard);

    let headerItemCard = document.createElement('h4');
    headerItemCard.textContent = arr[i].title;
    titleItemCard.append(headerItemCard);
    
    let priceItemCard = document.createElement('span');
    priceItemCard.textContent = arr[i].price;
    titleItemCard.append(priceItemCard);

    let textItemCard = document.createElement('div');
    textItemCard.classList.add('item-card__text');
    divItemCard.append(textItemCard);

    let spanItemCard = document.createElement('span');
    spanItemCard.innerHTML= arr[i].text;
    textItemCard.append(spanItemCard);

    let btnItemCard = document.createElement('button');
    btnItemCard.classList.add('button');
    btnItemCard.textContent = 'В корзину';
    textItemCard.append(btnItemCard);

    if(arr[i].largeCard) {
      divItemCard.classList.add('item-card__lg');
      imgItemCard.classList.add('img__lg');
      titleItemCard.classList.add('item-card__lg');
      textItemCard.classList.add('item-card__lg');
    }
  }
}
createItemCard(items);