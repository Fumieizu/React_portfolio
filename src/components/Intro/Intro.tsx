import React, { useState, useEffect } from 'react';
import Pepe from '../../assets/images/pepe.png';
import { motion } from 'framer-motion';
import { introAnimation, introImageAnimation } from '../../commons/const';
import { StyledWrapper, StyledContainer, StyledTextWrapper, StyledText } from './Intro.style';

const LARGE_BREAKPOINT = 800;

export const Intro: React.FC = () => {
  const [winWidth, setWinWidth] = useState<number>(0);

  const detectResizeWindow = () => {
    setWinWidth(window.innerWidth);
  };

  useEffect(() => {
    setWinWidth(window.innerWidth);
    window.addEventListener('resize', detectResizeWindow);

    return () => {
      window.addEventListener('resize', detectResizeWindow);
    };
  }, []);

  console.log(winWidth);
  const height = winWidth > LARGE_BREAKPOINT ? '55vh' : '70vh';

  return (
    <StyledWrapper
      variants={introAnimation}
      custom={height}
      initial={'initial'}
      animate={'animate'}
      transition={introAnimation.transition}
    >
      <StyledContainer>
        <StyledTextWrapper>
          <StyledText textAlign={'left'} fontSize={'4.5rem'}>
            Hi,
          </StyledText>
          <StyledText textAlign={'left'} fontSize={'2.5rem'}>
            I&apos;m Dmitry.
          </StyledText>
          <StyledText textAlign={'left'} fontSize={'1.5rem'}>
            Front-end developer
          </StyledText>
        </StyledTextWrapper>
      </StyledContainer>
      <StyledContainer>
        <motion.div
          variants={introImageAnimation}
          initial={'initial'}
          animate={'animate'}
          transition={introImageAnimation.transition}
        >
          <img src={Pepe} width="250px" height="250px" alt="pepe" />
        </motion.div>
      </StyledContainer>
    </StyledWrapper>
  );
};
