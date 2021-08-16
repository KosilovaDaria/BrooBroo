const openBurger = (burgerTriggerSelector, burgerMenuSelector) => {
  const burgerTrigger = document.querySelector(burgerTriggerSelector),
        burgerMenu = document.querySelector(burgerMenuSelector);

  burgerTrigger.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
    burgerTrigger.classList.toggle('active');
  
});
};
export default openBurger;