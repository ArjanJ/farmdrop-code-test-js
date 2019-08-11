import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { easing } from '../../../styles/easing';
import { getQuantity } from '../../Basket/reducers/basketReducer';

export const ProductBasketOverlay = ({ productName }) => {
  const quantity = useSelector(state => getQuantity(state.basket, productName));

  return (
    <ProductBasketOverlayWrapper show={quantity > 0}>
      <ProductBasketOverlayText>
        <span data-testid="quantity">{quantity}</span> in basket
      </ProductBasketOverlayText>
    </ProductBasketOverlayWrapper>
  );
};

ProductBasketOverlay.propTypes = {
  productName: PropTypes.string.isRequired,
};

const ProductBasketOverlayWrapper = styled.div`
  align-items: center;
  background: rgba(0, 180, 149, 0.65);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  top: 0;
  transform: ${({ show }) => (show ? 'none' : 'scale(0.95)')};
  transition: opacity 0.3s ${easing.out};
  width: 100%;
`;

const ProductBasketOverlayText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
