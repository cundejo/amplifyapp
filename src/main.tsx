import React from 'react';
import ReactDOM from 'react-dom/client';
import Amplify from 'aws-amplify';
import App from './App';
import './config';
import './index.css';
// @ts-ignore
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
