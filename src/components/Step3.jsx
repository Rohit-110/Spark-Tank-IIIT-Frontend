import React, { useState } from "react";
import axios from "axios";
import { server } from "../index";
import { motion } from "framer-motion";

const Field = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block mb-2 text-blue-200">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>
);

const Step3 = ({ prevStep, formData, handleInputChange }) => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [amount, setAmount] = useState(0);

  const checkoutHandler = async () => {
    if (!termsChecked) return;
    try {
      const { data: { key } } = await axios.get(`${server}/user/getkey`, { withCredentials: true });
      const { data: { orders } } = await axios.post(`${server}/user/checkout`, { amount }, { withCredentials: true });

      const options = {
        key,
        amount: orders.amount,
        currency: "INR",
        name: "IIIT A",
        description: "Test Transaction",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png",
        order_id: orders.id,
        callback_url: `${server}/user/paymentverification`,
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#3399cc" },
      };
      const razor = new window.Razorpay(options);
      razor.open();

      await axios.post(`${server}/form/submitform`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="animate-fade-in-up transition-all duration-500 ease-in-out flex flex-col items-center bg-gradient-to-br from-slate-800 to-slate-900 text-white mx-auto mt-16 mb-10 w-[80%] p-10 rounded-3xl shadow-2xl backdrop-blur-md"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-300">Step 3: Payment & Confirmation</h2>

      <div className="w-full max-w-lg space-y-8">
        <Field
          label="Amount Requested (₹)"
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div>
          <label className="block mb-2 text-blue-200">Terms & Conditions</label>
          <div className="flex items-center gap-2 bg-slate-700/40 p-4 rounded-lg">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span>
              I agree to the <a href="/terms" className="text-blue-400 underline">terms and conditions</a>
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-8 pt-4">
          <button
            onClick={prevStep}
            className="bg-gray-500 hover:bg-gray-400 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl"
          >
            ← Back
          </button>
          <button
            onClick={checkoutHandler}
            disabled={!termsChecked || amount <= 0}
            className={`px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition hover:shadow-xl ${
              termsChecked && amount > 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300 cursor-not-allowed"
            }`}
          >
            {termsChecked && amount > 0 ? "Proceed to Pay →" : "Agree Terms"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Step3;