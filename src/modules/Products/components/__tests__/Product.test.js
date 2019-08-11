import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { Product } from '../Product';

afterEach(cleanup);

export const sampleProduct = {
  name: 'Organic Highgrove Rack of Ribs (Whole Breast)',
  producer: {
    name: 'Home Farm Highgrove',
  },
  measurement: {
    displayName: 'Boned and Rolled (700g)',
  },
  pricePerUnit: '£13.00/kg',
  media: [
    {
      type: 'Image',
      url:
        'https://fd-v5-api-release.imgix.net/assets/product_images/71e7380eff461fe099ce7ff696b02b57ca33ad7adfe32f25b05193cdfd00863b/lamb_breast.jpg',
      position: 1,
    },
  ],
  variants: [],
  saleText: null,
  price: {
    pence: 910,
  },
  salePrice: null,
  tags: [],
};

describe('<Product />', () => {
  it('renders product name', async () => {
    const { getByText } = renderWithRedux(<Product product={sampleProduct} />);
    const name = await getByText(sampleProduct.name);
    expect(name.textContent).toBe(sampleProduct.name);
  });

  it('renders producer name', async () => {
    const { getByText } = renderWithRedux(<Product product={sampleProduct} />);
    const producerName = await getByText(sampleProduct.producer.name);
    expect(producerName.textContent).toBe(sampleProduct.producer.name);
  });

  it('renders price', async () => {
    const { getByText } = renderWithRedux(<Product product={sampleProduct} />);
    const price = await getByText('£9.10');
    expect(price.textContent).toBe('£9.10');
  });

  it('renders price per unit', async () => {
    const { getByText } = renderWithRedux(<Product product={sampleProduct} />);
    const price = await getByText('£13.00/kg');
    expect(price.textContent).toBe('£13.00/kg');
  });
});
