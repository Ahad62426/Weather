import axios from 'axios';

const API_KEY = 'b945c5ff8296633af2bb7cdad21c5fb2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pk`
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}