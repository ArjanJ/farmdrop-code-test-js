import { ApiClient } from '../../../utils/ApiClient';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../constants/ActionTypes';
import { productSearch } from '../queries/productQueries';

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

export function getProducts(
  service = () => ApiClient.rawRequest(productSearch)
) {
  return async function(dispatch) {
    dispatch(getProductsRequest());

    try {
      const { data } = await service();
      return dispatch(getProductsSuccess(data.productSearch.nodes));
    } catch (error) {
      return dispatch(getProductsFailure());
    }
  };
}
