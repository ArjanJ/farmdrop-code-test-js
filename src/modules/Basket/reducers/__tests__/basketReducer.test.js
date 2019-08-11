import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../../constants/ActionTypes';
import basketReducer from '../basketReducer';

describe('reducer', () => {
  describe('basket', () => {
    const initialState = {
      addedIds: [],
      quantityById: {},
    };

    it('should provide the initial state', () => {
      expect(basketReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_TO_BASKET action', () => {
      expect(
        basketReducer(initialState, { type: ADD_TO_BASKET, payload: 'Beef' })
      ).toEqual({
        addedIds: ['Beef'],
        quantityById: { Beef: 1 },
      });
    });

    it('should handle REMOVE_FROM_BASKET action', () => {
      const state = {
        addedIds: ['Beef'],
        quantityById: { Beef: 1 },
      };

      expect(
        basketReducer(state, {
          type: REMOVE_FROM_BASKET,
          payload: 'Beef',
        })
      ).toEqual({
        addedIds: [],
        quantityById: {},
      });
    });

    describe('when product is already in basket', () => {
      it('should handle ADD_TO_BASKET action', () => {
        const state = {
          addedIds: ['Beef'],
          quantityById: { Beef: 1 },
        };

        expect(
          basketReducer(state, { type: ADD_TO_BASKET, payload: 'Beef' })
        ).toEqual({
          addedIds: ['Beef'],
          quantityById: { Beef: 2 },
        });
      });

      it('should handle REMOVE_FROM_BASKET action', () => {
        const state = {
          addedIds: ['Beef'],
          quantityById: { Beef: 2 },
        };

        expect(
          basketReducer(state, { type: REMOVE_FROM_BASKET, payload: 'Beef' })
        ).toEqual({
          addedIds: ['Beef'],
          quantityById: { Beef: 1 },
        });
      });
    });
  });
});
