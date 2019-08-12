import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Dropdown } from '../Dropdown';

afterEach(cleanup);

const dropdownOptions = [
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
      <Dropdown onChange={jest.fn()} options={dropdownOptions} selected={0} />
    );

    expect(
      getAllByTestId('dropdown-option-name')
        .map(x => x.textContent)
        .find(x => x === 'goku')
    ).toBe('goku');
  });

  it('renders selected index as current value', () => {
    const { getByTestId } = render(
      <Dropdown onChange={jest.fn()} options={dropdownOptions} selected={1} />
    );

    expect(getByTestId('dropdown-current-value').textContent).toBe(
      dropdownOptions[1].name
    );
  });

  it('expands and collapses dropdown when clicked and clicked off', async () => {
    const { getByTestId } = render(
      <div id="root">
        <Dropdown onChange={jest.fn()} options={dropdownOptions} selected={1} />
      </div>
    );

    await fireEvent.click(getByTestId('dropdown-current-value'));
    expect(
      getByTestId('dropdown-current-value').getAttribute('aria-expanded')
    ).toBe('true');

    await fireEvent.click(document.getElementById('root'));
    expect(
      getByTestId('dropdown-current-value').getAttribute('aria-expanded')
    ).toBe('false');
  });

  it('fires onChange once when an option is clicked', async () => {
    const onChange = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <Dropdown onChange={onChange} options={dropdownOptions} selected={1} />
    );

    await fireEvent.click(getByTestId('dropdown-current-value'));
    await fireEvent.click(getByLabelText(dropdownOptions[0].name));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('collapses dropdown when esc key pressed', async () => {
    const { getByTestId } = render(
      <Dropdown onChange={jest.fn()} options={dropdownOptions} selected={1} />
    );

    await fireEvent.click(getByTestId('dropdown-current-value'));
    await fireEvent.keyDown(window.document, { key: 'Escape', keyCode: 27 });
    expect(
      getByTestId('dropdown-current-value').getAttribute('aria-expanded')
    ).toBe('false');
  });
});
