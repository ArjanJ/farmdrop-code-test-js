import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { addToBasket } from '../../Basket/actions/basketActions';

export const ProductActions = ({ productName }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addToBasket(productName));

  return (
    <ProductActionsWrapper>
      <ProductActionsSquare />
      <Button onClick={onClick} type="button">
        Add
      </Button>
    </ProductActionsWrapper>
  );
};

ProductActions.propTypes = {
  productName: PropTypes.string.isRequired,
};

const ProductActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductActionsSquare = styled.div`
  border: 1px solid ${colors.LIGHT_GREEN};
  height: 40px;
  width: 40px;
`;

const Button = styled.button`
  background: ${colors.GREEN};
  color: white;
  flex: 1;
  font-weight: 700;
  height: 40px;
  margin-left: 12px;
`;
