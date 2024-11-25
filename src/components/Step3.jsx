import React, { useState } from 'react';
import axios from 'axios'
import {server} from '../index'

const Step3 = ({ prevStep, handleInputChange, formData, handleSubmit }) => {
  const [termsChecked, setTermsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

 
  const checkoutHandler = async (amount) => {
    console.log(formData);
    try {
      const { data: { key } } = await axios.get(`${server}/user/getkey`, { withCredentials: true });
      const { data: { orders } } = await axios.post(`${server}/user/checkout`, { amount }, { withCredentials: true });
  
      const options = {
        "key": key,
        "amount": orders.amount,
        "currency": "INR",
        "name": "IIIT A",
        "description": "Test Transaction",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png",
        "order_id": orders.id,
        "callback_url": `${server}/user/paymentverification`,
        "prefill": {
          "name": " ",
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
      try {
        const { data } = await axios.post(
          `${server}/form/submitform`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true, 
          }
        );
        console.log("Form data submitted successfully:", data);
      } catch (error) {
        console.log("Error submitting form data:", error.response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  


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
            <input onClick={()=>handleCheckboxChange()}  type="checkbox" className="mr-2" />
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

export default Step3;
