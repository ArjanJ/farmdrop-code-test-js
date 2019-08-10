import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ProductActions = () => (
  <ProductActionsWrapper>
    <ProductActionsSquare />
    <Button type="button">Add</Button>
  </ProductActionsWrapper>
);

const ProductActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductActionsSquare = styled.div`
  border: 1px solid ${colors.LIGHT_GREEN};
  height: 40px;
  width: 40px;
`;

const Button = styled.button`
  background: ${colors.GREEN};
  color: white;
  flex: 1;
  font-weight: 700;
  height: 40px;
  margin-left: 12px;
`;
