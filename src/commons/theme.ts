import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    darkBlue: '#12232E',
    lighterBlue: '#007CC7',
    lightestBlue: '#4DA8DA',
    shadowDarkBlue: '#203647',
    shadowLightBlue: '#eefbfb',
  },

  transitions: {
    transitionDuration: '0.5s',
  },

  breakpoints: {
    xl: '960px',
    l: '800px',
    m: '640px',
    s: '480px',
    xs: '400px',
  },
};
