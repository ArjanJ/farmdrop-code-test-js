import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { ProductBasketOverlay } from '../ProductBasketOverlay';

afterEach(cleanup);

describe('<ProductBasketOverlay />', () => {
  it('renders quanity of product in basket', async () => {
    const { getByTestId } = renderWithRedux(
      <ProductBasketOverlay productName="Chicken" />,
      {
        initialState: {
          basket: {
            addedIds: ['Chicken'],
            quantityById: { Chicken: 3 },
          },
        },
      }
    );

    expect(getByTestId('quantity').textContent).toBe('3');
  });
});
