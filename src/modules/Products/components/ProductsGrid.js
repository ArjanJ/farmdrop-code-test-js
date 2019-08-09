import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ProductCard } from './ProductCard';

export const ProductsGrid = () => {
  const { products } = useSelector(state => state.products);

  return (
    <Grid>
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </Grid>
  );
};

const Grid = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  list-style-type: none;
  margin: auto;
  max-width: 1140px;
`;
