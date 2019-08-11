import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { breakpoints } from '../../../styles/breakpoints';
import { Product } from './Product';
import { ProductsLoading } from './ProductsLoading';

export const ProductsGrid = () => {
  const { isFetching, products } = useSelector(state => state.products);

  return isFetching ? (
    <ProductsLoading />
  ) : (
    <ProductsGridList data-testid="products-list">
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
  margin: 0 auto 36px;
  max-width: 1140px;

  @media ${breakpoints.MOBILE} {
    padding: 0 12px;
  }
`;
