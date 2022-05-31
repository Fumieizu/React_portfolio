import React from 'react';
import { AppRouter } from '../AppRouter';
import { GlobalStyles } from '../../styles/globalStyles.style';
import { theme } from '../../commons/theme';
import { ThemeProvider } from 'styled-components';

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};
