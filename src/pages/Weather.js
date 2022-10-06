import { useLocation } from 'react-router-dom';

const Weather = () => {
  const location = useLocation();
  const {
    name, code, currency, capital, region, subregion,
    languages, borders, area, map, population, timezones,
  } = location.state;
  const { common, official, nativeName } = name;
  const nativeOfficial = Object.values(nativeName)[0].official;
  const { name: currencyName, symbol: currencySymbol } = Object.values(currency)[0];
  const capitalName = Object.values(capital)[0];
  const language = Object.values(languages);

  return (
    <section className="min-h-screen bg-slate-400">
      <div className="bg-slate-500 text-white p-3 flex justify-between">
        <h2>
          {common}
          {' '}
          Detail Information
        </h2>
      </div>
      <div className=" text-white p-4">
        <p className="shadow-lg p-2">
          <span className="font-bold">Name</span>
          {' '}
          :
          {official}
          (
          {nativeOfficial}
          )
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Code</span>
          {' '}
          :
          {code}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Currency</span>
          {' '}
          :
          {currencyName}
          (
          {currencySymbol}
          )
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Capital</span>
          {' '}
          :
          {capitalName}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Region</span>
          {' '}
          :
          {region}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Subregion</span>
          {' '}
          :
          {subregion}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Language</span>
          {' '}
          :
          {language}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Area</span>
          {' '}
          :
          {area}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Border</span>
          {' '}
          :
          {' '}
          {borders?.map((border) => (
            <span key={border}>
              {border}
              ,
            </span>
          ))}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Map</span>
          {' '}
          :
          {' '}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href={map.googleMaps}
          >
            {map.googleMaps}
          </a>
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">Population</span>
          {' '}
          :
          {population}
        </p>
        <p className="shadow-lg p-2">
          <span className="font-bold">TimeZone</span>
          {' '}
          :
          {timezones[0]}
        </p>
      </div>
    </section>
  );
};

export default Weather;
