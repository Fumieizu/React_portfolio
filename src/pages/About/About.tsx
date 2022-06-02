import React from 'react';
import { theme } from '../../commons/theme';
import { Title } from '../../components/Title';
import { Socials } from '../../components/Socials';
import { ComebackButton } from '../../components/ComebackButton';
import { Particle } from '../../components/Particle';
import { aboutRouteAnimation, aboutImageAnimation } from '../../commons/const';
import Astronaut from '../../assets/images/astronaut.png';
import { StyledContainer, StyledImageWrapper, StyledMainContainer } from './About.style';

export const About: React.FC = () => {
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
      <StyledImageWrapper variants={aboutImageAnimation} initial={'initial'} animate={'animate'}>
        <img src={Astronaut} alt="Astronaut" />
      </StyledImageWrapper>
      <StyledContainer>
        <p>
          I&apos;m a front-end developer from Russia. I love to create modern, difficult
          applications with progressive technologies.
        </p>
        <p>
          I follow trends and always try to match it. I think learning something new is fun and
          using it in projects is necessary to develop your skills
        </p>
        <p>
          The purity and performance of the code is also very important to me. And this can be
          achieved by following the best practices. You can connect with me via social links.
        </p>
      </StyledContainer>
      <Socials />
    </StyledMainContainer>
  );
};
