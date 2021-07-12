import modalThanks from './modalThanks';

const forms = () => {
  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');



// Отправка данных на сервер
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data, 
    });
    return await res.text();
  };

// Очистка инпутов
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };



// Сбор данных форм и отправка
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      if (form.getAttribute('data-order') === "order") {
        let order = {
          'toy': localStorage.getItem('toy'),
          'subscr': localStorage.getItem('subscr'),
          'price': localStorage.getItem('price'),
        };
        console.log(order);
        for (let key in order) {
          formData.append(key, order[key]);
        }
      }
      console.log(formData);
      
      postData('assets/server.php', formData) 
          .then(res => {
            console.log(res);

          })
          .finally(() => { 
            clearInputs();
            modalThanks('.modal-order','.modal-thanks','.modal-thanks__close');
        
          });
      });  
  });
};
export default forms;