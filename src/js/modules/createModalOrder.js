import modalThanks from './modalThanks';

const createModalOrder = (parentSelector,modalSelector,modalContentSelector,modalWrapSelector,closeSelector,formSelector) => {

  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        modalWrap = document.querySelector(modalWrapSelector),
        close = document.querySelector(closeSelector),
        form = document.querySelector(formSelector);


  let order = JSON.parse(localStorage.getItem ("order")),
      currentQuantity = order.quantity,
      currentPrice = order.price;

  parent.style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalContent.append(close);
  // <div class="modal-order__item--img"><img src= ${order.toy} alt="" width="100"></div>
  modalWrap.innerHTML = `
    <div class="modal-order__item">
     
      <div class="modal-order__item--info">
        <h4 >${order.toy}</h4>
        <span>${order.subscr}</span>
      </div>
      <div data-q>
      <button class="btn-qnty minus">-</button>
      <p data-qty>${currentQuantity}</p>
      <button class="btn-qnty plus">+</button>
      </div>
      
      <p data-price>${currentPrice} руб.</p>
      <button class="btn-rmv">&times;</button>
    </div>
    <div class="modal-order__total">
    <p >Товаров на сумму:<p data-price>${currentPrice} руб.</p></p>
    </div>`;

  modal.append(form);

  //Изменение кол-ва позиций
let currentCount =1;

document.querySelector('[data-q]').addEventListener('click', (e) => {
  const target = e.target; 
    const quantity = document.querySelector('[data-qty]'),
    prices = document.querySelectorAll('[data-price]');
    const btnCartMain = document.querySelector('.btn-cart');

    if(target.classList.contains('plus')) {
      order.quantity = order.quantity+1;
      order.price = currentPrice+order.price;
    }if (target.classList.contains('minus') && currentCount>1){
      order.quantity = order.quantity-1;
      order.price = order.price-currentPrice;
    }
      quantity.textContent=order.quantity;
      prices.forEach(price => {
        price.textContent=order.price;
      });
      currentCount=order.quantity;
      btnCartMain.textContent=currentCount;

      localStorage.setItem ("order", JSON.stringify(order));
      
  });

  document.querySelector('.btn-rmv').addEventListener('click', (e) => {
    const target = e.target; 

    console.log(target);
    localStorage.removeItem("order");
    modalThanks('.modal-order','.modal-thanks');
  });
};

export default createModalOrder;
