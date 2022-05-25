import React from 'react';
import { AppRouter } from '../AppRouter';
import { GlobalStyles } from '../../styles/globalStyles.style';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};
