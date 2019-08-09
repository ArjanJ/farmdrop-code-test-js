import { combineReducers } from 'redux';

import productsReducer from '../modules/Products/reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
});
