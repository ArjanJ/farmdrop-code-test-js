import {
  applyDiscount,
  calculatePriceFromAmountAndPricePerUnit,
  formatCurrency,
  getInitialVariant,
  parseAmountAndUnitsFromMeasurement,
  parsePrice,
  roundToTwo,
} from './utils';

describe('utils', () => {
  describe('applyDiscount', () => {
    it('applies discount to number', () => {
      expect(applyDiscount(50, 10)).toBe(45);
    });
  });

  describe('calculatePriceFromAmountAndPricePerUnit', () => {
    it('calculates price when units are kg', () => {
      expect(calculatePriceFromAmountAndPricePerUnit(2, 'kg', 10)).toBe(20);
    });

    it('calculates price when units are g', () => {
      expect(calculatePriceFromAmountAndPricePerUnit(200, 'g', 10)).toBe(2);
    });

    it('returns 0 when units are not kg or g', () => {
      expect(calculatePriceFromAmountAndPricePerUnit(1, 'cm', 10)).toBe(0);
    });
  });

  describe('formatCurrency', () => {
    it('formats number into GBP currency string', () => {
      expect(formatCurrency(9.99)).toBe('£9.99');
    });
  });

  describe('getInitialVariant', () => {
    it('returns first variant if product has variants', () => {
      const variant = { pricePerUnit: 1 };
      expect(getInitialVariant({ variants: [variant] })).toEqual(variant);
    });

    it('returns variant if product has no variants', () => {
      expect(getInitialVariant({ pricePerUnit: 1, variants: [] })).toEqual({
        pricePerUnit: 1,
      });
    });
  });

  describe('parseAmountAndUnitsFromMeasurement', () => {
    it('parses amount and units for kg', () => {
      expect(parseAmountAndUnitsFromMeasurement('short leg (2kg)')).toEqual({
        amount: 2,
        units: 'kg',
      });
    });

    it('parses amount and units for g', () => {
      expect(parseAmountAndUnitsFromMeasurement('long leg (200g)')).toEqual({
        amount: 200,
        units: 'g',
      });
    });

    it('returns null if no amount or units found', () => {
      expect(parseAmountAndUnitsFromMeasurement('yolo')).toEqual({
        amount: null,
        units: null,
      });
    });
  });

  describe('parsePrice', () => {
    it('parses string containing number and currency symbol into number', () => {
      expect(parsePrice('£10.05')).toBe(10.05);
    });
  });

  describe('roundToTwo', () => {
    it('rounds number to 2 decimal places', () => {
      expect(roundToTwo(4.48885)).toBe(4.49);
    });
  });
});
