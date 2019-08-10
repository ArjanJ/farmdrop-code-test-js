export function getInitialVariant(product) {
  if (product.variants.length === 0) {
    return { pricePerUnit: product.pricePerUnit };
  }

  return product.variants[0];
}

export function parseAmountAndUnitsFromMeasurement(measurement = '') {
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

export function calculatePriceFromAmountAndPricePerUnit(
  amount,
  units,
  pricePerUnit
) {
  switch (units) {
    case 'kg':
      return pricePerUnit * amount;
    case 'g':
      return pricePerUnit * (amount / 1000);
    default:
      return 0;
  }
}

export function parsePrice(pricePerUnit) {
  return Number(pricePerUnit.replace(/[^\d.]/g, ''));
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
