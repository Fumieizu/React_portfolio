import React from 'react';
import { theme } from '../../commons/theme';
import { Title } from '../../components/Title';
import { Socials } from '../../components/Socials';
import { ComebackButton } from '../../components/ComebackButton';
import { Particle } from '../../components/Particle';
import { aboutRouteAnimation, aboutImageAnimation } from '../../commons/const';
import Astronaut from '../../assets/images/astronaut.png';
import { LangSwitcher } from '../../components/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledImageWrapper, StyledMainContainer } from './About.style';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const text = t<string, string[]>('about', { returnObjects: true });

  return (
    <StyledMainContainer
      variants={aboutRouteAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
    >
      <Title color={theme.colors.white} text="ABOUT" top="10%" left="5%" />
      <Particle mode={'dark'} />
      <ComebackButton />
      <LangSwitcher />
      <StyledImageWrapper variants={aboutImageAnimation} initial={'initial'} animate={'animate'}>
        <img src={Astronaut} alt="Astronaut" />
      </StyledImageWrapper>
      <StyledContainer>
        {text.map((item: string) => (
          <p key={item}>{item}</p>
        ))}
      </StyledContainer>
      <Socials />
    </StyledMainContainer>
  );
};
