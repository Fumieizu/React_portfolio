import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledButton = styled(NavLink)`
  display: flex;
  width: 60px;
  height: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform ${(props) => props.theme.transitions.transitionDuration};

  &:hover {
    transform: scale(1.2);
  }

  svg {
    pointer-events: none;
  }
`;
