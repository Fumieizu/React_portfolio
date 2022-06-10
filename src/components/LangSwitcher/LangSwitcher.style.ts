import styled from 'styled-components';
import { IStyledButton, ILangSwitcher } from './model';

export const StyledMainContainer = styled.div<ILangSwitcher>`
  position: fixed;
  left: ${(props) => (props.isMain ? '2rem' : '7rem')};
  top: 1.5rem;
  display: flex;
  z-index: 4;
`;

export const StyledButton = styled.button<IStyledButton>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 0.5rem;
  background: ${(props) => (props.isActive ? props.theme.colors.white : `transparent`)};
  color: ${(props) => (props.isActive ? props.theme.colors.black : props.theme.colors.white)};
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  transition: ${(props) => props.theme.transitions.transitionDuration};
  cursor: pointer;

  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }
`;
