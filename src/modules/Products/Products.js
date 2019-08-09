import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from './actions/getProductsAction';

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return <div>Products</div>;
};
