import React from 'react';
import { ArrowIcon } from '../../assets/icons';
import { theme } from '../../commons/theme';
import { StyledButton } from './ComebackButton.style';
import { PageRoutes } from '../../commons/const';

export const ComebackButton: React.FC = () => {
  return (
    <StyledButton to={PageRoutes.main}>
      <ArrowIcon color={theme.colors.shadowLightBlue} />
    </StyledButton>
  );
};
