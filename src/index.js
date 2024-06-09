import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
export const server="https://iiita-hub-backend-l7tm.onrender.com/api/v1";
export const Context = createContext({isAuthenticated : false});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);