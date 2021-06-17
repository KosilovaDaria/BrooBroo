const itemCards = () => {
  
  const wrapItemCard = document.querySelector('.item-card__wrap');
  

  const getResourse = async (url) => {
    const res = await fetch(url);
  
    if(!res.ok) {
      throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };
  
  getResourse('assets/db.json')
    .then(res => createItemCard(res.items))
    .catch(error => console.log(error));

  function createItemCard(response) {
    response.forEach((item) => {
      const divItemCard = document.createElement('div');
      divItemCard.classList.add('item-card');
      wrapItemCard.append(divItemCard);
   
  
      divItemCard.innerHTML = `
     <img class="item-card__img" src=${item.src} alt="${item.alt}">
        <div class="item-card__title">
          <h4>${item.title}</h4>
          <span>${item.price}</span>
        </div>
        <div class="item-card__text">
          <span>${item.text}</span>
          <button class="button">В корзину</button>
        </div>
      `;
    
      if(item.largeCard) {
        divItemCard.classList.add('item-card__lg');
        divItemCard.innerHTML = `
        <img class="item-card__img img__lg" src=${item.src} alt="${item.alt}">
        <div class="item-card__title item-card__lg">
          <h4>${item.title}</h4>
          <span>${item.price}</span>
        </div>
        <div class="item-card__text item-card__lg">
          <span>${item.text}</span>
          <button class="button">В корзину</button>
        </div>
      `;
      }
      const headers = document.querySelectorAll('h4');
      headers.forEach(header => {
        header.addEventListener('click', () => {
          window.location.href = 'item.html';
        });
      });
      
  
      wrapItemCard.appendChild(divItemCard);
    });
  }

};


export default itemCards;