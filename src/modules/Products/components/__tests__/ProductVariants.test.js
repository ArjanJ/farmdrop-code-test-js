import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { ProductVariants } from '../ProductVariants';
import { sampleProduct } from './Product.test';

afterEach(cleanup);

describe('<ProductVariants />', () => {
  it('renders displayName if no variants', async () => {
    const { getByText } = renderWithRedux(
      <ProductVariants
        displayName={sampleProduct.measurement.displayName}
        setVariant={jest.fn()}
        variant={{ measurement: sampleProduct.measurement }}
        variants={[]}
      />
    );

    expect(getByText(sampleProduct.measurement.displayName).textContent).toBe(
      sampleProduct.measurement.displayName
    );
  });

  it('renders variant dropdown if there are variants', () => {
    const { getByTestId } = renderWithRedux(
      <ProductVariants
        displayName={sampleProduct.measurement.displayName}
        setVariant={jest.fn()}
        variant={{ measurement: sampleProduct.measurement }}
        variants={[{ measurement: sampleProduct.measurement }]}
      />
    );

    expect(getByTestId('variants-dropdown')).toBeDefined();
  });
});
