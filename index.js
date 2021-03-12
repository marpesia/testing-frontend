import { getData } from './service/api.js';
import { getList } from './components/testTakerComponent.js';

const userDataFields = ['firstname', 'lastname', 'email'];

const loadData = () => {
  getData()
    .then(data => {
      let wrapper = window.document.getElementById('list');
      let list = window.document.getElementById('list-item');
      let loading = window.document.getElementById('loading');
      getList(list, data, userDataFields);
      loading.classList.add('hide');
      wrapper.classList.remove('hide');
    })
    .catch(err => {
      throw err;
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
  loadData();
});

