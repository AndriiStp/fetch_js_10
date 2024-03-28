import axios from 'axios';

const breeds = document.querySelector('breed-select');

axios.defaults.headers.common['x-api-key'] =
  'live_BOUcQBkQU24naJdyeEEfzWnFXCLg2oCSBdK5XaozfAkbX7IxnzAryZW6TQiQjTfI';
const URL = 'https://api.thecatapi.com/v1/breeds';
