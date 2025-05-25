import React, { useState } from 'react';
import toast from 'react-hot-toast';

const DetailedCard2 = ({ name, enrollmentno, batch, mobile, email, aadhar, teamname, description, idea, marketsize, verified, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = () => {
    return verified ? 'bg-green-500' : 'bg-red-500';
  };

  const getStatusTextColor = () => {
    return verified ? 'text-green-400' : 'text-red-400';
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${verified ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'} border backdrop-blur-sm`}>
              <div className={`w-2 h-2 rounded-full ${getStatusColor()} animate-pulse`}></div>
              <span className={`text-sm font-medium ${getStatusTextColor()}`}>
                {verified ? 'Verified' : 'Pending'}
              </span>
            </div>
          </div>

          <div className="relative z-10 p-8">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{name || 'N/A'}</h2>
                  <p className="text-purple-300 text-sm">Team: {teamname || 'N/A'}</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>

            {/* Personal Details Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Enrollment Number</label>
                    <p className="text-white font-medium mt-1">{batch || 'N/A'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Mobile</label>
                    <p className="text-white font-medium mt-1">{mobile || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                    <p className="text-white font-medium mt-1 break-all">{email || 'N/A'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Aadhar Number</label>
                    <p className="text-white font-medium mt-1">{aadhar || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Startup Details Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Startup Details</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Idea Subject</label>
                  <p className="text-white font-medium mt-2 text-lg">{idea || 'N/A'}</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Description</label>
                    {description && description.length > 150 && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {description ? (isExpanded ? description : truncateText(description, 150)) : 'N/A'}
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Market Size</label>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                    <p className="text-white font-medium">{marketsize || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg" onClick={()=>{toast.error("Service Down! Site in development")}}>
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span>Edit Submission</span>
                </div>
              </button>
              
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg" onClick={()=>{toast.error("Service Down! Site in development")}}>
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.683 3 3 0 00-5.367 2.683zm0 9.316a3 3 0 105.367 2.683 3 3 0 00-5.367-2.683z" />
                  </svg>
                  <span>Share</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <DetailedCard2 />
    </>
  );
};

export default DetailedCard2;