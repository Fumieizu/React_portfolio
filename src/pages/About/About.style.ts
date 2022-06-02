import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMainContainer = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    justify-content: center;
  }
`;

export const StyledContainer = styled.div`
  border: 2px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  backdrop-filter: blur(4px);
  margin-left: 6.5rem;
  font-family: 'Ubuntu Mono', Arial, monospace;
  line-height: 1.5;
  font-size: calc(0.6rem + 1vw);
  font-style: italic;
  box-sizing: content-box;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 60vw;
    height: 50vh;
    margin: 0;

    & > *:not(:first-child) {
      margin-top: 1rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    height: auto;
    backdrop-filter: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  }
`;

const pattern = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`;

export const StyledImageWrapper = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${pattern} 4s ease infinite;
`;
