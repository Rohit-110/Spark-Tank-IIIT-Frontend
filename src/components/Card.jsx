import React from 'react';
import '../index.css';

const Card = ({ teamname, status, idea, investor, isverified }) => {
  return (
    <>
      <div className='flex flex-col justify-evenly bg-slate-200 rounded-xl border-x-yellow-800 p-4' style={{ width: '48rem' }}>
        <div className='flex flex-row justify-between m-1'>
          <div className='text-2xl p-2'>
            Team Name :<span className='text-blue-400'> {teamname}</span>
          </div>
        </div>
        <div className='flex flex-row justify-between m-1'>
          <div className='text-2xl p-2'>
            Idea :<span className='text-blue-400'> {idea}</span>
          </div>
        </div>
        <div className='flex flex-row justify-between m-1'>
          <div className='text-2xl p-2'>
            Status: <span className='text-blue-400'> {status}</span>
          </div>
        </div>
        <div className='flex flex-row justify-between m-1'>
          <div className='text-2xl p-2'>
            Investor :<span className='text-blue-400'> {investor}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
