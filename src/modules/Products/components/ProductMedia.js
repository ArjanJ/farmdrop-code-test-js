import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ProductMedia = ({ alt, media, tags = [] }) => (
  <Media src={media}>
    {tags.map(tag => (
      <Tag key={tag.name}>{tag.name}</Tag>
    ))}
  </Media>
);

const Media = styled.div`
  background: url('${({ src }) => src}') center/cover no-repeat;
  height: 197px
  position: relative;
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
