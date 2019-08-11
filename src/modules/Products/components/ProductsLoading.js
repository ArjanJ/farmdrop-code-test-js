import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { Spinner } from '../../Spinner/Spinner';

export const ProductsLoading = () => (
  <ProductsLoadingWrapper>
    <Spinner color={colors.GREEN} size={30} stroke={2} />
    <ProductsLoadingText data-testid="loading">Loading...</ProductsLoadingText>
  </ProductsLoadingWrapper>
);

const ProductsLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px;
  text-align: center;
`;

const ProductsLoadingText = styled.span`
  color: ${colors.DARK_GREEN};
  margin-left: 6px;
`;
