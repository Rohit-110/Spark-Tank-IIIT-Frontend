import React from 'react'
import DetailedCard from '../components/DetailedCard'
import Card from '../components/Card'

const MySubmission = () => {
  return (
    <>
        <Card/>
        <DetailedCard name={'Rohit'}  enrollmentno ={'IIT2022019'} batch={'2022'} mobile ={'9779797979'} email={'hi@gmail.com'} aadhar={'645798464654'} idea={'Nothing'} marketsize={'Small'} verified={'No'} />
    </>
  )
}

export default MySubmission