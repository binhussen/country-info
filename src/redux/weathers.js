/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f94c9a10893c1d0e6b777c96082f4a4b';

const GET_COUNTRY_WEATHER = 'weather/weather/GET_COUNTRY_WEATHER';

export default function countryReducer(state = [], action) {
  switch (action.type) {
    case `${GET_COUNTRY_WEATHER}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
}

export const getWeathers = createAsyncThunk(GET_COUNTRY_WEATHER, async (country) => {
  const response = await axios.get(`${API_URL}?q=${country}&appid=${API_KEY}`);
  return response.data;
});