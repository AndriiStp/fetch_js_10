// import { fetchBreeds, fetchCatByBreed } from './cat-api';

// const breedsSelect = document.querySelector('.breed-select');
// const loadingStatus = document.querySelector('.loader');
// const errorStatus = document.querySelector('.error');
// const catInfo = document.querySelector('.cat-info');

// let breedsList = [];

// function renderSelectBreeds() {
//   breedsList.forEach(breed => {
//     const option = document.createElement('option');
//     option.value = breed.id;
//     option.textContent = breed.text;
//     breedsSelect.appendChild(option);
//   });
// }
// fetchBreeds()
//   .then(data => {
//     data.forEach(breed => {
//       breedsList.push({ value: breed.id, text: breed.name });
//       renderSelectBreeds();
//     });
//   })
//   .catch(err => console.log(err));

// function onSelect(e) {
//   const breedId = breedsSelect.value;
//   console.log(breedId);

//   fetchCatByBreed(breedId).then(data => {
//     catInfo.innerHTML(createMarkup());
//   });
// }

// breedsSelect.addEventListener('change', onSelect);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

post = {
  title: 'kjsdhf sdjklfh ksdjhfksjdhfkjdsfh',
  body: 'kjsdhfkjsdhfhdsjkfh ksdjhfkdshfkjdshf ; ;lwahgadhgo;dffhg;oshdf',
  userId: 12,
};

const options = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(post),
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json;
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
