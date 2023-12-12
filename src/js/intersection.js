import { getPhotoService } from './api';
import { markup } from './markup';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', submitForm);
gallery.addEventListener('click', e => e.preventDefault());
let currentPage = 1;
let scurrentQuery = '';

console.log(gallery);
function submitForm(evt) {
  evt.preventDefault();
  currentPage = 1;
  scurrentQuery = evt.currentTarget.searchQuery.value;
  getPhotoService(scurrentQuery, currentPage).then(data => {
    console.log(data);
    gallery.insertAdjacentHTML('beforeend', data.hits.map(markup).join(''));
    localStorage.setItem('data', JSON.stringify(data.hits));
  });
}

// const storageData = JSON.parse(localStorage.getItem('data'));
// gallery.insertAdjacentHTML('beforeend', storageData.map(markup).join(''));
