import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedsSelect = document.querySelector('.breed-select');
const loadingStatus = document.querySelector('.loader');
const errorStatus = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedsSelect.addEventListener('change', onSelect);

let breedsList = [];

fetchBreeds()
  .then(data => {
    data.forEach(breed => {
      breedsList.push({ value: breed.id, text: breed.name });
      renderSelectBreeds();
    });
  })
  .catch(err => console.log(err));

function renderSelectBreeds() {
  breedsList.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.text;
    breedsSelect.appendChild(option);
  });
}

function onSelect(e) {
  const breedId = breedsSelect.value;
  console.log(breedId);
}
