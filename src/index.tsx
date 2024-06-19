import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeCustomization from './themes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeCustomization>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeCustomization>
  </BrowserRouter>
);
