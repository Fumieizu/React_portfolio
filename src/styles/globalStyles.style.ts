import { createGlobalStyle } from 'styled-components';
import { theme } from '../commons/theme';

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;

    font-family: 'Montserrat', Verdana, Arial, sans-serif;

    color: ${theme.colors.secondary};

    text-align: center;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
