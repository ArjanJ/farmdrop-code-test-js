import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions/basketActions';

const initialState = {
  addedIds: [],
  quantityById: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const { payload } = action;

      // Add item to basket if first time adding it.
      const addedIds = state.addedIds.includes(payload)
        ? state.addedIds
        : [...state.addedIds, payload];

      // Increment quantity of item.
      const quantityById = {
        ...state.quantityById,
        [payload]: (state.quantityById[payload] || 0) + 1,
      };

      return {
        addedIds,
        quantityById,
      };
    }
    case REMOVE_FROM_BASKET: {
      const { payload } = action;

      // Remove item from basket if there is only 1 in there.
      if (state.quantityById[payload] === 1) {
        const { [payload]: removedId, ...quantityById } = state.quantityById;

        return {
          addedIds: state.addedIds.filter(id => id !== payload),
          quantityById,
        };
      }

      // Remove 1 quantity from the basket.
      const quantityById = {
        ...state.quantityById,
        [payload]: state.quantityById[payload] - 1,
      };

      return {
        ...state,
        quantityById,
      };
    }
    default:
      return state;
  }
}
