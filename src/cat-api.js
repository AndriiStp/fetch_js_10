const BASE_URL = 'https://api.thecatapi.com/v1/';
const ENDPOINT = 'breeds';
const API_KEY =
  'live_2U6Aps8M3yLcjxELTfcld9bGbmAM6bxwMoJPAZNXqA4x1mtu31dzKNnOoZ0QMiWe';

const fetchBreeds = async (BASE_URL, API_KEY) => {
  const URL = `${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`;
  const resp = await fetch(URL);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
};

const fetchCatByBreed = async breedId => {
  const BREED_URL = `${BASE_URL}/images/search&api_key=${API_KEY}&breed_ids=${breedId}`;
  const resp = await fetch(BREED_URL);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
};

console.log(fetchBreeds(BASE_URL, API_KEY));

export { fetchBreeds, fetchCatByBreed };
