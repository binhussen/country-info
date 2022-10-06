/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Filter from '../components/Filter';
import { getCountries } from '../redux/countries';

/* <div
className="border-x-slate-400 rounded-full mx-auto animate-spin  w-24 h-24 my-24"
/> */

const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <section className="min-h-screen">
      <div className="bg-slate-500 text-white p-3 uppercase flex justify-between">
        <h2>World Countries</h2>
        <Filter />
      </div>
      <div className="grid grid-cols-2 justify-center">
        {countries.map((country) => (
          <Card
            key={country.code}
            country={country}
          />
        ))}
      </div>
    </section>
  );
};
export default Country;
