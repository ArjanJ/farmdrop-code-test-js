import {
  ADD_TO_BASKET,
  addToBasket,
  REMOVE_FROM_BASKET,
  removeFromBasket,
} from './basketActions';

describe('actions', () => {
  it('should create an action to add to basket', () => {
    const payload = 'Beef';
    const expectedAction = {
      type: ADD_TO_BASKET,
      payload,
    };
    expect(addToBasket(payload)).toEqual(expectedAction);
  });

  it('should create an action to remove from basket', () => {
    const payload = 'Beef';
    const expectedAction = {
      type: REMOVE_FROM_BASKET,
      payload,
    };
    expect(removeFromBasket(payload)).toEqual(expectedAction);
  });
});
