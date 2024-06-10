import React, { useState } from 'react';

const DetailedCard = ({ name, enrollmentno, batch, mobile, email, aadhar,teamname, description, idea, marketsize, verified, visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-orange-200 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="  bg-white shadow-lg rounded-lg border-2 border-black overflow-hidden">
        <div className='flex flex-col'>
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold mb-4 text-orange-700">Personal Details</h2>
            <div className="flex flex-row justify-between text-black">
              <div className='items-start'>
                <div className="mb-2 mx-2">
                  <span className="font-bold">Name:</span><span className="text-blue-500 m-2"> {name}</span>
                </div>
                <div className="mb-2 mx-2">
                  <span className="font-bold">Enrollment No:</span><span className="text-blue-500 m-2">{enrollmentno}</span>
                </div>
                <div className="mb-2 mx-2">
                  <span className="font-bold">Batch:</span> <span className="text-blue-500 m-2">{batch}</span>
                </div>
              </div>
              <div className='items-end'>
                <div className="mb-2 mx-2">
                  <span className="font-bold">Mobile No:</span> <span className="text-blue-500 m-2">{mobile}</span>
                </div>
                <div className="mb-2 mx-2">
                  <span className="font-bold">Email:</span><span className="text-blue-500 m-2"> {email}</span>
                </div>
                <div className="mb-2 mx-2">
                  <span className="font-bold">Aadhar No:</span><span className="text-blue-500 m-2"> {aadhar}</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-black" />
          <div className="px-6 py-4 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-orange-700">Startup Details</h2>
            <div className="text-black">
              <div className="mb-2 mx-2">
                <span className="font-bold">Team Name:</span><span className="text-blue-500 m-2">{teamname}</span>
              </div>
              <div className="mb-2 mx-2">
                <span className="font-bold">Idea:</span><span className="text-blue-500 m-2">{idea}</span>
              </div>
              <div className="mb-2 mx-2">
                <span className="font-bold">Description:</span><span className="text-blue-500 m-2">{description}</span>
              </div>
            </div>
            <div className='flex flex-row justify-between text-black'>
              <div className="mb-2 mx-2">
                <span className="font-bold">Market Size:</span> <span className="text-blue-500 m-2">{marketsize}</span>
              </div>
              <div className="mb-2 mx-2">
                <span className="font-bold">Verified:</span><span className="text-blue-500 m-2">{verified}</span>
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
      <div className="h-full flex items-center justify-center">
        <button className="bg-blue-500 p-2 rounded text-white" onClick={() => setShowModal(true)}>Open</button>
      </div>
      <DetailedCard onClose={() => setShowModal(false)} visible={showModal} />
    </>
  );
};

export default DetailedCard;
