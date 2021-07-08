const createModalItem = (product,modalSelector,modalContentSelector,closeSelector) => {
  const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector), 
        close = document.querySelector(closeSelector);
  
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modal.append(close);
  modalContent.innerHTML = `
  <div class="item wrapper">
    <div class="item__img">
      <div class="item__img--main">
        <img class="img--main" src= ${product.src} alt="">
      </div>
      <div class="item__img--mini">
        <img class="img-active" data-img = "0" src=${product.minies[0]} alt="">
        <img data-img = "1" src=${product.minies[1]} alt="">
        <img data-img = "2" src=${product.minies[2]} alt="">
        <img data-img = "3" src=${product.minies[3]} alt="">
      </div>
    </div>
    <div class="item__text">
      <div class="item__text--header">
        <h1>${product.title}</h1>
        <span>${product.subtitle}</span>
        <h4><span>${product.price}</span></h4>
        <button class="button" data-btn=${product.id}>В корзину</button>
      </div>

      <div class="item__text--descrip">
        <p>${product.description}</p>
      </div>
        <div class="item__text--info">
          <p><span>Материалы:</span> ${product.material}</p>
          <p><span>Размеры:</span> ${product.size}</p>
          <p><span>Рекомендации по возрасту:</span>  ${product.recomends}</p>
        </div>
    </div>
  </div>
  `;  
  const modalItemImgMini = document.querySelectorAll('.item__img--mini [data-img]'),
          modalItemImgMain = document.querySelector('.item__img--main img');

  modalItemImgMini.forEach (item => {
    const imgMiniSrc = item.src;
    item.addEventListener('click', function(e) {
      const target = e.target;
      this.classList.add("img-active");
      if (target.getAttribute('data-img')) {
        modalItemImgMain.src = imgMiniSrc;
      }
    });
  });

  close.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
  });
};

export default createModalItem;