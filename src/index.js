import api from './js/apiService';
import template from './templates/imagesMarkup.hbs';

import './styles.css';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('#gallery'),
  button: document.querySelector('#loadButton'),
};

refs.searchForm.addEventListener('submit', searchQuery);
refs.button.addEventListener('click', loadMoreBtnHandler);

function searchQuery(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.query.value;
  api.searchQuery = input;
  refs.gallery.innerHTML = '';
  api.resetPage();
  getAndInsertImg();
}
function loadMoreBtnHandler() {
  getAndInsertImg();
  setTimeout(() => {
    window.scrollTo({
      top: +window.scrollY + 700,
      behavior: 'smooth',
    });
  }, 300);
}

function insertLi(item) {
  return refs.gallery.insertAdjacentHTML('beforeend', template(item));
}
function getAndInsertImg() {
  api.fetchImg().then(hits => {
    insertLi(hits);
  });
}
