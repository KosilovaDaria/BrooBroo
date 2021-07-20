const modalThanks = (parentSelector, modalSelector) => {
  const parent = document.querySelector(parentSelector),
        modal = document.querySelector(modalSelector);

  parent.style.display = "none";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  

    //закрытие модалки по внешней области
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default modalThanks;