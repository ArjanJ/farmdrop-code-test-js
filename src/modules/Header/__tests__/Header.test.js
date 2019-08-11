import { render } from '@testing-library/react';
import React from 'react';

import { Header } from '../Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders logo', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('logo')).toBeDefined();
  });
});
