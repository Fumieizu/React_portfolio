import React from 'react';
import { theme } from '../../commons/theme';
import { StyledTitle } from './Title.style';
import { ITitle } from './model';

export const Title: React.FC<ITitle> = ({ text, top, left, right, color = theme.colors.black }) => {
  return (
    <StyledTitle color={color} top={top} right={right} left={left}>
      {text}
    </StyledTitle>
  );
};
