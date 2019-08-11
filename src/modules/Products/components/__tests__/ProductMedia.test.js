import { cleanup } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { ProductMedia } from '../ProductMedia';

afterEach(cleanup);

const sampleMedia = {
  media: 'image',
  productName: 'Chicken',
  tags: [{ name: 'Family Roast' }],
};

describe('<ProductMedia />', () => {
  it('renders tags', async () => {
    const { getByText } = renderWithRedux(<ProductMedia {...sampleMedia} />);
    expect(getByText('Family Roast')).toBeDefined();
  });

  it('renders safely without tags', () => {
    renderWithRedux(<ProductMedia {...sampleMedia} tags={[]} />);
  });
});
