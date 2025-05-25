import React, { useState } from 'react';

const DetailedCard = ({ name, enrollmentno, batch, mobile, email, aadhar, teamname, description, idea, marketsize, verified, visible, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  
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
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-start p-4 z-50 overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8">
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 border border-white/20"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${verified ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'} border backdrop-blur-sm`}>
              <div className={`w-2 h-2 rounded-full ${getStatusColor()} animate-pulse`}></div>
              <span className={`text-sm font-medium ${getStatusTextColor()}`}>
                {verified ? 'Verified' : 'Pending'}
              </span>
            </div>
          </div>

          <div className="relative z-10 p-6 pt-16">
            {/* Header Section */}
            <div className="mb-6">
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
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Enrollment Number</label>
                    <p className="text-white font-medium mt-1">{enrollmentno || 'N/A'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Batch</label>
                    <p className="text-white font-medium mt-1">{batch || 'N/A'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Mobile</label>
                    <p className="text-white font-medium mt-1">{mobile || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
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
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Startup Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
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
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-purple-900">
        <button 
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg" 
          onClick={() => setShowModal(true)}
        >
          Open DetailedCard
        </button>
      </div>
      <DetailedCard 
        name="John Doe"
        enrollmentno="2021001"
        batch="2021-2025"
        mobile="+91 9876543210"
        email="john.doe@example.com"
        aadhar="1234-5678-9012"
        teamname="Innovation Squad"
        description="A revolutionary startup idea that aims to transform the way people interact with technology through innovative solutions and user-centric design approaches."
        idea="AI-Powered Learning Platform"
        marketsize="$50 Billion"
        verified={true}
        onClose={() => setShowModal(false)} 
        visible={showModal} 
      />
    </>
  );
};

export default DetailedCard;