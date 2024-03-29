import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedsSelect = document.querySelector('.breed-select');
const loadingStatus = document.querySelector('.loader');
const errorStatus = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedsSelect.addEventListener('change', onSelect);

let breedsList = [];

fetchBreeds()
  .then(data => {
    data.map(breed => {
      breedsList.push({ text: breed.name, value: breed.id });
      renderSelectBreeds();
    });
  })
  .catch(err => console.log(err));

function onSelect(e) {
  const breedId = e.target.value;
}

function renderSelectBreeds() {
  breedsList.forEach(breed => {
    const option = document.createElement('option');
    option.textContent = breed.text;
    option.value = breed.id;
    breedsSelect.appendChild(option);
  });
}
