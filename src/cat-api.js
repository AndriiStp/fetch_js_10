const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_2U6Aps8M3yLcjxELTfcld9bGbmAM6bxwMoJPAZNXqA4x1mtu31dzKNnOoZ0QMiWe';

const fetchBreeds = (BASE_URL, API_KEY) => {
  const URL = `${BASE_URL}/breeds?api_key=${API_KEY}`;
  console.log(URL);
};

const fetchCatByBreed = breedId => {};

export { fetchBreeds, fetchCatByBreed };
