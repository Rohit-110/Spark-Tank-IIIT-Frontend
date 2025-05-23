import React from 'react';

const Step1 = ({ nextStep, handleInputChange, formData }) => {
  return (
    <div className="animate-fade-in-up transition-all duration-500 ease-in-out flex flex-col items-center bg-gradient-to-br from-slate-800 to-slate-900 text-white mx-auto mt-16 mb-10 w-[80%] p-10 rounded-3xl shadow-2xl backdrop-blur-md">
      <h2 className="text-3xl font-bold mb-8 text-blue-300">Step 1: Personal Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div>
          <label className="block mb-2 text-blue-200">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange()}
            placeholder="Enter your name"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Enrollment No</label>
          <input
            name="enrollmentNo"
            type="text"
            value={formData.enrollmentNo}
            onChange={handleInputChange()}
            placeholder="Enter enrollment number"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Batch</label>
          <input
            name="batch"
            type="text"
            value={formData.batch}
            onChange={handleInputChange()}
            placeholder="Enter batch year"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Mobile No</label>
          <input
            name="mobileNo"
            type="tel"
            value={formData.mobileNo}
            onChange={handleInputChange()}
            placeholder="Enter mobile number"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Email ID</label>
          <input
            name="emailId"
            type="email"
            value={formData.emailId}
            onChange={handleInputChange()}
            placeholder="Enter email"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Aadhar No</label>
          <input
            name="aadharNo"
            type="text"
            value={formData.aadharNo}
            onChange={handleInputChange()}
            placeholder="Enter Aadhar number"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Team Name</label>
          <input
            name="teamname"
            type="text"
            value={formData.teamname}
            onChange={handleInputChange()}
            placeholder="Enter your team name"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200">Members</label>
          <input
            name="members"
            type="text"
            placeholder="Enter team members"
            className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      </div>

      <button
        onClick={nextStep}
        className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl"
      >
        Next Step →
      </button>
    </div>
  );
};

export default Step1;
