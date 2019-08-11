import React from 'react';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { Header } from '../Header/Header';
import { Products } from '../Products/Products';

export const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Products />
  </>
);
