/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1';

const GET_COUNTRIES = 'weather/countries/GET_COUNTRIES';
const SEARCH_COUNTRIES = 'weather/countries/SOURCE_COUNTRIES';
const FILTER_COUNTRIES = 'weather/countries/FILTER_COUNTRIES';

const initialCountries = [];

export default function countryReducer(state = initialCountries, action) {
  switch (action.type) {
    case `${GET_COUNTRIES}/fulfilled`:
      return [...action.payload];
    case `${SEARCH_COUNTRIES}/fulfilled`:
      return [...action.payload];
    case `${FILTER_COUNTRIES}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
}

export const getCountries = createAsyncThunk(GET_COUNTRIES, async () => {
  const response = await axios.get(`${API_URL}/all`);
  const countries = response.data.map((country) => ({
    name: country.name,
    code: country.cca2,
    currency: country.currencies,
    capital: country.capital,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
    borders: country.borders,
    area: country.area,
    map: country.maps,
    population: country.population,
    timezones: country.timezones,
    flag: country.flags,
  }));
  return countries;
});

export const searchCountries = createAsyncThunk(SEARCH_COUNTRIES, async (name) => {
  const response = await axios.get(`${API_URL}/name/${name}`);
  const countries = response.data.map((country) => ({
    name: country.name,
    code: country.cca2,
    currency: country.currencies,
    capital: country.capital,
    region: country.region,
    subregion: country.subregion,
    languages: country.languages,
    borders: country.borders,
    area: country.area,
    map: country.maps,
    population: country.population,
    timezones: country.timezones,
    flag: country.flags,
  }));
  return countries;
});

export const filterCountries = createAsyncThunk(FILTER_COUNTRIES,
  async (continent) => {
    const response = await axios.get(`${API_URL}/region/${continent}`);
    const countries = response.data.map((country) => ({
      name: country.name,
      code: country.cca2,
      currency: country.currencies,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      languages: country.languages,
      borders: country.borders,
      area: country.area,
      map: country.maps,
      population: country.population,
      timezones: country.timezones,
      flag: country.flags,
    }));
    return countries;
  });
