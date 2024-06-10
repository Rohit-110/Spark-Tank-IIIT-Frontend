import React from 'react'
import Card from '../components/Card'
import DetailedCard from '../components/DetailedCard'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {server} from '../index.js'

const Submission = () => {
const [showCard, setShowCard]=useState(true);
const handleOnClose=()=>{setShowCard(false)};
const [tasks,setTasks]=useState([]);

    useEffect(()=>{
            axios.get(`${server}/form/submission`,{
                withCredentials: true,
            }).then(res=>{
                setTasks(res.data.entrepreneur);
                console.log(res.data.entrepreneur);
            }).catch(e=>{
                toast.error("Eror");
            })
    },[]);
  


  return (
    <>
        <Navbar/>
        <div className='mt-32'>
            <div className='text-3xl font-semibold flex font-mono tracking-widest justify-center'>There are total {tasks.length} submission</div>
            {
                tasks.map((task, index) => (
                    <div className='mt-28 flex justify-center'>
                        <button onClick={()=>{setShowCard(true)}}>
                            <Card teamname={task.teamname} status={task.status} investor={task.investor} prof={task.idea} />
                        </button>                
                        <DetailedCard name={task.name}  enrollmentno ={task.enrollmentno} batch={task.enrollmentNo} mobile ={task.mobileNo} email={task.emailId} aadhar={task.aadharNo} teamname={task.teamname} idea={task.idea} description={task.description} marketsize={task.marketsize} verified={(task.verified) ? 'Verified' :'Not Verifed'} visible={showCard} onClose={handleOnClose} />
                        </div>
                ))
            } 
        </div>
    </>
  )
}

export default Submission