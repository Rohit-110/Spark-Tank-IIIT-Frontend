import React from 'react';

const Card = ({ teamname, status, idea, investor, isverified }) => {
  const getStatusColor = () => {
    return status ? 'bg-green-500' : 'bg-red-500';
  };

  const getStatusTextColor = () => {
    return status ? 'text-green-400' : 'text-red-400';
  };

  const truncateText = (text, maxLength) => {
    if (!text) return 'N/A';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02]">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${status ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'} border backdrop-blur-sm`}>
            <div className={`w-2 h-2 rounded-full ${getStatusColor()} animate-pulse`}></div>
            <span className={`text-xs font-medium ${getStatusTextColor()}`}>
              {status ? 'Verified' : 'Pending'}
            </span>
          </div>
        </div>

        <div className="relative z-10 p-6">
          {/* Header Section with Team Name */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">{teamname || 'N/A'}</h2>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          </div>

          {/* Content Grid */}
          <div className="space-y-4">
            {/* Idea Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <label className="text-sm text-gray-400 uppercase tracking-wide font-medium">Startup Idea</label>
              </div>
              <p className="text-white font-medium text-lg leading-relaxed">{truncateText(idea, 100)}</p>
            </div>

            {/* Investor Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <label className="text-sm text-gray-400 uppercase tracking-wide font-medium">Investor</label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <p className="text-white font-medium">{investor || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Details</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo App component to show the card
const App = () => {
  return (
    <div className=" bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center ">
      <Card 
        teamname="Innovation Squad"
        status={true}
        idea="AI-Powered Learning Platform that revolutionizes education through personalized learning experiences"
        investor="TechVentures Capital"
        isverified={true}
      />
    </div>
  );
};

export default Card;