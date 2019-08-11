import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { ProductsGrid } from '../ProductsGrid';
import { sampleProduct } from './Product.test';

afterEach(cleanup);

describe('<ProductsGrid />', () => {
  it('renders loading component if fetching products', async () => {
    const { getByTestId } = renderWithRedux(<ProductsGrid />, {
      initialState: {
        products: {
          isFetching: true,
        },
      },
    });

    expect(getByTestId('loading')).toBeDefined();
  });

  it('renders list of products if there are products', () => {
    const { getByTestId } = renderWithRedux(<ProductsGrid />, {
      initialState: {
        products: {
          isFetching: false,
          products: [sampleProduct],
        },
      },
    });

    expect(getByTestId('products-list')).toBeDefined();
  });
});
