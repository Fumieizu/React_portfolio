import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      darkBlue: string;
      lighterBlue: string;
      lightestBlue: string;
      shadowDarkBlue: string;
      shadowLightBlue: string;
    };

    transitions: {
      transitionDuration: string;
    };

    breakpoints: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
  }
}
