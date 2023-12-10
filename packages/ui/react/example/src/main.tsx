import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import '@react-ui/components/dist/style/stylex.css';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('No root element.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
