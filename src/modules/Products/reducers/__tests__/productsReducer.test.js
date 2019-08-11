import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../../constants/ActionTypes';
import productsReducer from '../productsReducer';

describe('reducer', () => {
  describe('products', () => {
    const initialState = {
      error: false,
      isFetching: false,
      products: [],
    };

    it('should provide the initial state', () => {
      expect(productsReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_PRODUCTS_REQUEST action', () => {
      expect(
        productsReducer(initialState, {
          type: GET_PRODUCTS_REQUEST,
        })
      ).toEqual({
        error: false,
        isFetching: true,
        products: [],
      });
    });

    it('should handle GET_PRODUCTS_SUCCESS action', () => {
      expect(
        productsReducer(initialState, {
          type: GET_PRODUCTS_SUCCESS,
          payload: [{ name: 'Beef' }, { name: 'Chicken' }],
        })
      ).toEqual({
        error: false,
        isFetching: false,
        products: [{ name: 'Beef' }, { name: 'Chicken' }],
      });
    });

    it('should handle GET_PRODUCTS_FAILURE action', () => {
      expect(
        productsReducer(initialState, {
          type: GET_PRODUCTS_FAILURE,
          error: true,
        })
      ).toEqual({
        error: true,
        isFetching: false,
        products: [],
      });
    });
  });
});
