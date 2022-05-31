import styled from 'styled-components';
import { IStyledTitle } from './model';

export const StyledTitle = styled.h1<IStyledTitle>`
  position: fixed;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  color: ${(props) => props.theme.colors.black};
  opacity: 0.1;
  font-size: 7.5rem;
  z-index: 0;
  pointer-events: none;
`;
