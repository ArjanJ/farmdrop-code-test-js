import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import * as mock from '../__mocks__/product';
import { ProductsGrid } from '../ProductsGrid';

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
          products: [mock.product],
        },
      },
    });

    expect(getByTestId('products-list')).toBeDefined();
  });
});
