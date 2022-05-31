import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;

    font-family: 'Source Sans Pro', Arial, sans-serif;

    color: ${(props) => props.theme.colors.white};

    text-align: center;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1,h2,h3,h4,h5,h6 {
    padding: 0;
    margin: 0;
    display: inline-block;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
