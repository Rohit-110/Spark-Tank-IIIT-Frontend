import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Context, server } from '../index.js';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [studentId, setstudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [name, setname] = useState('');
  const [isAlumni, setisAlumni] = useState('');
  const [mobile, setmobile] = useState('');
  const [degree, setdegree] = useState('');
  const [batchYear, setbatchYear] = useState('');
  const [resumeLink, setresumeLink] = useState('');
  const [photo, setphoto] = useState('');

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const { checkemail, setCheckemail } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(`${server}/student/new`, {
        email, password, confirmPassword, studentId, isAlumni, mobile, degree, batchYear, resumeLink
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success("Logged In Successfully");
      setIsAuthenticated(true);
      if (isAlumni === "true") window.location.href = '/alumHome';
      else window.location.href = '/home';
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };


  return (
    <div >
      <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center bg-dark">
        {/* Left Side Content */}
        <div className="mb-20 md:w-1/2 p-8 flex flex-col justify-center items-center">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png" alt="IIITA Hub Background" className="mb-8 rounded-lg shadow-lg" style={{ maxWidth: '400px' }} />
          <h1 className="text-4xl font-bold text-white text-center mb-4 font-mono">Hi, IIITA E-Cell Welcomes You</h1>
          <p className="text-2xl text-white text-center mb-8 font-mono tracking-widest">Idea, Implement, Influence</p>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="mb-2.5 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                < path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
            </svg>
              <p className="text-white font-mono tracking-widest">
                  Website for Entrepreneurs
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-2.5 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                < path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
              </svg>
              <p className="text-white font-mono tracking-widest">
                Keep the Ideas Flowing, Keep the Innovation Growing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="mr-12 mt-10 mb-20 max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-md">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-800">Create an account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Or{' '}
              <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700">
                <Link style={{ "textDecoration": "none" }} to="/login">login to your account</Link>
              </button>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={(e)=>{setEmail(e.target.value);setCheckemail(e.target.value)}}
                />
            </div>
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
            
            <div className="flex space-x-4">
              {/* Phone Number Input */}
              <div className="w-1/2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
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

              {/* Alumni Select Input */}
              <div className="w-1/2">
                <label htmlFor="isAlumni" className="block text-sm font-medium text-gray-700">
                  Are you an alumni?
                </label>
                <select
                  id="isAlumni"
                  name="isAlumni"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={isAlumni}
                  onChange={(e) => { setisAlumni(e.target.value) }}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
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
