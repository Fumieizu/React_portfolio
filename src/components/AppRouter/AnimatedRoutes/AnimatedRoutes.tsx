import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageRoutes } from '../../../commons/const';
import { Main } from '../../../pages/Main';
import { Skills } from '../../../pages/Skills';
import { About } from '../../../pages/About';
import { Work } from '../../../pages/Work';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={PageRoutes.main} element={<Main />} />
        <Route path={PageRoutes.skills} element={<Skills />} />
        <Route path={PageRoutes.about} element={<About />} />
        <Route path={PageRoutes.work} element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
};
