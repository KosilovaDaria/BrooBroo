// "use strict";

// // import {} from "./main";

// const wrapItemCard = document.querySelector('.item-card__wrap');
// const wrapItem = document.querySelector('.item');
// // console.log(wrapItemCard);

// // Получение данных из базы
// const getResourse = async (url) => {
//   const res = await fetch(url);

//   if(!res.ok) {
//     throw new Error (`Could not fetch ${url}, status: ${res.status}`);
//   }
//   return await res.json();
// };

// getResourse('assets/db.json')
//   .then(res => createItemCard(res.items))
//   .catch(error => console.log(error));

// function createItemCard(response) {
//   response.forEach((item) => {
//     const divItemCard = document.createElement('div');
//     divItemCard.classList.add('item-card');
//     wrapItemCard.append(divItemCard);

//     divItemCard.innerHTML = `
//    <img class="item-card__img" src=${item.src} alt="${item.alt}">
//       <div class="item-card__title">
//         <h4>${item.title}</h4>
//         <span>${item.price}</span>
//       </div>
//       <div class="item-card__text">
//         <span>${item.text}</span>
//         <button class="button">В корзину</button>
//       </div>
//     `;
  
//     if(item.largeCard) {
//       divItemCard.classList.add('item-card__lg');
//       divItemCard.innerHTML = `
//       <img class="item-card__img img__lg" src=${item.src} alt="${item.alt}">
//       <div class="item-card__title item-card__lg">
//         <h4>${item.title}</h4>
//         <span>${item.price}</span>
//       </div>
//       <div class="item-card__text item-card__lg">
//         <span>${item.text}</span>
//         <button class="button">В корзину</button>
//       </div>
//     `;
//     }
//     const headers = document.querySelectorAll('h4');
//     headers.forEach(header => {
//       header.addEventListener('click', () => {
//         window.location.href = 'item.html';
//       });
//     });
    

//     wrapItemCard.appendChild(divItemCard);
//   });
// }




// const form = document.querySelector('form'),
//       inputs = document.querySelectorAll('input');

// // Отправка данных на сервер
// const postData = async (url, data) => {
//   let res = await fetch(url, {
//     method: "POST",
//     body: data, 
//   });
//   return await res.text();
// };

// // Очистка инпутов
// const clearInputs = () => {
//   inputs.forEach(item => {
//     item.value = '';
//   });
// };

// // Сбор данных формы и отправка
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const formData = new FormData(form);
//     console.log(formData);
    
//     postData('assets/server.php', formData) 
//         .then(res => {
//           console.log(res);
//         })
//         .finally(() => { 
//           clearInputs();
//         });
//   });

  




// // function createItemCard(arr) {
// //   for (let i = 0; i < arr.length; i++){
// //     let divItemCard = document.createElement('div');
// //     divItemCard.classList.add('item-card');
// //     wrapItemCard.append(divItemCard);

// //     let imgItemCard = document.createElement('img');
// //     imgItemCard.classList.add('item-card__img');
// //     imgItemCard.src = arr[i].src;
// //     imgItemCard.alt = arr[i].alt;
// //     divItemCard.append(imgItemCard);

// //     let titleItemCard = document.createElement('div');
// //     titleItemCard.classList.add('item-card__title');
// //     divItemCard.append(titleItemCard);

// //     let headerItemCard = document.createElement('h4');
// //     headerItemCard.textContent = arr[i].title;
// //     titleItemCard.append(headerItemCard);
    
// //     let priceItemCard = document.createElement('span');
// //     priceItemCard.textContent = arr[i].price;
// //     titleItemCard.append(priceItemCard);

// //     let textItemCard = document.createElement('div');
// //     textItemCard.classList.add('item-card__text');
// //     divItemCard.append(textItemCard);

// //     let spanItemCard = document.createElement('span');
// //     spanItemCard.innerHTML= arr[i].text;
// //     textItemCard.append(spanItemCard);

// //     let btnItemCard = document.createElement('button');
// //     btnItemCard.classList.add('button');
// //     btnItemCard.textContent = 'В корзину';
// //     textItemCard.append(btnItemCard);

// //     if(arr[i].largeCard) {
// //       divItemCard.classList.add('item-card__lg');
// //       imgItemCard.classList.add('img__lg');
// //       titleItemCard.classList.add('item-card__lg');
// //       textItemCard.classList.add('item-card__lg');
// //     }
// //   }
// // }
// // createItemCard(items);


// // const validateEmail = () => {
// //   inputs.forEach(item => {
// //     item.addEventListener('input', () => {
// //   /*получаем от пользователя значение инпута
// //   и с помощью регулярных выражений ищем все не числа,
// //   если они есть заеняем на пустоту */
// //       item.value = item.value.replace(/\D/, '');
// //     });
// //   });
// // };