import styled from 'styled-components';

export const StyledMainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.lightestBlue};
`;

export const StyledContainer = styled.div`
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.lightestBlue};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Ubuntu Mono', Arial, monospace;
  line-height: 1.5;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 60vw;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 50vw;
    height: max-content;
  }
`;

export const StyledTitle = styled.h2``;
