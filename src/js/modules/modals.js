import createModalItem from './createModalItem';
import createModalOrder from './createModalOrder';

const modals = (parentSelector,attribute) => {
    const parent = document.querySelector(parentSelector);

    parent.addEventListener('click', (e) => {
      const target = e.target;

      if(target.getAttribute(attribute)) {
        const idd = target.getAttribute(attribute);
        // console.log(idd+" - ID карточки товара на которую кликнула");

        if (idd) {
          const getProduct = async () => {
            const res = await fetch('assets/db.json');
        
            if(!res.ok) {
              throw new Error (`Could not fetch ${'assets/db.json'}, status: ${res.status}`);
            }
          return await res.json();
          };
  
          getProduct('assets/db.json', idd)
          .then((res) => {
            const product = res.items[idd];
            // console.log(product);
            const prod = res.items[idd].id;
            // console.log(prod + " - Ответ от сервера c ID");

            if(idd == prod && attribute == ['data-id']) {
              createModalItem(product, '.modal-item', '.modal-item__content', '.modal-item__close');
            } else if (attribute == ['data-btn']) {
            createModalOrder(product, '.modal-item', '.modal-order','.modal-order__content', '.modal-order__close','.form__order');
            localStorage.setItem('toy',`${product.title}`);
            localStorage.setItem('subscr',`${product.subtitle}`);
            localStorage.setItem('price',`${product.price}`);
            }
          })
          .catch(error => console.log(error));
        }
      }
    });



};

export default modals;