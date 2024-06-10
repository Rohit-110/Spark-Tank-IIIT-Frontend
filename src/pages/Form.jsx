import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import ProgressBar from '../components/ProgressBar';
import Navbar from '../components/Navbar';

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initial state with all the required fields
    name: '',    
    enrollmentNo: '',
    batch: '',
    mobileNo: '',
    emailId: '',
    age: '',
    teamname: '',
    aadharNo: '',
    ideaSubject: '',
    detailedDescription: '',
    marketSize: '',
    uso:'',
    targetMarket: '',
    marketingPlan: '',
    potentialRisks: '',
    salesStrategy: '',
    amountRequest: '',
    termsAccepted: false,
    password: ''
  });

  const handleInputChange = (input) => (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e);
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep}  handleInputChange={handleInputChange} formData={formData} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData}  />;
      case 3:
        return <Step3 prevStep={prevStep} handleInputChange={handleInputChange} formData={formData}  />;
      default:
        return <Step1 nextStep={nextStep} handleInputChange={handleInputChange} formData={formData}  />;
    }
  };

  return (
    <>
        <Navbar />
        <div className="container mt-20 mx-auto p-4">
        <ProgressBar step={step} />
        {renderStep()}
        </div>
    </>
  );
}

export default Form;
