import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions/basketActions';

const initialState = {
  addedIds: [],
  quantityByIds: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      if (state.indexOf(action.payload) !== -1) {
        return state;
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const { payload } = action;
      return { ...state, [payload]: (state[payload] || 0) + 1 };
    default:
      return state;
  }
};

export default function(state = initialState, action) {
  return {
    addedIds: addedIds(state.addedIds, action),
    quantityById: quantityById(state.quantityById, action),
  };
}
