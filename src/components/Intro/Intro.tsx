import React, { useState, useEffect } from 'react';
import Pepe from '../../assets/images/pepe.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { introAnimation, introImageAnimation } from '../../commons/const';
import { StyledWrapper, StyledContainer, StyledTextWrapper, StyledText } from './Intro.style';

const LARGE_BREAKPOINT = 800;

export const Intro: React.FC = () => {
  const [winWidth, setWinWidth] = useState<number>(0);
  const { t, i18n } = useTranslation();

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
          <StyledText textAlign={'left'} fontSize={i18n.language === 'en' ? '2em' : '1.5em'}>
            {t('main.title')}
          </StyledText>
          <StyledText textAlign={'left'} fontSize={i18n.language === 'en' ? '1.17em' : '1em'}>
            {t('main.name')}
          </StyledText>
          <StyledText textAlign={'left'} fontSize={'1.5rem'}>
            {t('main.subtitle')}
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
