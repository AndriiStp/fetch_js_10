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

// post = {
//   title: 'kjsdhf sdjklfh ksdjhfksjdhfkjdsfh',
//   body: 'kjsdhfkjsdhfhdsjkfh ksdjhfkdshfkjdshf ; ;lwahgadhgo;dffhg;oshdf',
//   userId: 12,
// };

// const addPost = document.querySelector('.js-add');
// const postList = document.querySelector('.js-posts');
// const formWrapper = document.querySelector('.formWrapper');

// addPost.addEventListener('click', handlerOpenPost);

// function handlerOpenPost() {
//   const markup = `<form class="js-form" action="submit">
//   <input type="text" name="title">
//   <textarea type="text" name="body"></textarea>
//     <button type="submit">ADD</button>
// </form>`;
//   formWrapper.innerHTML = markup;

//   const form = document.querySelector('.js-form');
//   form.addEventListener('submit', onSubmitPostForm);
// }

// function onSubmitPostForm(e) {
//   e.preventDefault();
//   const { title, body } = e.currentTarget.elements;
//   console.log(e.currentTarget.elements);
//   const data = {
//     title: title.value,
//     body: body.value,
//   };

//   addComment(data).then(obj => console.log(obj));
// }

// async function addComment(data) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   };

//   try {
//     const resp = await fetch(
//       'https://jsonplaceholder.typicode.com/posts',
//       options
//     );
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     const data_1 = resp.json;
//     return console.log(data_1);
//   } catch (err) {
//     return console.log(err);
//   }
// }

async function getCapital() {
  const URL = 'https://restcountries.com/v3.1/name/';

  const resp = await fetch(`${URL}Ukraine`);
  console.log(resp);
  const data = await resp.json();
  console.log(data);
}

getCapital();
