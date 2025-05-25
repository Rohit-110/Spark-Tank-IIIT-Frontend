import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  
  const handleSubmit = async(e) => {
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-75">
          <div className="aurora-1 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 animate-pulse"></div>
          <div className="aurora-2 absolute top-0 left-0 w-full h-full bg-gradient-to-l from-green-400 via-blue-500 to-purple-600 opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="aurora-3 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500 opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Brand */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-mono tracking-wider">
              SPARK TANK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                IIIT
              </span>
            </h1>
            <p className="text-xl text-gray-200 font-mono tracking-wide">
              Keep the Ideas Flowing, Keep the Innovation Growing.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-gray-300">
                  Don't have an account?{' '}
                  <Link 
                    to="/" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                  >
                    Create account
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Forgot your password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="mt-8 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex justify-center items-center px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2 text-sm">Google</span>
                </button>
                <button className="flex justify-center items-center px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="ml-2 text-sm">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          33% { transform: translateX(-60%) translateY(-40%) rotate(120deg); }
          66% { transform: translateX(-40%) translateY(-60%) rotate(240deg); }
        }
        
        .aurora-1 {
          animation: aurora 8s ease-in-out infinite;
          filter: blur(60px);
        }
        
        .aurora-2 {
          animation: aurora 12s ease-in-out infinite reverse;
          filter: blur(80px);
        }
        
        .aurora-3 {
          animation: aurora 15s ease-in-out infinite;
          filter: blur(100px);
        }
      `}</style>
    </div>
  );
};

export default Login;