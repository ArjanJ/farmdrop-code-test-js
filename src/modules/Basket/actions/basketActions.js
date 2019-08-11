import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constants/ActionTypes';

export function addToBasket(productName) {
  return {
    type: ADD_TO_BASKET,
    payload: productName,
  };
}

export function removeFromBasket(productName) {
  return {
    type: REMOVE_FROM_BASKET,
    payload: productName,
  };
}
