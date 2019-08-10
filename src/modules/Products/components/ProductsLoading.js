import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles/colors';

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

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinning = styled.svg`
  animation: 1s ${rotate} linear infinite;
`;

const Spinner = ({ color, size, stroke = 5 }) => (
  <Spinning width={size} height={size}>
    <defs>
      <linearGradient id="grad1" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="1" stopColor={color} />
      </linearGradient>
    </defs>
    <g fill="none">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 5}
        stroke="url(#grad1)"
        strokeWidth={stroke}
      />
    </g>
  </Spinning>
);
