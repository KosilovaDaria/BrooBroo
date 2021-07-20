import modalThanks from './modalThanks';
import checkNumInputs from './checkNumInputs';
import {postData} from '../services/services';

const forms = () => {

  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  checkNumInputs('input[name = "phone"]');

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      if (form.getAttribute('data-order') === "order") {
        let order = JSON.parse(localStorage.getItem ("order"));
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
            modalThanks('.modal-order','.modal-thanks');
            localStorage.removeItem("order");
          });
      });  
  });
};
export default forms;