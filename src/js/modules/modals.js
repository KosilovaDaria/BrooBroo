const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);


    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if(e.target) {
          e.preventDefault();
        }
  
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
  
    });

    close.addEventListener('click', () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

//закрытие модалки по внешней области
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }

    });

  }
  // bindModal('.item-card__title', '.modal-item','.modal-item__close');

  bindModal('.btn', '.modal-cart','.modal-cart__close');

  bindModal('.submit__btn', '.modal-thanks','.modal-thanks__close');

  



};

export default modals;