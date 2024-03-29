import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breeds = document.querySelector('.breed-select');
const loadingStatus = document.querySelector('.loader');
const errorStatus = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const onSelect = e => {
  console.log(e.currentTarget.value);
};

breeds.addEventListener('change', onSelect);
