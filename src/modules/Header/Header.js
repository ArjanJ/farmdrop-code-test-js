import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { HeaderLogo } from './HeaderLogo';

export const Header = () => (
  <StyledHeader>
    <HeaderWrapper>
      <HeaderLogo height={34} width={128} />
    </HeaderWrapper>
  </StyledHeader>
);

const StyledHeader = styled.header`
  align-items: center;
  background: ${colors.GREEN};
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: 24px;
  padding: 0 12px;
`;

const HeaderWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
`;
