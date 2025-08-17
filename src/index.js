import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
import { useState } from 'react';

// Production API
export const server="http://13.127.209.14:4000/api";

// Development API
// export const server="http://localhost:4000/api";      

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
