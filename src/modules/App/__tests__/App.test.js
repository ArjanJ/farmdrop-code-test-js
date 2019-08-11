import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../../../reducer/rootReducer';
import { renderWithRedux } from '../../../utils/testUtils';
import { App } from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    renderWithRedux(<App />, {
      store,
    });
  });
});
