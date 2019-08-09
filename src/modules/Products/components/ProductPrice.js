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
  justify-content: flex-end;
`;

const PriceRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  color: ${({ isSale }) => (isSale ? colors.RED : colors.BLACK)};
`;

const OldPrice = styled.p`
  text-decoration: line-through;
`;

const SaleText = styled.p`
  color: ${colors.RED};
`;

const PricePerUnit = styled.span`
  color: ${colors.BLACK};
`;
