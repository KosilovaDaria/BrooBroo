
const createModalOrder = (product,parentSelector,modalSelector,modalContentSelector,closeSelector,formSelector) => {
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
  // const order = {
  //   productTitle: `${product.title}`,
  //   productSubTitle: `${product.subtitle}`,
  //   productPrice: `${product.price}`
  // } ; 

  // console.log(order);

  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });
};

export default createModalOrder;
