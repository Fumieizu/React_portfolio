import React from 'react';
import { AnimatedRoutes } from './AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};
