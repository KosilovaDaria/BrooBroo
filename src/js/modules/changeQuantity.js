const changeQntyPrice = (quantityAttribute, priceAttribute,currentCount,currentPrice ) => {
  
  const quantity = document.querySelector(quantityAttribute),
        prices = document.querySelectorAll(priceAttribute);

  localStorage.setItem('quantity', currentCount);
  quantity.textContent =localStorage.getItem('quantity');
  prices.forEach(price => {
    localStorage.setItem('price',currentPrice+ ' руб');
    price.textContent =localStorage.getItem('price');
  });
}; 
export default changeQntyPrice;