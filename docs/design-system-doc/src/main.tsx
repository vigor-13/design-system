import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './header';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('No Root Element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Header />
    <div>HELLO?</div>
  </React.StrictMode>,
);
