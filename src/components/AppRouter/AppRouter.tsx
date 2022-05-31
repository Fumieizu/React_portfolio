import React from 'react';
import { Main } from '../../pages/Main';
import { Skills } from '../../pages/Skills';
import { PageRoutes } from '../../commons/const';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={PageRoutes.main} element={<Main />} />
        <Route path={PageRoutes.skills} element={<Skills />} />
      </Routes>
    </Router>
  );
};
