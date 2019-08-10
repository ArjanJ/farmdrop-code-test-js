import React, { useEffect, useState } from 'react';

import {
  getInitialVariant,
  parseAmountAndUnitsFromMeasurement,
  calculatePriceFromAmountAndPricePerUnit,
  parsePrice,
  roundToTwo,
} from '../../../utils/utils';
import { ProductCard } from './ProductCard';

export const Product = ({ product }) => {
  // Keep track of which variant is selected.
  const [variant, setVariant] = useState(getInitialVariant(product));

  // Keep track of price change as variant is updated.
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    const { measurement, pricePerUnit } = variant;

    // Below logic only applies to products with variants.
    if (product.variants.length && pricePerUnit) {
      /**
       * Extract the amount and units from the displayName.
       * E.g. 'SHORT LEG (2KG)' => ({ amount: 2, units: 'kg' })
       */
      const { amount, units } = parseAmountAndUnitsFromMeasurement(
        measurement.displayName
      );

      // Convert currency string to number.
      const parsedPricePerUnit = parsePrice(pricePerUnit);

      // Recalculate the price based on price per unit and amount.
      const updatedPrice = roundToTwo(
        calculatePriceFromAmountAndPricePerUnit(
          amount,
          units,
          parsedPricePerUnit
        )
      );

      // Update the price, which cascades to children components.
      setPrice({ pence: updatedPrice * 100 });
    }
  }, [product.variants, variant]);

  return (
    <ProductCard
      price={price}
      product={product}
      setVariant={setVariant}
      variant={variant}
    />
  );
};
