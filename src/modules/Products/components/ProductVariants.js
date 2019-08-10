import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ProductVariants = ({ displayName, setVariant, variants = [] }) => {
  const handleChange = ({ target }) => setVariant(variants[target.value]);

  return (
    <Wrapper>
      {!variants.length && displayName && (
        <DisplayName>{displayName}</DisplayName>
      )}
      {variants.length > 0 && (
        <SelectWrapper>
          <Select onChange={handleChange}>
            {variants.map((variant, index) => (
              <option key={variant.measurement.displayName} value={index}>
                {variant.measurement.displayName}
              </option>
            ))}
          </Select>
          <Chevron />
        </SelectWrapper>
      )}
    </Wrapper>
  );
};

const Chevron = () => (
  <StyledChevron
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
  >
    <path
      fill="#231F20"
      fillRule="nonzero"
      d="M6.005 6.999L6.006 7l-.299.3a1 1 0 0 1-1.414 0L.227 3.233a.712.712 0 0 1 1.007-1.007L5 5.994l3.766-3.767a.712.712 0 0 1 1.007 1.007L6.047 6.96a1.016 1.016 0 0 1-.042.039z"
    />
  </StyledChevron>
);

const Wrapper = styled.div`
  margin-bottom: 18px;
`;

const DisplayName = styled.p`
  color: ${colors.GREEN_2};
  font-size: 17px;
  text-transform: uppercase;
`;

const SelectWrapper = styled.div`
  background: ${colors.LIGHT_GREEN_2};
  border-radius: 3px;
  position: relative;
`;

const Select = styled.select`
  -webkit-appearance: none;
  background: none;
  color: #6e8682;
  flex: 1;
  font-weight: 500;
  height: 36px;
  padding: 0 36px 0 12px;
  text-transform: uppercase;
  width: 100%;
`;

const StyledChevron = styled.svg`
  height: 16px;
  position: absolute;
  pointer-events: none;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
`;
