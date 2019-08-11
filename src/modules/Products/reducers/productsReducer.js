import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  error: false,
  isFetching: false,
  products: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    default:
      return state;
  }
}
