import modalNotice from './modalNotice';
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
      // console.log(formData);
      
      
      postData('assets/server.php', formData) 
          .then(res => {
            if (form.getAttribute('data-order') === "order"){
              modalNotice('.modal-order','[data-order = "thanks"]');
            } else {
              modalNotice('.modal-order','[data-form = "thanks"]');
            }
          })
          .catch(error => modalNotice('.modal-order','[data-err = "err"]'))
          .finally(() => { 
            clearInputs();
            localStorage.removeItem("order");
            document.querySelector('[data-cart]').style.display = "none";
          });
      });  
  });
};
export default forms;