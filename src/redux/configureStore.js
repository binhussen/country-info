/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries';

const rootReducer = combineReducers({
  countries: countryReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
