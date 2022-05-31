import React from 'react';
import { StyledTitle } from './Title.style';
import { ITitle } from './model';

export const Title: React.FC<ITitle> = ({ text, top, left, right }) => {
  return (
    <StyledTitle top={top} right={right} left={left}>
      {text}
    </StyledTitle>
  );
};
