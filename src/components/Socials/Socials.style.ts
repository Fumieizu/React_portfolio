import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    :hover {
      transition: transform ${(props) => props.theme.transitions.transitionDuration};
      transform: scale(1.2);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const StyledDecorateSpan = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.colors.shadowLightBlue};
`;
