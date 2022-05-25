import React from 'react';
import { Main } from '../../Pages/Main';
import { PageRoutes } from '../../commons/const';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={PageRoutes.main} element={<Main />} />
      </Routes>
    </Router>
  );
};
