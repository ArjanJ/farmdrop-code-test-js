import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/colors';
import { easing } from '../../../styles/easing';
import { ProductActions } from './ProductActions';
import { ProductMedia } from './ProductMedia';
import { ProductPrices } from './ProductPrices';
import { ProductVariants } from './ProductVariants';

export const ProductCard = ({ price, product, setVariant, variant }) => (
  <ProductCardItem>
    <ProductMedia
      media={product.media[0].url}
      productName={product.name}
      tags={product.tags}
    />
    <ProductCardContent>
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductProducerName>{product.producer.name}</ProductProducerName>
        <ProductVariants
          displayName={product.measurement.displayName}
          setVariant={setVariant}
          variant={variant}
          variants={product.variants}
        />
      </div>
      <div>
        <ProductPrices
          price={price}
          pricePerUnit={variant.pricePerUnit || product.pricePerUnit}
          saleText={product.saleText}
          salePrice={product.salePrice}
        />
        <ProductActions productName={product.name} />
      </div>
    </ProductCardContent>
  </ProductCardItem>
);

ProductCard.propTypes = {
  price: PropTypes.shape({
    pence: PropTypes.number,
  }).isRequired,
  product: PropTypes.object,
  setVariant: PropTypes.func.isRequired,
  variant: PropTypes.shape({
    measurement: PropTypes.shape({
      displayName: PropTypes.string,
    }),
    pricePerUnit: PropTypes.string,
  }).isRequired,
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ProductCardItem = styled.li`
  animation: ${fadeIn} 2s 0.2s ${easing.OUT} forwards;
  border-bottom: 1px solid ${colors.LIGHT_GREEN};
  border-top: 1px solid ${colors.LIGHT_GREEN};
  display: flex;
  opacity: 0;
  overflow: hidden;

  @media ${breakpoints.MOBILE} {
    border: 1px solid ${colors.LIGHT_GREEN};
    flex-direction: column;
  }
`;

const ProductCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;

  @media ${breakpoints.MOBILE} {
    padding: 20px;
  }
`;

const ProductName = styled.h2`
  font-size: 15px;
  margin-bottom: 16px;

  @media ${breakpoints.MOBILE} {
    font-size: 17px;
  }
`;

const ProductProducerName = styled.p`
  color: ${colors.GREEN};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;

  @media ${breakpoints.MOBILE} {
    font-size: 16px;
  }
`;
