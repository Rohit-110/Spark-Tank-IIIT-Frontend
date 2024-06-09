import React from 'react'
import DetailedCard from '../components/DetailedCard'
import Card from '../components/Card'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const MySubmission = () => {

    const [showCard, setShowCard]=useState(true);
    function handleOnClose(){
        setShowCard(true);
    }
  return (
    <>  
        <Navbar/>
        <DetailedCard name={'Rohit'}  enrollmentno ={'IIT2022019'} batch={'2022'} mobile ={'9779797979'} email={'hi@gmail.com'} aadhar={'645798464654'} idea={'Nothing'} description={'Wide'} marketsize={'Small'} verified={'No'} visible={showCard} onClose={handleOnClose} />
    </>
  )
}

export default MySubmission