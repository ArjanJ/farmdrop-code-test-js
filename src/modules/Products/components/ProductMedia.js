import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/colors';
import { ProductBasketOverlay } from './ProductBasketOverlay';

export const ProductMedia = React.memo(({ media, productName, tags = [] }) => (
  <Media style={{ backgroundImage: `url('${media}')` }}>
    {tags.map(tag => (
      <Tag key={tag.name}>{tag.name}</Tag>
    ))}
    <ProductBasketOverlay productName={productName} />
  </Media>
));

ProductMedia.propTypes = {
  media: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

const Media = styled.div`
  background-color: ${colors.DARK_GREEN};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 50%;
  position: relative;

  @media ${breakpoints.MOBILE} {
    height: 216px;
    min-width: 0;
  }
`;

const Tag = styled.p`
  background: ${colors.DARK_GREEN};
  bottom: 0;
  color: white;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  left: 0;
  padding: 10px 20px;
  position: absolute;
  text-transform: uppercase;
`;
