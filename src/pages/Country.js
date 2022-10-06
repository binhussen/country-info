/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Filter from '../components/Filter';
import { filterCountries } from '../redux/countries/countries';

const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(filterCountries('africa'));
    }
  }, []);

  return (
    <section className="min-h-screen shadow-2xl">
      <div className="bg-slate-500 text-white p-3 uppercase flex justify-between">
        <h2>World Countries</h2>
        <Filter />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center">
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
