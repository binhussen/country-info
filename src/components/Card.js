/** @format */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ country }) => {
  const { name, area } = country;
  const { common, nativeName } = name;
  let localName = nativeName
    ? nativeName[Object.keys(nativeName)[0]].common
    : '';
  localName = common.toString().toLowerCase() === localName.toLowerCase() ? '' : localName;
  return (
    <Link
      className="text-white transition-shadow opacity-100 bg bg-slate-400 shadow-2xl md:even:bg-slate-400 md:odd:bg-slate-500"
      to={`/weather/${common}`}
      state={country}
    >
      <div className="flex items-end flex-col justify-between p-4 shadow-2xl h-25vh">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
            fill="currentColor"
          />
        </svg>
        <div className="text-right uppercase">
          <h3 className="text-xl font-medium mx-1">
            {common}
            {' '}
            {localName}
          </h3>
          <p>{area}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string,
      nativeName: PropTypes.shape({
        common: PropTypes.string,
      }),
    }),
    area: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
