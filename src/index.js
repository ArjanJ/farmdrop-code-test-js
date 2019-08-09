import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as UrqlProvider, createClient } from 'urql';

import App from './modules/App';
import { store } from './store/store';

const client = createClient({
  url: 'https://staging-graphql-gateway.farmdrop.com/graphql',
});

ReactDOM.render(
  <Provider store={store}>
    <UrqlProvider value={client}>
      <App />
    </UrqlProvider>
  </Provider>,
  document.getElementById('root')
);
