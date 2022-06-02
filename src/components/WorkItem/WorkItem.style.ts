import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledListItem = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.colors.shadowLightBlue};
  color: ${(props) => props.theme.colors.black};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.shadowLightBlue};
  transition: all 0.2s ease;
  box-sizing: content-box;

  &:not(:last-child) {
    margin-right: 8rem;
  }

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.white};

    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    height: 35vh;
    &:not(:last-child) {
      margin-right: 6rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 14rem;
    padding: 1.5rem;
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 12rem;
  }
`;

export const StyleTitle = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

export const StyledText = styled.p`
  font-size: calc(0.8em + 0.3vw);
  font-family: Karla, Arial, sans-serif;
  font-weight: 500;
  text-align: left;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: calc(0.7em + 0.3vw);
  }
`;

export const StyledTagsContainer = styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.black};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${StyledListItem}:hover & {
    border-color: ${(props) => props.theme.colors.white};
  }
`;

export const StyledTagSpan = styled.span`
  font-size: calc(0.8em + 0.3vw);

  &:not(:last-child) {
    margin-right: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 0.7em;
  }
`;

export const StyledDemoLink = styled.a`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(0.3rem + 1vw);

  ${StyledListItem}:hover & {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: calc(0.6rem + 1vw);
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
