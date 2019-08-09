import React from 'react';
import { useQuery } from 'urql';

import { productSearchQuery } from '../../queries/productSearchQuery';

export const Products = () => {
  const [result] = useQuery({
    query: productSearchQuery,
  });

  const { fetching, data } = result;

  return <div>Products</div>;
};
