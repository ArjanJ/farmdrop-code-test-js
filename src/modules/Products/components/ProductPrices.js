import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/colors';
import {
  applyDiscount,
  formatCurrency,
  parsePrice,
} from '../../../utils/utils';

export const ProductPrices = ({ price, pricePerUnit, saleText, salePrice }) => (
  <ProductPriceWrapper>
    {saleText && <ProductSaleText>{saleText}</ProductSaleText>}
    {salePrice && (
      <ProductOldPrice>{formatCurrency(price.pence / 100)}</ProductOldPrice>
    )}
    <ProductPriceRow>
      <ProductPrice isSale={!!salePrice}>
        {formatCurrency(
          salePrice
            ? applyDiscount(price.pence, parsePrice(saleText)) / 100
            : price.pence / 100
        )}
      </ProductPrice>
      <ProductPricePerUnit>{pricePerUnit}</ProductPricePerUnit>
    </ProductPriceRow>
  </ProductPriceWrapper>
);

const PriceType = PropTypes.shape({
  pence: PropTypes.number,
});

ProductPrices.propTypes = {
  price: PriceType.isRequired,
  pricePerUnit: PropTypes.string.isRequired,
  salePrice: PriceType,
  saleText: PropTypes.string,
};

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: flex-end;
  margin-bottom: 16px;

  @media ${breakpoints.MOBILE} {
    height: 120px;
  }
`;

const ProductPriceRow = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

const ProductPrice = styled.span`
  color: ${({ isSale }) => (isSale ? colors.RED : colors.BLACK)};
  font-size: 18px;

  @media ${breakpoints.MOBILE} {
    font-size: 24px;
  }
`;

const ProductOldPrice = styled.p`
  color: ${colors.BLACK};
  margin-bottom: 18px;
  text-decoration: line-through;
`;

const ProductSaleText = styled.p`
  color: ${colors.RED};
  font-weight: 500;
  margin-bottom: 18px;
`;

const ProductPricePerUnit = styled.span`
  color: ${colors.DARK_GREEN};
  font-size: 14px;

  @media ${breakpoints.MOBILE} {
    font-size: 16px;
  }
`;
