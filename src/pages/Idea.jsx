import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { Context } from '..';

const Idea = () => {
  const { isAuthenticated } = useContext(Context);
  if (!isAuthenticated) {
    window.location.href = '/';
  }

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
        <Navbar />
        <div className="mt-20 px-6 sm:px-10 lg:px-28 py-10 font-sans text-white">
            <div className="space-y-8">
            <section className="bg-slate-700 bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 border border-slate-600 transition hover:shadow-2xl">
                <h2 className="text-4xl font-extrabold text-blue-300 mb-4 border-b border-slate-500 pb-2">Procedures</h2>

                <div className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-200 mb-2">Form Submission</h3>
                <ul className="list-disc ml-6 text-lg text-slate-200 space-y-1">
                    <li>
                    Entrepreneurs must fill out a comprehensive form with all necessary details about their business idea. This includes business name, description, target market, financial projections, and other relevant data.
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-blue-200 mb-2">Payment</h3>
                <ul className="list-disc ml-6 text-lg text-slate-200 space-y-1">
                    <li>
                    After completing the form, a fee of ₹200 is required to submit the application. Payment can be made through credit/debit cards, UPI, or digital wallets.
                    </li>
                </ul>
                </div>
            </section>

            <section className="bg-slate-700 bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 border border-slate-600 transition hover:shadow-2xl">
                <h2 className="text-4xl font-extrabold text-blue-300 mb-4 border-b border-slate-500 pb-2">Terms & Conditions</h2>

                <div className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-200 mb-2">Eligibility</h3>
                <ul className="list-disc ml-6 text-lg text-slate-200 space-y-1">
                    <li>Only individuals or groups with a legitimate business idea are eligible to submit their application.</li>
                    <li>The applicant must provide accurate and complete information.</li>
                </ul>
                </div>

                <div className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-200 mb-2">Payment and Submission</h3>
                <ul className="list-disc ml-6 text-lg text-slate-200 space-y-1">
                    <li>A non-refundable fee of ₹200 must be paid to submit the application form.</li>
                    <li>Applications without successful payment will not be considered.</li>
                </ul>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-blue-200 mb-2">Confidentiality</h3>
                <ul className="list-disc ml-6 text-lg text-slate-200 space-y-1">
                    <li>All submitted business ideas are treated with confidentiality.</li>
                    <li>Personal and business information will not be shared without consent.</li>
                </ul>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-4xl font-extrabold text-blue-300 mb-6">Submit Form Here:</h2>
                <Link to="/submitform">
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                    backgroundColor: '#3b82f6',
                    '&:hover': {
                        backgroundColor: '#2563eb',
                    },
                    fontSize: '1rem',
                    padding: '0.6rem 1.5rem',
                    }}
                >
                    Submit Form
                </Button>
                </Link>
            </section>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Idea;
