import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import {
  addToBasket,
  removeFromBasket,
} from '../../Basket/actions/basketActions';
import { getQuantity } from '../../Basket/reducers/basketReducer';
import { AddIcon, RemoveIcon } from './ProductActionsIcons';

export const ProductActions = ({ productName }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => getQuantity(state.basket, productName));

  const handleAddClick = () => dispatch(addToBasket(productName));
  const handleRemoveClick = () => dispatch(removeFromBasket(productName));
  const hasQuantity = quantity > 0;

  return (
    <ProductActionsWrapper hasQuantity={hasQuantity}>
      <ProductActionsSquare />
      {!hasQuantity && (
        <ProductActionsAddButton onClick={handleAddClick} type="button">
          Add
        </ProductActionsAddButton>
      )}
      {hasQuantity && (
        <ProductActionsWrapper>
          <ProductActionsSquareButton onClick={handleRemoveClick} type="button">
            <RemoveIcon />
          </ProductActionsSquareButton>
          <ProductActionsQuantity>{quantity}</ProductActionsQuantity>
          <ProductActionsSquareButton onClick={handleAddClick} type="button">
            <AddIcon />
          </ProductActionsSquareButton>
        </ProductActionsWrapper>
      )}
    </ProductActionsWrapper>
  );
};

ProductActions.propTypes = {
  productName: PropTypes.string.isRequired,
};

const ProductActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ hasQuantity }) =>
    hasQuantity ? 'space-between' : 'normal'};
`;

const ProductActionsSquare = styled.div`
  border: 1px solid ${colors.LIGHT_GREEN};
  height: 40px;
  width: 40px;
`;

const ProductActionsAddButton = styled.button`
  background: ${colors.GREEN};
  color: white;
  flex: 1;
  font-weight: 700;
  height: 40px;
  margin-left: 12px;
`;

const ProductActionsSquareButton = styled(ProductActionsSquare)`
  align-items: center;
  background: ${colors.LIGHT_GREEN_2};
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const ProductActionsQuantity = styled.span`
  display: inline-block;
  font-size: 18px;
  margin: 0 8px;
`;
