import React from 'react';
import { ArrowIcon } from '../../assets/icons';
import { theme } from '../../commons/theme';
import { StyledButton } from './ComebackButton.style';

export const ComebackButton: React.FC = () => {
  return (
    <StyledButton to="/">
      <ArrowIcon color={theme.colors.shadowLightBlue} />
    </StyledButton>
  );
};
