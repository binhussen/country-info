/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/countries';
import weatherReducer from './weathers/weathers';

const rootReducer = combineReducers({
  countries: countryReducer,
  weathers: weatherReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
