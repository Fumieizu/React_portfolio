import React from 'react';
import { IReactButton } from './model';
import { StyledButton } from './ReactButton.style';
import { ReactIcon } from '../../assets/icons';

export const ReactButton: React.FC<IReactButton> = ({ onClick, isClick }) => {
  return (
    <StyledButton isClick={isClick} onClick={onClick}>
      <ReactIcon />
      <span>Click here</span>
    </StyledButton>
  );
};
