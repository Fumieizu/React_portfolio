import styled from 'styled-components';
import { IStyledButton } from './model';

export const StyledButton = styled.button<IStyledButton>`
  position: absolute;
  top: ${(props) => (props.isClick ? '85%' : '50%')};
  left: ${(props) => (props.isClick ? '89%' : '50%')};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 1s ease 0s;
  width: ${(props) => (props.isClick ? '120px' : '200px')};
  height: ${(props) => (props.isClick ? '120px' : '200px')};
  z-index: 4;

  & > :last-child {
    display: ${(props) => (props.isClick ? 'none' : 'inline-block')};
    padding-top: 1rem;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: ${(props) => (props.isClick ? '80px' : '150px')};
    height: ${(props) => (props.isClick ? '80px' : '150px')};
    top: ${(props) => (props.isClick ? '90%' : '50%')};
    left: ${(props) => (props.isClick ? '88%' : '50%')};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: ${(props) => (props.isClick ? '40px' : '150px')};
    height: ${(props) => (props.isClick ? '40px' : '150px')};
  }
`;
