import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from './actions/getProductsAction';

export const Products = () => {
  const dispatch = useDispatch();
  const getProductsAction = useCallback(() => dispatch(getProducts()), [
    dispatch,
  ]);

  useEffect(() => {
    getProductsAction();
  });

  return <div>Products</div>;
};
