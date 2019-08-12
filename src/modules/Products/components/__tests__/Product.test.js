import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import * as mock from '../__mocks__/product';
import { Product } from '../Product';

afterEach(cleanup);

describe('<Product />', () => {
  it('renders product name', async () => {
    const { getByText } = renderWithRedux(<Product product={mock.product} />);
    const name = await getByText(mock.product.name);
    expect(name.textContent).toBe(mock.product.name);
  });

  it('renders producer name', async () => {
    const { getByText } = renderWithRedux(<Product product={mock.product} />);
    const producerName = await getByText(mock.product.producer.name);
    expect(producerName.textContent).toBe(mock.product.producer.name);
  });

  it('renders price', async () => {
    const { getByText } = renderWithRedux(<Product product={mock.product} />);
    const price = await getByText('£9.10');
    expect(price.textContent).toBe('£9.10');
  });

  it('renders price per unit', async () => {
    const { getByText } = renderWithRedux(<Product product={mock.product} />);
    const price = await getByText('£13.00/kg');
    expect(price.textContent).toBe('£13.00/kg');
  });
});
