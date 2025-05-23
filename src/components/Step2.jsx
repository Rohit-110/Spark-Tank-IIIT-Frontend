import React from "react";
import { motion } from "framer-motion";

const Step2 = ({ nextStep, prevStep, handleInputChange, formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="animate-fade-in-up transition-all duration-500 ease-in-out flex flex-col items-center bg-gradient-to-br from-slate-800 to-slate-900 text-white mx-auto mt-16 mb-10 w-[80%] p-10 rounded-3xl shadow-2xl backdrop-blur-md"
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-300">
        Step&nbsp;2:&nbsp;Startup&nbsp;Details
      </h2>

      {/* ---- INPUT GRID ---- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Field
          label="Idea"
          name="ideaSubject"
          value={formData.ideaSubject || ""}
          onChange={handleInputChange()}
        />
        <Field
          label="Market Size"
          name="marketSize"
          value={formData.marketSize || ""}
          onChange={handleInputChange()}
        />
        <Field
          label="Investors"
          name="uso"
          value={formData.uso || ""}
          onChange={handleInputChange()}
        />
        <Field
          label="Target Market"
          name="targetMarket"
          value={formData.targetMarket || ""}
          onChange={handleInputChange()}
        />
        <Field
          label="Detailed Description"
          name="detailedDescription"
          value={formData.detailedDescription || ""}
          onChange={handleInputChange()}
          textarea
        />
        <Field
          label="Marketing Plan"
          name="marketingPlan"
          value={formData.marketingPlan || ""}
          onChange={handleInputChange()}
          textarea
        />
        <Field
          label="Potential Risks"
          name="potentialRisks"
          value={formData.potentialRisks || ""}
          onChange={handleInputChange()}
          textarea
        />
        <Field
          label="Sales Strategy"
          name="salesStrategy"
          value={formData.salesStrategy || ""}
          onChange={handleInputChange()}
          textarea
        />
      </div>

      {/* ---- NAV BUTTONS ---- */}
      <div className="mt-10 flex justify-between w-full">
        <button
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-600 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl"
        >
          Next Step →
        </button>
      </div>
    </motion.div>
  );
};

/* ---- REUSABLE FIELD COMPONENT ---- */
const Field = ({ label, name, type = "text", value, onChange, textarea }) => (
  <div>
    <label className="block mb-2 text-blue-200">{label}</label>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        rows={4}
        className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    ) : (
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full p-3 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    )}
  </div>
);

export default Step2;
