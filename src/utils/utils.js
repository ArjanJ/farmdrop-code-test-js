/**
 * getInitialVariant
 * Used to grab the first variant if the product has
 * variants. If it doesn't, product.pricePerUnit is returned.
 *
 * @param {object} product product iteam from the API
 * @returns { measurement?: { displayName: string }, pricePerUnit: string }
 */
export function getInitialVariant(product) {
  if (product.variants.length === 0) {
    return { pricePerUnit: product.pricePerUnit };
  }

  return product.variants[0];
}

/**
 * parseAmountAndUnitsFromMeasurement
 * Takes the displayName like 'SHORT LEG (2KG)' and
 * returns ({ amount: 2, units: 'kg' })
 *
 * @param {string} displayName the displayName in the measurement obj.
 * @returns { amount: number, units: 'kg' | 'g'}
 */
export function parseAmountAndUnitsFromMeasurement(displayName = '') {
  const [, rawAmount] = displayName.split('(');
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

/**
 * calculatePriceFromAmountAndPricePerUnit
 * When the user selects a different variant, this function
 * is used to calculate the new price based on the updated
 * price per unit and amount located in the displayName field.
 *
 * @param {number} amount
 * @param {string} units
 * @param {number} pricePerUnit
 * @returns number
 */
export function calculatePriceFromAmountAndPricePerUnit(
  amount,
  units,
  pricePerUnit
) {
  switch (units.toLowerCase()) {
    case 'kg':
      return pricePerUnit * amount;
    case 'g':
      return pricePerUnit * (amount / 1000);
    default:
      return 0;
  }
}

/**
 * parsePrice
 * Strips out anything that is not 0-9 or a decimal point
 * and returns a number.
 *
 * @param {string} price
 * @returns number
 */
export function parsePrice(price) {
  return Number(price.replace(/[^\d.]/g, ''));
}

export function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}

export function formatCurrency(num) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(num);
}

export function applyDiscount(price, discount) {
  return price - price * (discount / 100);
}
