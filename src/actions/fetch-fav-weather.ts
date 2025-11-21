import axios from 'axios';
import { buildCityUrl } from '../utils/url-builder';

async function fetchFavWeather(cityInput: string) {
  const url = buildCityUrl(cityInput);

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second

  const response = await axios.get(url).catch((error) => {
    if (error.response) {
      console.log('Fav Axios Error');
    }
  });

  console.log('Fav Axios Resp -> ', response);

  return response;
}

export default fetchFavWeather;
