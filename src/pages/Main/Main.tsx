import React, { useState } from 'react';
import { ReactButton } from '../../components/ReactButton';
import { mainLinkAnimation, mainRouteAnimation, PageRoutes } from '../../commons/const';
import { Socials } from '../../components/Socials';
import { LogoIcon } from '../../assets/icons';
import { Intro } from '../../components/Intro';
import {
  StyledMainContainer,
  StyledContainer,
  StyledLinks,
  StyledTitle,
  StyledLogoContainer,
  StyledBlueDiv,
} from './Main.style';

export const Main: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>('');

  const handleLinkClick = (path: string) => {
    setPathname(path);
  };

  const handleMainButtonClick = () => {
    setIsClick((prevState) => !prevState);
  };

  const moveY = {
    y: '-100%',
  };
  const moveX = {
    x: `${pathname === 'work' ? '100%' : '-100%'}`,
  };

  return (
    <StyledMainContainer
      variants={mainRouteAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={pathname === 'about' ? moveY : moveX}
      transition={{ duration: 0.5 }}
    >
      <StyledBlueDiv isClick={isClick} />
      <StyledLogoContainer
        variants={mainLinkAnimation}
        custom={-200}
        initial={'initial'}
        animate={'animate'}
        transition={mainLinkAnimation.transition}
      >
        <LogoIcon width={'60px'} height={'32px'} />
      </StyledLogoContainer>
      <ReactButton onClick={handleMainButtonClick} isClick={isClick} />
      <StyledContainer justifyContent={'space-between'} alignItems={'center'}>
        <StyledLinks onClick={() => handleLinkClick('work')} to={PageRoutes.work} rotate={'-90deg'}>
          <StyledTitle
            variants={mainLinkAnimation}
            custom={-200}
            initial={'initial'}
            animate={'animate'}
            transition={mainLinkAnimation.transition}
          >
            Work
          </StyledTitle>
        </StyledLinks>
        <StyledLinks
          onClick={() => handleLinkClick('skills')}
          to={PageRoutes.skills}
          rotate={'90deg'}
        >
          <StyledTitle
            variants={mainLinkAnimation}
            custom={-200}
            initial={'initial'}
            animate={'animate'}
            transition={mainLinkAnimation.transition}
          >
            My Skills
          </StyledTitle>
        </StyledLinks>
      </StyledContainer>
      <StyledContainer justifyContent={'center'} alignItems={'flex-end'}>
        <Socials />
        <StyledLinks onClick={() => handleLinkClick('about')} to={PageRoutes.about} rotate={''}>
          <StyledTitle
            variants={mainLinkAnimation}
            custom={200}
            initial={'initial'}
            animate={'animate'}
            transition={mainLinkAnimation.transition}
          >
            About
          </StyledTitle>
        </StyledLinks>
      </StyledContainer>
      {isClick && <Intro />}
    </StyledMainContainer>
  );
};
