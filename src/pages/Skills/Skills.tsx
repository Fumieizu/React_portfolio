import React from 'react';
import { LaptopIcon } from '../../assets/icons';
import { Title } from '../../components/Title';
import { Socials } from '../../components/Socials';
import { ComebackButton } from '../../components/ComebackButton';
import { Particle } from '../../components/Particle';
import { routeAnimation } from '../../commons/const';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../components/LangSwitcher';
import {
  StyledMainContainer,
  StyledContainer,
  StyledTitle,
  StyledTextWrapper,
} from './Skills.style';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledMainContainer
      variants={routeAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
    >
      <Title top={'80%'} right={'30%'} text={'Skills'} />
      <Particle mode={'light'} />
      <ComebackButton />
      <LangSwitcher />
      <StyledContainer>
        <StyledTitle>
          <LaptopIcon /> Front-end developer
        </StyledTitle>
        <StyledTextWrapper>
          <p>{t('skills.title')}</p>
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
