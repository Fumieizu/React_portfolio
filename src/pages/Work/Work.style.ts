import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMainContainer = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  overflow: hidden;
`;

export const StyledList = styled(motion.ul)`
  display: flex;
  margin: 0 0 4rem calc(10rem + 15vw);
  cursor: grab;

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: calc(8rem + 15vw);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: calc(2rem + 15vw);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-left: 0;
  }
`;
