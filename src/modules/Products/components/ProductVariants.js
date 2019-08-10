import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ProductVariants = ({ displayName, variants = [] }) => {
  return (
    <Wrapper>
      {!variants.length && displayName && (
        <DisplayName>{displayName}</DisplayName>
      )}
      {variants.length > 0 && (
        <Select>
          {variants.map(({ measurement }) => (
            <option
              key={measurement.displayName}
              value={measurement.displayName}
            >
              {measurement.displayName}
            </option>
          ))}
        </Select>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 18px;
`;

const DisplayName = styled.p`
  color: ${colors.GREEN_2};
  font-size: 17px;
  text-transform: uppercase;
`;

const Select = styled.select`
  -webkit-appearance: none;
  background: ${colors.LIGHT_GREEN_2};
  border-radius: 3px;
  color: #6e8682;
  height: 36px;
  padding: 0 12px;
  text-transform: uppercase;
  width: 100%;
`;
