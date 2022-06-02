import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IStyledText } from './model';

export const StyledWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  display: flex;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.darkBlue} 50%,
    ${(props) => props.theme.colors.lighterBlue} 50%) bottom,
  linear-gradient(
    to right,
    ${(props) => props.theme.colors.darkBlue} 50%,
    ${(props) => props.theme.colors.lighterBlue} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;
  border-left: 2px solid ${(props) => props.theme.colors.darkBlue};
  border-right: 2px solid ${(props) => props.theme.colors.lightestBlue};

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 50vw;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(
      to top,
        ${(props) => props.theme.colors.lighterBlue} 50%,
        ${(props) => props.theme.colors.darkBlue} 50%)
        0 0px / 2px 100% no-repeat,
      linear-gradient(
      to top,
        ${(props) => props.theme.colors.lighterBlue} 50%,
        ${(props) => props.theme.colors.darkBlue} 50%)
      0 0px / 2px 100% no-repeat;
    border-top: 2px solid ${(props) => props.theme.colors.darkBlue};
    border-bottom: 2px solid ${(props) => props.theme.colors.lighterBlue};
    border-style: solid none;
    background-position: 0 0, 100% 0;
  }
  }
`;

export const StyledContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
    height: 50%;

    img {
      width: 70%;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    img {
      width: 80%;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    img {
      width: 90%;
    }
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: calc(1rem + 1.5vw);

  & > *:last-child {
    opacity: 0.6;
    font-weight: 300;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    padding: 1rem;
  }
`;

export const StyledText = styled.p<IStyledText>`
  padding: 0;
  margin: 0;
  font-family: Karla, sans-serif;
  font-weight: 600;
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};

  & > *:last-child {
    font-size: calc(0.5rem + 1.5vw);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    & > *:last-child {
      font-size: calc(0.5rem + 1vw);
    }
  }
`;
