import { render } from '@testing-library/react';
import React from 'react';

import { Spinner } from '../Spinner';

describe('<Spinner />', () => {
  it('renders without crashing', () => {
    render(<Spinner color="#FFFFFF" size={24} />);
  });
});
