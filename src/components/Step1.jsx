import React from 'react';

const Step1 = ({ nextStep, handleInputChange, formData }) => {
  return (
    <div className='  flex flex-col items-center bg-slate-700  text-white mx-72 h-full p-4 pt-16 pb-28 rounded-3xl'>
      <h2 className="text-2xl mb-4">Step 1: Personal Details</h2>
      <div className=' flex flex-row'>
        <div className="mb-8 mr-4">
            <label className="block mb-2">Name</label>
            <input name='name' type="text" value={formData.name} onChange={handleInputChange()} className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
        <div className="mb-8 ml-4">
            <label className="block mb-2">Enrollment No</label>
            <input name='enrollmentNo' type="text" value={formData.enrollmentNo} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
      </div>
      <div className=' flex flex-row'>
        <div className="mb-8 mr-4">
            <label className="block mb-2">Batch</label>
            <input name='batch' type="text" value={formData.batch} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
        <div className="mb-8 ml-4">
            <label className="block mb-2">Mobile No</label>
            <input name='mobileNo' type="number" value={formData.mobileNo} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
      </div>
      <div className=' flex flex-row'>
        <div className="mb-8 mr-4">
            <label className="block mb-2">Email ID</label>
            <input name='emailId' type="email" value={formData.emailId} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
        <div className="mb-8 ml-4">
            <label className="block mb-2">Aadhar No</label>
            <input name='aadharNo' type="text" value={formData.aadharNo} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
      </div>
      <div className=' flex flex-row'>
        <div className="mb-8 mr-4">
            <label className="block mb-2">Team Name</label>
            <input name='teamname' type="text" value={formData.teamname} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
        <div className="mb-8 ml-4">
            <label className="block mb-2">Members</label>
            <input type="text"  className="w-full p-2  text-black   border border-gray-300 rounded" />
        </div>
      </div>
      <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Step1;
