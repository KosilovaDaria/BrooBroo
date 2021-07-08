const modalThanks = ( modalSelector, closeSelector) => {
  const modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);

  modal.style.display = "block";
  document.body.style.overflow = "hidden";


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

};

export default modalThanks;