const createModalOrder = (product,parentSelector,modalSelector,modalContentSelector,closeSelector) => {
  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector),
        close = document.querySelector(closeSelector);
        
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
        <form class = "form form__order" id="form">
          <input class = "form__input" name="name" type="text" placeholder="Ваше имя">
          <input class = "form__input" name="email" type="text" placeholder="Ваш e-mail">
          <input class = "form__input" name="phone" type="text" placeholder="Ваш телефон">
          <button class="button submit__btn"  type="submit" name="submit">Оформить заказ</button>
        </form>
        <!-- <button class="button">Оформить заказ</button> -->
  `;
  
  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });
};

export default createModalOrder;