import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { IStyleBlueDiv, IStyledContainer, IStyledLinks } from './model';

export const StyledMainContainer = styled.section`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  overflow: hidden;
`;

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  align-items: center;
  align-self: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  text-align: center;
`;

export const StyledLinks = styled(NavLink)<IStyledLinks>`
  font-family: 'Karla', Arial, sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  transform: ${(props) => (props.rotate ? `rotate(${props.rotate})` : '')};
  transition: transform ${(props) => props.theme.transitions.transitionDuration};
  z-index: 1;

  &:hover {
    transform: ${(props) => (props.rotate ? `rotate(${props.rotate}) scale(1.2)` : 'scale(1.2)')};
  }

  &:active {
    transform: ${(props) => (props.rotate ? `rotate(${props.rotate}) scale(0.8)` : 'scale(0.8)')};
  }
`;

export const StyledLogoContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
`;

export const StyledTitle = styled(motion.h2)`
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1.2em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s};) {
    font-size: 1em;
  }
`;

export const StyledBlueDiv = styled.div<IStyleBlueDiv>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.isClick ? '50%' : '0')};
  height: ${(props) => (props.isClick ? '100%' : '0')};
  z-index: 1;
  background-color: ${(props) => props.theme.colors.lighterBlue};
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    right: 0;
    width: ${(props) => (props.isClick ? '100%' : '0')};
    height: ${(props) => (props.isClick ? '50%' : '0')};
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;
