import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import * as mock from '../__mocks__/product';
import { ProductVariants } from '../ProductVariants';

afterEach(cleanup);

describe('<ProductVariants />', () => {
  it('renders displayName if no variants', async () => {
    const { getByText } = renderWithRedux(
      <ProductVariants
        displayName={mock.product.measurement.displayName}
        setVariant={jest.fn()}
        variant={{ measurement: mock.product.measurement }}
        variants={[]}
      />
    );

    expect(getByText(mock.product.measurement.displayName).textContent).toBe(
      mock.product.measurement.displayName
    );
  });

  it('renders variant dropdown if there are variants', () => {
    const { getByTestId } = renderWithRedux(
      <ProductVariants
        displayName={mock.product.measurement.displayName}
        setVariant={jest.fn()}
        variant={{ measurement: mock.product.measurement }}
        variants={[{ measurement: mock.product.measurement }]}
      />
    );

    expect(getByTestId('variants-dropdown')).toBeDefined();
  });
});
