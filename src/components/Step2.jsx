import React from 'react';

const Step2 = ({ nextStep, prevStep, handleInputChange, formData }) => {
  return (
    <div className=" flex flex-col items-center bg-slate-700  text-white mx-72 h-full p-4 pt-16 pb-28 rounded-3xl">
      <h2 className="text-2xl mb-4">Step 2: Startup Details</h2>
      <div className=' flex flex-row'>
            <div className="mb-8 mr-4">
                <label className="block mb-2">Idea Subject</label>
                <input name=' ideaSubject' type="text" value={formData.ideaSubject} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
            </div>
            <div className="mb-8 ml-4">
                <label className="block mb-2">Market Size</label>
                <input name='marketSize' type="text" value={formData.marketSize} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded" />
            </div>
        </div>
      <div className=' flex flex-row'>
            <div className="mb-8 mr-4">
                <label className="block mb-2">Unique Selling Proposition</label>
                <input name='uso' type="text" value={formData.uso} onChange={handleInputChange()} className="w-full p-2  text-black   border border-gray-300 rounded" />
            </div>
            <div className="mb-8 ml-4">
                <label className="block mb-2">Target Market</label>
                <input name=' targetMarket' type="text"  value={formData.targetMarket} onChange={handleInputChange()} className="w-full p-2  text-black   border border-gray-300 rounded" />
            </div>
      </div>
      <div className=' flex flex-row'>
            <div className="mb-8 mr-4">
                <label className="block mb-2">Detailed Description</label>
                <textarea  name='detailedDescription' value={formData.detailedDescription} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded"></textarea>           
            </div>
            <div className="mb-8 ml-4">
                <label className="block mb-2">Marketing Plan</label>
                <textarea name='marketingPlan' value={formData.marketingPlan} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded"></textarea>
            </div>
      </div>
      <div className=' flex flex-row'>
            <div className="mb-8 mr-4">
                <label className="block mb-2">Potential Risks</label>
                <textarea name='potentialRisks' value={formData.potentialRisks} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded"></textarea>
            </div>
            <div className="mb-8 ml-4">
                <label className="block mb-2">Sales Strategy</label>
                <textarea name='salesStrategy' value={formData.salesStrategy} onChange={handleInputChange()}  className="w-full p-2  text-black   border border-gray-300 rounded"></textarea>
            </div>       
      </div>
        <div className="flex flex-row justify-evenly ">
          <button onClick={prevStep} className="bg-gray-500 hover:bg-gray-400  text-white px-4 mx-6  py-2 rounded">
            Back
          </button>
          <button onClick={nextStep} className="bg-blue-500  hover:bg-blue-700 text-white px-4 mx-6 py-2 rounded">
            Next
          </button>
        </div>
      </div>
  );
};

export default Step2;
