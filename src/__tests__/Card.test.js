/** @format */

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card';

const country = {
  name: {
    common: 'Ethiopia',
    official: 'Federal Democratic Republic of Ethiopia',
    nativeName: {
      amh: {
        official: 'የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ',
        common: 'ኢትዮጵያ',
      },
    },
  },
  code: 'ET',
  currency: {
    ETB: {
      name: 'Ethiopian birr',
      symbol: 'Br',
    },
  },
  capital: ['Addis Ababa'],
  region: 'Africa',
  subregion: 'Eastern Africa',
  languages: {
    amh: 'Amharic',
  },
  borders: ['DJI', 'ERI', 'KEN', 'SOM', 'SSD', 'SDN'],
  area: 1104300,
  map: {
    googleMaps: 'https://goo.gl/maps/2Q4hQWCbhuZLj3fG6',
    openStreetMaps: 'https://www.openstreetmap.org/relation/192800',
  },
  population: 114963583,
  timezones: ['UTC+03:00'],
  flag: {
    png: 'https://flagcdn.com/w320/et.png',
    svg: 'https://flagcdn.com/et.svg',
  },
};

describe('Render Card', () => {
  test('card snapshot', () => {
    const card = render(
      <BrowserRouter>
        <Card country={country} />
      </BrowserRouter>,
    );
    expect(card).toMatchSnapshot();
  });
});
