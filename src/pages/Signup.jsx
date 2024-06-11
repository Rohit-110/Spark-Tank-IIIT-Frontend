import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Context, server } from '../index.js';
import { Link } from 'react-router-dom';
import img1 from '../assets/img3.jpg'


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

  const {  setIsAuthenticated } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(`${server}/user/new`, {
        email, password, name , studentId,  mobile, degree, batchYear}, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success("Logged In Successfully");
      setIsAuthenticated(true);
      window.location.href = '/home';
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };


  return (
    <div >
      <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center bg-dark bg-cover bg-center bg-no-repeat "  style={{ backgroundImage: `url(${img1})` }}>
        {/* Left Side Content */}
        

          <div className="mb-20 md:w-1/2 p-8 flex flex-col justify-center items-center mr-8">
            <h1 className="text-6xl font-bold text-white text-center mb-4 font-mono">SPARK TANK <br/>IIIT</h1>

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
        <div className="mr-12 mt-10 mb-20 max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-md  ">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-800">Create an account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">Or{' '}
                <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700">
                  <Link style={{ "textDecoration": "none" }} to="/login">login to your account</Link>
                </button>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-row">
                <div className="w">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={name}
                      onChange={(e) => { setname(e.target.value) }}
                    />
                  </div>
                <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                      Student ID
                    </label>
                    <input
                      id="studentId"
                      name="studentId"
                      type="text"
                      autoComplete="studentId"
                      required
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={studentId}
                      onChange={(e) => { setstudentId(e.target.value) }}
                    />
                  </div>
            </div>
            <div className="flex flex-row">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    onChange={(e)=>{setEmail(e.target.value);}}
                    />
                </div>
                <div className="flex space-x-4">
                {/* Phone Number Input */}
                <div className="w-1/2">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={mobile}
                    onChange={(e) => { setmobile(e.target.value) }}
                  />
                </div>
              </div>              
            </div>
            <div className="flex flex-row">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                    onChange={(e) => { setpassword(e.target.value) }}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={confirmPassword}
                    onChange={(e) => { setconfirmPassword(e.target.value) }}
                  />
                </div>
              </div>             
             
              <div>
                <div className="flex space-x-4">
                  {/* Degree Input */}
                  <div className="w-1/2">
                    <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                      Degree
                    </label>
                    <input
                      id="degree"
                      name="degree"
                      type="text"
                      autoComplete="degree"
                      required
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={degree}
                      onChange={(e) => { setdegree(e.target.value) }}
                    />
                  </div>

                  {/* Batch Year Input */}
                  <div className="w-1/2">
                    <label htmlFor="batchYear" className="block text-sm font-medium text-gray-700">
                      Batch Year
                    </label>
                    <input
                      id="batchYear"
                      name="batchYear"
                      type="text"
                      autoComplete="batch-year"
                      required
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={batchYear}
                      onChange={(e) => { setbatchYear(e.target.value) }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Signup;
