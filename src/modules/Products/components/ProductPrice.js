import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

const format = num =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
    num
  );

function parseDiscount(discount) {
  return Number(discount.replace(/[^\d.]/g, ''));
}

function addDiscount(price, discount) {
  return price - price * (discount / 100);
}

function formatPriceWithDiscount(price, discount) {
  return format(addDiscount(price, parseDiscount(discount)) / 100);
}

export const ProductPrice = ({ price, pricePerUnit, saleText, salePrice }) => (
  <Wrapper>
    {saleText && <SaleText>{saleText}</SaleText>}
    {salePrice && <OldPrice>{format(price.pence / 100)}</OldPrice>}
    <PriceRow>
      <Price isSale={!!salePrice}>
        {salePrice
          ? formatPriceWithDiscount(price.pence, saleText)
          : format(price.pence / 100)}
      </Price>
      <PricePerUnit>{pricePerUnit.pricePerUnit}</PricePerUnit>
    </PriceRow>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: flex-end;
  margin-bottom: 16px;
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
