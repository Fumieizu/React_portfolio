import React from 'react';
import { Title } from '../../components/Title';
import { StyledMainContainer, StyledContainer } from './Skills.style';

export const Skills: React.FC = () => {
  return (
    <StyledMainContainer>
      <Title top={'80%'} right={'30%'} text={'Skills'} />
      <StyledContainer></StyledContainer>
    </StyledMainContainer>
  );
};
