import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from './actions/getProductsAction';
import { ProductsGrid } from './components/ProductsGrid';

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products once from server.
    dispatch(getProducts());
  });

  return <ProductsGrid />;
};
