import React from 'react';

import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './Header/Header';
import { Products } from './Products/Products';

const App = () => (
  <div>
    <GlobalStyles />
    <Header />
    <Products />
  </div>
);

export default App;
