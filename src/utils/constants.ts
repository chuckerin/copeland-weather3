const VITE_WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const BASE_URL = `${WEATHER_API_URL}?appid=${VITE_WEATHER_API_KEY}&units=imperial`;
