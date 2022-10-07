/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Heading from '../components/Heading';

describe('Heading Component', () => {
  test('Builds the snapshot of the Heading component', () => {
    const heading = render(
      <BrowserRouter>
        <Heading />
      </BrowserRouter>,
    );
    expect(heading).toMatchSnapshot();
  });
});
