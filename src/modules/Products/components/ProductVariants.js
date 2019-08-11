import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { Dropdown } from '../../Dropdown/Dropdown';

export const ProductVariants = ({
  displayName,
  setVariant,
  variant,
  variants = [],
}) => {
  const handleChange = value => setVariant(variants[value]);

  const selectedIndex = variants.findIndex(
    v => v.measurement.displayName === variant.measurement.displayName
  );

  const variantOptions = variants.map((variant, index) => ({
    name: variant.measurement.displayName,
    value: index,
  }));

  return (
    <ProductVariantsWrapper>
      {!variants.length && displayName && (
        <ProductDisplayName>{displayName}</ProductDisplayName>
      )}
      {variants.length > 0 && (
        <span data-testid="variants-dropdown">
          <Dropdown
            onChange={handleChange}
            options={variantOptions}
            selected={selectedIndex}
          />
        </span>
      )}
    </ProductVariantsWrapper>
  );
};

const VariantType = PropTypes.shape({
  measurement: PropTypes.shape({
    displayName: PropTypes.string,
  }),
});

ProductVariants.propTypes = {
  displayName: PropTypes.string.isRequired,
  setVariant: PropTypes.func.isRequired,
  variant: VariantType.isRequired,
  variants: PropTypes.arrayOf(VariantType),
};

const ProductVariantsWrapper = styled.div`
  margin-bottom: 18px;
`;

const ProductDisplayName = styled.p`
  color: ${colors.GREEN_2};
  font-size: 17px;
  text-transform: uppercase;
`;
