import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMainContainer = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.lightestBlue};
`;

export const StyledContainer = styled.a`
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.lightestBlue};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Ubuntu Mono', Arial, monospace;
  line-height: 1.5;
  transition: ${(props) => props.theme.transitions.transitionDuration};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.white};

    & path {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  svg {
    min-width: 22px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 50vw;
    height: max-content;
    min-width: 275px;
  }
`;

export const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 1.7rem;

  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.1rem;
  }
`;

export const StyledTextWrapper = styled.div`
  font-size: 1.4rem;
  padding: 0;
  margin: 0.5rem 0;
  text-align: left;

  & > *:not(:first-child) {
    margin-left: 2rem;
    display: block;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 0.8rem;
  }
`;
