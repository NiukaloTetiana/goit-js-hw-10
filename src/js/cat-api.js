import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_l5Jil29K1atcE5Fp17M3XuKYDX31y7q7krpg1YBrYTomYuq2RhIcJAT5Bq86kR2V';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchBreeds = () => {
  const END_POINT = '/breeds';
  const url = `${BASE_URL}${END_POINT}`;
  return axios.get(url);
};

export const fetchCatByBreed = breedId => {
  const END_POINT = '/images/search';
  const params = { params: { breed_ids: breedId } };

  const url = `${BASE_URL}${END_POINT}`;
  return axios.get(url, params).then(res => res.data);
};
