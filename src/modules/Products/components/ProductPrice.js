import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ProductPrice = ({ price, pricePerUnit, saleText, salePrice }) => {
  return (
    <Wrapper>
      {saleText && <SaleText>{saleText}</SaleText>}
      {salePrice && <OldPrice>{price.pence}</OldPrice>}
      <PriceRow>
        <Price isSale={!!salePrice}>
          {salePrice ? salePrice.pence : price.pence}
        </Price>
        <PricePerUnit>{pricePerUnit}</PricePerUnit>
      </PriceRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: flex-end;
`;

const PriceRow = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  color: ${({ isSale }) => (isSale ? colors.RED : colors.BLACK)};
  font-size: 24px;
`;

const OldPrice = styled.p`
  color: ${colors.BLACK};
  margin-bottom: 18px;
  text-decoration: line-through;
`;

const SaleText = styled.p`
  color: ${colors.RED};
  font-weight: 500;
  margin-bottom: 18px;
`;

const PricePerUnit = styled.span`
  color: ${colors.DARK_GREEN};
`;
