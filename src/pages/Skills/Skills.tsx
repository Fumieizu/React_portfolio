import React from 'react';
import { LaptopIcon } from '../../assets/icons';
import { Title } from '../../components/Title';
import { Socials } from '../../components/Socials';
import { ComebackButton } from '../../components/ComebackButton';
import { Particle } from '../../components/Particle';
import {
  StyledMainContainer,
  StyledContainer,
  StyledTitle,
  StyledTextWrapper,
} from './Skills.style';

export const Skills: React.FC = () => {
  return (
    <StyledMainContainer>
      <Particle mode={'light'} />
      <Title top={'80%'} right={'30%'} text={'Skills'} />
      <ComebackButton />
      <StyledContainer>
        <StyledTitle>
          <LaptopIcon /> Front-end developer
        </StyledTitle>
        <StyledTextWrapper>
          <p>I follow trends and match them</p>
        </StyledTextWrapper>
        <StyledTextWrapper>
          <strong>SKILLS</strong>
          <p>
            Html, Css, Js, Ts, React, Redux(RTK, saga, thunk), Next, Styled Components Sass,
            MaterialUI, Ant, Jest etc.
          </p>
        </StyledTextWrapper>
        <StyledTextWrapper>
          <strong>SOFTWARE</strong>
          <p>Jira, Trello, Postman, Figma,Photoshop etc.</p>
        </StyledTextWrapper>
      </StyledContainer>
      <Socials />
    </StyledMainContainer>
  );
};
