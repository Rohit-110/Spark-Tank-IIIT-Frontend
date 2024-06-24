import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react';
import { Context } from '..';
const Discuss = () => {
  const {isAuthenticated} = useContext(Context);
  if(!isAuthenticated){        
      window.location.href = '/';
  }
  return (
    <>
    <Navbar/>
    <div className='mt-32'>
            <div className='text-3xl font-semibold flex font-mono tracking-widest justify-center'>There are total no Discussion</div>
    </div>
    </>
  )
}

export default Discuss