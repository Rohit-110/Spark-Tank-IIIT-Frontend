import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img3.jpg'
import { Context } from '../index.js'
import { server } from '../index.js';
import { useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const {setIsAuthenticated} = useContext(Context);
  const [email, setEmail]=useState("");
  const [password, setpassword]=useState("");
  
  
  const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const {data} = await axios.post(`${server}/user/login`,{
        email,password,
      },{
        headers:{          
          "Content-Type":"application/json",          
        },
        withCredentials: true,
      }    
    );
    toast.success(data.message);
    setIsAuthenticated(true);
    navigate('/home');
  }catch(error){
          toast.error('Invalid Email or Password');
          console.log(error.response.data.message);
          setIsAuthenticated(false);
    }    
};
  return (
    <div >
      <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center bg-dark bg-cover bg-center bg-no-repeat "  style={{ backgroundImage: `url(${img1})` }}>
        {/* Left Side Content */}
        

          <div className="mb-20 md:w-1/2 p-8 flex flex-col justify-center items-center mr-8">
            <h1 className="text-6xl font-bold text-white text-center mb-4 font-mono">SPARK TANK <br/>BPHC</h1>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <p className="text-white font-mono tracking-widest">
                  Keep the Ideas Flowing, Keep the Innovation Growing.
                </p>
              </div>
            </div>
          </div>

        
      </div>
        {/* Right Side Content */}
      <div className="absolute top-96 left-40 space-y-20">
        <div className="mr-12 mt-10 mb-20 w-96 space-y-8 p-8 bg-white shadow-lg rounded-md">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-800">
                Login
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Link style={{ textDecoration: "none" }} to="/">
                    create a new account
                  </Link>
                </button>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>        
        </div>
    </div>
  );
};

export default Login;
