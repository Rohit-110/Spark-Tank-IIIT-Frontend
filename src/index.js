import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
import { useState } from 'react';


export const server="https://spark-tank-iiit-backend.onrender.com/api";

export const Context = createContext();

const Appwrapper = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] =useState({});
  const [checkemail, setCheckemail] =useState({});
  return(
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      user,
      setUser,
      checkemail,
      setCheckemail,

    }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Appwrapper />
</React.StrictMode>
);