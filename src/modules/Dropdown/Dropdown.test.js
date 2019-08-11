import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Dropdown } from './Dropdown';

afterEach(cleanup);

const options = [
  {
    name: 'goku',
    value: 0,
  },
  {
    name: 'vegeta',
    value: 1,
  },
];

describe('<Dropdown />', () => {
  it('renders name of option', () => {
    const { getAllByTestId } = render(
      <Dropdown onChange={jest.fn()} options={options} selected={0} />
    );

    expect(
      getAllByTestId('dropdown-option-name')
        .map(x => x.textContent)
        .find(x => x === 'goku')
    ).toBe('goku');
  });

  it('renders selected index as current value', () => {
    const { getByTestId } = render(
      <Dropdown onChange={jest.fn()} options={options} selected={1} />
    );

    expect(getByTestId('dropdown-current-value').textContent).toBe(
      options[1].name
    );
  });

  it('expands dropdown when clicked', async () => {
    const { getByTestId } = render(
      <Dropdown onChange={jest.fn()} options={options} selected={1} />
    );

    await fireEvent.click(getByTestId('dropdown-current-value'));
    expect(
      getByTestId('dropdown-current-value').getAttribute('aria-expanded')
    ).toBe('true');
  });

  it('fires onChange once when an option is clicked', async () => {
    const onChange = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <Dropdown onChange={onChange} options={options} selected={1} />
    );

    await fireEvent.click(getByTestId('dropdown-current-value'));
    await fireEvent.click(getByLabelText(options[0].name));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
