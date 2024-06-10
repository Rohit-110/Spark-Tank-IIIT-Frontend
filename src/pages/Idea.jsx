import React from 'react'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Idea = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-24 mx-5 font-mono tracking-widest'>
        <div className='text-3xl font-bold'>Procedures</div>
        <div className=' mt-2'>
            <span className='text-xl font-semibold ml-5'>Form Submission : </span>
            <ul className="list-disc ml-10">
                <li>Entrepreneurs must fill out a comprehensive form with all necessary details about their business idea. This includes information such as business name, description, target market, financial projections, and any other relevant data.</li>
            </ul>
        </div>
        <div>
            <span className='text-xl font-semibold ml-5'>Payment:</span>  
            <ul className="list-disc ml-10">
                <li>After completing the form, a fee of ₹200 is required to submit the application. Payment can be made through various online payment methods like credit/debit cards, UPI, or digital wallets.</li>
            </ul>
        </div>
        <div className='text-3xl font-bold mt-3'>Terms & Conditions</div>
        <div className='mt-2'>
            <span className='text-xl font-semibold ml-5 '>Eligibility:</span>
            <ul className="list-disc ml-10">
                <li>Only individuals or groups with a legitimate business idea are eligible to submit their application.</li>
                <li>The applicant must provide accurate and complete information.</li>
            </ul>
        </div>
        <div>
            <span className='text-xl font-semibold ml-5'>Payment and Submission:</span>
            <ul className="list-disc ml-10">
                <li>A non-refundable fee of ₹200 must be paid to submit the application form.</li>
                <li>Applications without successful payment will not be considered.</li>
            </ul>
        </div>
        <div>
            <span className='text-xl font-semibold ml-5'>Confidentiality:</span>
            <ul className="list-disc ml-10">
                <li>The website ensures that all submitted business ideas are treated with confidentiality.</li>
                <li>Personal information and business details will not be shared with third parties without the applicant's consent.</li>
            </ul>
        </div>
        <div className='flex justify-center items-center mt-2'>
            <Link to="/submitform"><Button variant="contained" endIcon={<SendIcon />}>Submit Form</Button></Link>
        </div>
        
    </div>
    </>
  )
}

export default Idea