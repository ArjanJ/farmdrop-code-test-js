import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { ProductActions } from './ProductActions';
import { ProductMedia } from './ProductMedia';
import { ProductPrices } from './ProductPrices';
import { ProductVariants } from './ProductVariants';

export const ProductCard = ({ price, product, setVariant, variant }) => (
  <ProductCardItem>
    <ProductMedia
      alt={product.name}
      media={product.media[0].url}
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
          pricePerUnit={variant.pricePerUnit}
          saleText={product.saleText}
          salePrice={product.salePrice}
        />
        <ProductActions />
      </div>
    </ProductCardContent>
  </ProductCardItem>
);

const ProductCardItem = styled.li`
  border: 1px solid ${colors.LIGHT_GREEN};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ProductCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const ProductName = styled.h2`
  font-size: 17px;
  margin-bottom: 16px;
`;

const ProductProducerName = styled.p`
  color: ${colors.GREEN};
  font-weight: 500;
  margin-bottom: 16px;
`;
