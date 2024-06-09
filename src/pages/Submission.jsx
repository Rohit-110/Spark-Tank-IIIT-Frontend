import React from 'react'
import Card from '../components/Card'
import DetailedCard from '../components/DetailedCard'
import { useState } from 'react'

const Submission = () => {
const [showCard, setShowCard]=useState(false);
const handleOnClose=()=>{setShowCard(false)};
  return (
    <>
        <button onClick={()=>{setShowCard(true)}}>
            <Card team={'checkmates'} status={'Not Verified'} org={'Google'} prof={'Abdulla'} />
        </button>
        <DetailedCard name={'Rohit'}  enrollmentno ={'IIT2022019'} batch={'2022'} mobile ={'9779797979'} email={'hi@gmail.com'} aadhar={'645798464654'} idea={'Nothing'}description={'Wide'} marketsize={'Small'} verified={'No'} visible={showCard} onClose={handleOnClose} />
    </>
  )
}

export default Submission