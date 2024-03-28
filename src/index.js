import axios from 'axios';

const breeds = document.querySelector('breed-select');
const loadingStatus = document.querySelector('loader');
const errorStatus = document.querySelector('error');
const catInfo = document.querySelector('cat-info');

breeds.addEventListener('select', onSelect);

const onSelect = e => {
  console.log(e.currentTarget.value);
};

axios.defaults.headers.common['x-api-key'] =
  'live_BOUcQBkQU24naJdyeEEfzWnFXCLg2oCSBdK5XaozfAkbX7IxnzAryZW6TQiQjTfI';
const URL = 'https://api.thecatapi.com/v1/breeds';
