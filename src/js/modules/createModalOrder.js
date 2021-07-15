import changeQntyPrice from "./changeQuantity";

const createModalOrder = (product,parentSelector,modalSelector,modalContentSelector,modalWrapSelector,closeSelector,formSelector) => {

  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        modalWrap = document.querySelector(modalWrapSelector),
        close = document.querySelector(closeSelector),
        form = document.querySelector(formSelector);

  let currentQty = localStorage.getItem('quantity'),
      currentPrice = localStorage.getItem('price');

  parent.style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalContent.append(close);
  modalWrap.innerHTML = `
    <div class="modal-order__item">
      <div class="modal-order__item--img"><img src= ${product.src} alt="" width="100"></div>
      <div class="modal-order__item--info">
        <h4>${product.title}</h4>
        <span>${product.subtitle}</span>
      </div>
      <button class="btn-qnty minus">-</button>
      <p data-qty>${currentQty}</p>
      <button class="btn-qnty plus">+</button>
      <p data-price>${currentPrice} руб.</p>
      <button class="btn-rmv">&times;</button>
    </div>
    <div class="modal-order__total">
    <p >Товаров на сумму:<p data-price>${currentPrice} руб.</p></p>
    </div>`;

  modal.append(form);

  //Изменение кол-ва позиций
  const minusBtn = document.querySelector('.minus'),
        plusBtn = document.querySelector('.plus');

  let currentCount = 1;

  minusBtn.addEventListener('click', () => {
    if (currentCount>1) {
      currentCount=currentCount-1;
      currentPrice = currentPrice / 2;
      changeQntyPrice('[data-qty]','[data-price]',currentCount,currentPrice);
    } else {
      currentCount = 1;
    }
  });

  plusBtn.addEventListener('click', () => {
    currentCount=currentCount+1;
    currentPrice = currentPrice * 2;
    changeQntyPrice('[data-qty]','[data-price]',currentCount,currentPrice);
  });
};

export default createModalOrder;
