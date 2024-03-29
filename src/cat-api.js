const BASE_URL = 'https://api.thecatapi.com/v1/';
const ENDPOINT = 'breeds';
const API_KEY =
  'live_2U6Aps8M3yLcjxELTfcld9bGbmAM6bxwMoJPAZNXqA4x1mtu31dzKNnOoZ0QMiWe';

function fetchBreeds() {
  const URL = `${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`;
  return fetch(URL).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
  const BREED_URL = `${BASE_URL}images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(BREED_URL).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
