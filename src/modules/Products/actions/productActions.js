import { client } from '../../../queries/client';
import { productSearchQuery } from '../../../queries/productSearchQuery';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

function getProductsRequest() {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
}

function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

function getProductsFailure() {
  return {
    type: GET_PRODUCTS_FAILURE,
    error: true,
  };
}

export function getProducts() {
  return async function(dispatch) {
    dispatch(getProductsRequest());

    try {
      const { productSearch } = await client.request(productSearchQuery);
      return dispatch(getProductsSuccess(productSearch.nodes));
    } catch (error) {
      return dispatch(getProductsFailure());
    }
  };
}
