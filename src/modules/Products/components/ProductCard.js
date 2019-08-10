import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { ProductActions } from './ProductActions';
import { ProductMedia } from './ProductMedia';
import { ProductPrice } from './ProductPrice';
import { ProductVariants } from './ProductVariants';

function getInitialVariant(product) {
  if (product.variants.length === 0) {
    return { pricePerUnit: product.pricePerUnit };
  }

  return product.variants[0];
}

// function getInitialPrice(product) {
//   if (product.variants.length === 0) {
//     return { pricePerUnit: product.pricePerUnit };
//   }

//   return product.variants[0];
// }

function parseAmountAndUnitsFromMeasurement(measurement = '') {
  const [, rawAmount] = measurement.split('(');
  let amount = '';
  let units = '';

  for (let i = 0; i < rawAmount.length; i++) {
    const isNumber = !isNaN(rawAmount[i]);
    const isDecimal = rawAmount[i] === '.' && !isNaN(rawAmount[i - 1]);
    const isUnit = rawAmount[i].match(/k|g/gm);

    if (isNumber || isDecimal) {
      amount += rawAmount[i];
    }

    if (isUnit) {
      units += rawAmount[i];
    }
  }

  return {
    amount: Number(amount.trimLeft()),
    units,
  };
}

function calculatePriceFromAmountAndPricePerUnit(amount, units, pricePerUnit) {
  switch (units) {
    case 'kg':
      return pricePerUnit * amount;
    case 'g':
      return pricePerUnit * (amount / 1000);
    default:
      return 0;
  }
}

function parsePricePerUnit(pricePerUnit) {
  return Number(pricePerUnit.replace(/[^\d.]/g, ''));
}

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}

export const ProductCard = ({ product }) => {
  const [variant, setVariant] = useState(getInitialVariant(product));
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    const { measurement, pricePerUnit } = variant;

    if (product.variants.length && pricePerUnit) {
      const { amount, units } = parseAmountAndUnitsFromMeasurement(
        measurement.displayName
      );
      const parsedPricedPerUnit = parsePricePerUnit(pricePerUnit);
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
