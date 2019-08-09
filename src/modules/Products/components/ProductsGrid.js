import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const ProductsGrid = () => {
  const { products } = useSelector(state => state.products);

  return (
    <Grid>
      {products.map(product => (
        <li key={product.name}>{product.name}</li>
      ))}
    </Grid>
  );
};

const Grid = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(405px, 1fr));
  list-style-type: none;
`;
