import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithRedux } from '../../../../utils/testUtils';
import { ProductActions } from '../ProductActions';

afterEach(cleanup);

describe('<ProductActions />', () => {
  it('renders Add button when item is not in basket', async () => {
    const { getByTestId } = renderWithRedux(
      <ProductActions productName="Chicken" />
    );
    expect(getByTestId('add-button')).toBeTruthy();
  });

  it('renders plus and minus buttons when add button is clicked', async () => {
    const { getByTestId } = renderWithRedux(
      <ProductActions productName="Chicken" />
    );

    await fireEvent.click(getByTestId('add-button'));
    expect(getByTestId('add-one-button')).toBeTruthy();
    expect(getByTestId('remove-one-button')).toBeTruthy();

    await fireEvent.click(getByTestId('add-one-button'));
    expect(getByTestId('quantity').textContent).toBe('2');

    await fireEvent.click(getByTestId('remove-one-button'));
    expect(getByTestId('quantity').textContent).toBe('1');
  });
});
