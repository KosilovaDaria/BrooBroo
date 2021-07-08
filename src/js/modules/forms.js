import modalThanks from './modalThanks';

const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

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
    input.forEach(item => {
      item.value = '';
    });
  };

// Сбор данных форм и отправка
  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(item);
      console.log(formData);
      
      postData('assets/server.php', formData) 
          .then(res => {
            console.log(res);

          })
          .finally(() => { 
            clearInputs();
            modalThanks('.modal-thanks','.modal-thanks__close');
        
          });
      });  
  });
};
export default forms;