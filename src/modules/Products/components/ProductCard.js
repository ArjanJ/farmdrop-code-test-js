import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import {
  getInitialVariant,
  parseAmountAndUnitsFromMeasurement,
  calculatePriceFromAmountAndPricePerUnit,
  parsePrice,
  roundToTwo,
} from '../../../utils/utils';
import { ProductActions } from './ProductActions';
import { ProductMedia } from './ProductMedia';
import { ProductPrice } from './ProductPrice';
import { ProductVariants } from './ProductVariants';

export const ProductCard = ({ product }) => {
  const [variant, setVariant] = useState(getInitialVariant(product));
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    const { measurement, pricePerUnit } = variant;

    if (product.variants.length && pricePerUnit) {
      const { amount, units } = parseAmountAndUnitsFromMeasurement(
        measurement.displayName
      );
      const parsedPricedPerUnit = parsePrice(pricePerUnit);
      const updatedPrice = roundToTwo(
        calculatePriceFromAmountAndPricePerUnit(
          amount,
          units,
          parsedPricedPerUnit
        )
      );

      setPrice({ pence: updatedPrice * 100 });
    }
  }, [product.variants, variant]);

  return (
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
            setVariant={setVariant}
            variants={product.variants}
          />
        </div>
        <div>
          <ProductPrice
            price={price}
            pricePerUnit={variant}
            saleText={product.saleText}
            salePrice={product.salePrice}
          />
          <ProductActions />
        </div>
      </CardContent>
    </Card>
  );
};

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
