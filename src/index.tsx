import 'normalize.css';
import { Loading } from './components/Loading';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
