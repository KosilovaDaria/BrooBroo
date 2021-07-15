const closeModal = (modalSelector,closeSelector,modalContentSelector ) => {
  
  const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector), 
        close = document.querySelector(closeSelector);

  modal.append(close);

  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });

};
export default closeModal;