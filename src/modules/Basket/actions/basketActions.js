export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

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
