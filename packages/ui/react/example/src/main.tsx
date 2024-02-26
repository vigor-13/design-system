import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { About } from './about';
import { VigorUIProvider } from '@react-ui/react';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('No root element.');

ReactDOM.createRoot(rootElement).render(
  <VigorUIProvider>
    <App />
    <About />
  </VigorUIProvider>,
);
