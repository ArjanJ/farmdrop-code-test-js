import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ProductMedia = ({ alt, media, tags = [] }) => (
  <Media>
    <Img alt={alt} src={media} />
    {tags.map(tag => (
      <Tag key={tag.name}>{tag.name}</Tag>
    ))}
  </Media>
);

const Media = styled.div`
  height: 197px
  position: relative;
`;

const Img = styled.img`
  height: 100%;
`;

const Tag = styled.p`
  background: ${colors.DARK_GREEN};
  bottom: 0;
  color: white;
  display: inline-block;
  left: 0;
  padding: 16px;
  position: absolute;
  text-transform: uppercase;
`;
