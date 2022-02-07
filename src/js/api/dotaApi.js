const URL = 'https://api.opendota.com/api';

import { apiServices } from './apiServices';

export const getHeroesList = () => {
  return apiServices(`${URL}/heroes`);
};
export const getHeroesById = id => {
  return apiServices(`${URL}/heroes/${id}`);
};
