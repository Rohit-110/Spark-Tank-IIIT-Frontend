import React, { useState } from 'react';
import axios from 'axios'

const Step2 = ({ nextStep, prevStep }) => {
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  const checkoutHandler= async (amount)=>{

    const {data : {key}} = await axios.get("http://localhost:4000/api/getkey");
    const {data : {orders}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
    })
    const options = {
        "key": key,
        "amount": orders.amount, 
        "currency": "INR",
        "name": "IIIT ALLAHABAD E-CELL",
        "description": "Test Transaction",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png",
        "order_id": orders.id, 
        "callback_url": "http://localhost:4000/api/paymentverification",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var razor = new window.Razorpay(options);
    razor.open();
}


  return (
    <div className=" flex flex-col items-center bg-slate-700  text-white mx-72 h-full p-4 pt-16 pb-28 rounded-3xl">
      <h2 className="text-2xl mb-4">Step 3: Final Details</h2>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Amount Requested(in Rs)</label>
          <input type="number" className="w-full p-2 border text-black border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Terms & Conditions</label>
          <div className="flex items-center">
            <input type="checkbox" checked={termsChecked} onChange={handleCheckboxChange} className="mr-2" />
            <span>
              I agree to the <a href="/terms" className="text-blue-500">terms and conditions</a>
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
          <button onClick={() => checkoutHandler(200)}  className="bg-blue-500 text-white px-4 py-2 rounded" disabled={!termsChecked}>
            { (termsChecked) ? `Proceed to Pay` : "Agree Terms"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
