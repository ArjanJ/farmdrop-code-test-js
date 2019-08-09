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
        <select>
          {variants.map(({ measurement }) => (
            <option
              key={measurement.displayName}
              value={measurement.displayName}
            >
              {measurement.displayName}
            </option>
          ))}
        </select>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const DisplayName = styled.p`
  color: ${colors.GREEN_2};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;
