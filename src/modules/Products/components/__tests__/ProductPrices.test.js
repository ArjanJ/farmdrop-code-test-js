import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { formatCurrency } from '../../utils/productUtils';
import { ProductPrices } from '../ProductPrices';

afterEach(cleanup);

const samplePricesOnSale = {
  price: {
    pence: 450,
  },
  pricePerUnit: '£14.00/kg',
  salePrice: {
    pence: 405,
  },
  saleText: '10% off',
};

const samplePriceNoSale = {
  price: {
    pence: 980,
  },
  pricePerUnit: '£14.00/kg',
  salePrice: null,
  saleText: null,
};

describe('<ProductPrices />', () => {
  it('renders sale price if on sale', async () => {
    const { getByText } = renderWithRedux(
      <ProductPrices {...samplePricesOnSale} />
    );

    const salePrice = formatCurrency(samplePricesOnSale.salePrice.pence / 100);
    expect(getByText(salePrice).textContent).toBe(salePrice);
  });

  it('renders old price if on sale', async () => {
    const { getByText } = renderWithRedux(
      <ProductPrices {...samplePricesOnSale} />
    );

    const oldPrice = formatCurrency(samplePricesOnSale.price.pence / 100);
    expect(getByText(oldPrice).textContent).toBe(oldPrice);
  });

  it('renders price if not on sale', async () => {
    const { getByText } = renderWithRedux(
      <ProductPrices {...samplePriceNoSale} />
    );

    const price = formatCurrency(samplePriceNoSale.price.pence / 100);
    expect(getByText(price).textContent).toBe(price);
  });
});
