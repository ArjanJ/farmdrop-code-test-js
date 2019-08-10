import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { ProductActions } from './ProductActions';
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
      <div>
        <CardName>{product.name}</CardName>
        <CardProducerName>{product.producer.name}</CardProducerName>
        <ProductVariants
          displayName={product.measurement.displayName}
          variants={product.variants}
        />
      </div>
      <div>
        <ProductPrice
          price={product.price}
          pricePerUnit={product.pricePerUnit}
          saleText={product.saleText}
          salePrice={product.salePrice}
        />
        <ProductActions />
      </div>
    </CardContent>
  </Card>
);

const Card = styled.li`
  border: 1px solid ${colors.LIGHT_GREEN};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const CardName = styled.h2`
  font-size: 17px;
  margin-bottom: 16px;
`;

const CardProducerName = styled.p`
  color: ${colors.GREEN};
  font-weight: 500;
  margin-bottom: 16px;
`;
