import React, { useState } from 'react';
import { ReactButton } from '../../components/ReactButton';
import { mainLinkAnimation, PageRoutes } from '../../commons/const';
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

  const handleMainButtonClick = () => {
    setIsClick((prevState) => !prevState);
  };

  return (
    <StyledMainContainer>
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
        <StyledLinks to={PageRoutes.work} rotate={'-90deg'}>
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
        <StyledLinks to={PageRoutes.skills} rotate={'90deg'}>
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
        <StyledLinks to={PageRoutes.about} rotate={''}>
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
