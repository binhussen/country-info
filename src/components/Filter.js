import { useDispatch } from 'react-redux';
import { filterCountries } from '../redux/countries/countries';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterCountries(e.target.value));
  };
  return (
    <select
      className="w-32 bg-slate-400 text-white rounded outline-none items-center"
      name="select"
      onChange={handleChange}
    >
      <option value="africa">Africa</option>
      <option value="america">
        America
      </option>
      <option value="asia">
        Asia
      </option>
      <option value="europe">
        Europe
      </option>
      <option value="oceania">
        Oceania
      </option>
    </select>
  );
};
export default Filter;
