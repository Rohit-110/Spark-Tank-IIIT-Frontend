import React from 'react'
import Navbar from '../components/Navbar'
import { Context } from '..';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Discuss = () => {
    const {isAuthenticated, setIsAuthenticated}= useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/');
      }
    }, [isAuthenticated, navigate]);
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