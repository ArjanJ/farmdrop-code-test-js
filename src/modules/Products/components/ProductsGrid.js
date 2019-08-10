import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Product } from './Product';

export const ProductsGrid = () => {
  const { products } = useSelector(state => state.products);

  return (
    <ProductsGridList>
      {products.map(product => (
        <Product key={product.name} product={product} />
      ))}
    </ProductsGridList>
  );
};

const ProductsGridList = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  list-style-type: none;
  margin: auto;
  max-width: 1140px;
`;
