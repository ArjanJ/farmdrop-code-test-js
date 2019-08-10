import { combineReducers } from 'redux';

import basketReducer from '../modules/Basket/reducers/basketReducer';
import productsReducer from '../modules/Products/reducers/productsReducer';

export const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});
