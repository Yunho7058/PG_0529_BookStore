import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mock/browser');
    await worker.start(); // MSW 시작
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

mountApp();
