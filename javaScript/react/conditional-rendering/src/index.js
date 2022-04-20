import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginControl from './components/LoginControl';
import App from './App';
import Calculator from './components/Calculator';

const messages = ["react", "re:react", "re:re:react"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <LoginControl/>
    <Calculator/>
  </React.StrictMode>
);