import React from 'react';

const DetailedCard = ({ name, enrollmentno, batch, mobile, email, aadhar,description, idea, marketsize, verified }) => {
  return (
    <div className="fixed inset-0   bg-white shadow-lg   inset-0  bg-opacity-30 background-blur-sm flex justify-center items-center  ">
        <div className='flex flex-col '>
            <div className="px-6 py-4">
                <h2 className="text-3xl  font-bold mb-4 text-orange-700 ">Personal Details</h2>
                    <div className="flex flex-row justify-between">
                        <div className=' items-start  '>
                            <div className="mb-2">
                            <span className="font-semibold">Name:</span> {name}
                            </div>
                            <div className="mb-2">
                            <span className="font-semibold">Enrollment No:</span> {enrollmentno}
                            </div>
                            <div className="mb-2">
                            <span className="font-semibold">Batch:</span> {batch}
                            </div>
                        </div>
                        <div className=" items-end">
                            <div className="mb-2">
                            <span className="font-semibold">Mobile No:</span> {mobile}
                            </div>
                            <div className="mb-2">
                            <span className="font-semibold">Email:</span> {email}
                            </div>
                            <div className="mb-2">
                            <span className="font-semibold">Aadhar No:</span> {aadhar}
                            </div>
                        </div>
                    </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200">
                <h2 className="text-3xl font-bold mb-4 text-orange-700">Startup Details</h2>
                <div>
                    <div className="mb-2">
                        <span className="font-semibold">Idea:</span> {idea}
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Description:</span> {idea}
                    </div>
                </div>
                <div className='flex flex-row justify-between '>
                    <div className="mb-2">
                        <span className="font-semibold">Market Size:</span> {marketsize}
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Verified:</span> {verified}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DetailedCard;
