import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { Spinner } from '../../Spinner/Spinner';

export const ProductsLoading = () => (
  <ProductsLoadingWrapper>
    <ProductsLoadingText>Loading</ProductsLoadingText>
    <Spinner color={colors.GREEN} size={36} stroke={3} />
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
  margin-right: 8px;
`;
