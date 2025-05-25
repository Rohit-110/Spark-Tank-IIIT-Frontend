import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Context, server } from '../index.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [studentId, setstudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [degree, setdegree] = useState('');
  const [batchYear, setbatchYear] = useState('');
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(Context);

  // Password validation logic
  const validatePassword = (pwd) => {
    const hasMinLength = pwd.length >= 6;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    
    return {
      minLength: hasMinLength,
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      number: hasNumber,
      specialChar: hasSpecialChar
    };
  };

  const passwordValidation = validatePassword(password);
  const passwordsMatch = password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check password validation before submitting
    const isPasswordValid = Object.values(passwordValidation).every(Boolean);
    if (!isPasswordValid) {
      toast.error("Please ensure your password meets all requirements");
      return;
    }
    
    if (!passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }
    
    try {
      console.log("email" + email + "name" + name);
      let { data } = await axios.post(`${server}/user/new`, {
        email, password, name, studentId, mobile, degree, batchYear}, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success("Logged In Successfully");
      setIsAuthenticated(true);
      navigate('/home');
    } catch (err) {
      toast.error(err.response.data.message);
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

          {/* Right Side - Signup Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Student ID Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Student ID
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter student ID"
                      value={studentId}
                      onChange={(e) => setstudentId(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email and Mobile Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter mobile number"
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password and Confirm Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="Create password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        confirmPassword && !passwordsMatch 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/20 focus:ring-cyan-400'
                      } focus:border-transparent`}
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Requirements */}
                {password && (
                  <div className="bg-white/5 rounded-lg p-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Password Requirements:</h4>
                    <div className={`flex items-center text-sm ${passwordValidation.minLength ? 'text-green-400' : 'text-gray-400'}`}>
                      <span className="mr-2">{passwordValidation.minLength ? '✓' : '○'}</span>
                      At least 6 characters
                    </div>
                    <div className={`flex items-center text-sm ${passwordValidation.uppercase ? 'text-green-400' : 'text-gray-400'}`}>
                      <span className="mr-2">{passwordValidation.uppercase ? '✓' : '○'}</span>
                      One uppercase letter
                    </div>
                    <div className={`flex items-center text-sm ${passwordValidation.lowercase ? 'text-green-400' : 'text-gray-400'}`}>
                      <span className="mr-2">{passwordValidation.lowercase ? '✓' : '○'}</span>
                      One lowercase letter
                    </div>
                    <div className={`flex items-center text-sm ${passwordValidation.number ? 'text-green-400' : 'text-gray-400'}`}>
                      <span className="mr-2">{passwordValidation.number ? '✓' : '○'}</span>
                      One number
                    </div>
                  </div>
                )}

                {/* Password Match Warning */}
                {confirmPassword && !passwordsMatch && (
                  <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-3">
                    <p className="text-red-400 text-sm">Passwords do not match</p>
                  </div>
                )}

                {/* Degree and Batch Year Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., B.Tech, M.Tech"
                      value={degree}
                      onChange={(e) => setdegree(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Batch Year
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 2024"
                      value={batchYear}
                      onChange={(e) => setbatchYear(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Create Account
                </button>
              </form>
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

export default Signup;