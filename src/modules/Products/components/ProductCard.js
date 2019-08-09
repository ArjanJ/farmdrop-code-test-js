import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { ProductMedia } from './ProductMedia';
import { ProductPrice } from './ProductPrice';
import { ProductVariants } from './ProductVariants';

export const ProductCard = ({ product }) => (
  <Card>
    <ProductMedia
      alt={product.name}
      media={product.media[0].url}
      tags={product.tags}
    />
    <CardContent>
      <CardName>{product.name}</CardName>
      <CardProducerName>{product.producer.name}</CardProducerName>
      <ProductVariants
        displayName={product.measurement.displayName}
        variants={product.variants}
      />
      <ProductPrice
        price={product.price}
        pricePerUnit={product.pricePerUnit}
        saleText={product.saleText}
        salePrice={product.salePrice}
      />
    </CardContent>
  </Card>
);

const Card = styled.li`
  border: 1px solid ${colors.LIGHT_GREEN};
  min-height: 440px;
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 20px 16px;
`;

const CardName = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CardProducerName = styled.p`
  color: ${colors.GREEN_2};
  font-weight: 500;
  margin-bottom: 16px;
`;
