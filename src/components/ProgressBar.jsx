import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center ml-8 justify-center ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
          1
        </div>
        <div className={`flex-1 h-1 ${step === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      </div>
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center ml-8 justify-center ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
          2
        </div>
        <div className={`flex-1 h-1 ${step === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      </div>
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center ml-8 justify-center ${step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
          3
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
