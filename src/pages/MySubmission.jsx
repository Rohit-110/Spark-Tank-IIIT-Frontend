import React from 'react'
import DetailedCard2 from '../components/DetailedCard2'
import Card from '../components/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import {server} from '../index.js'
import { useContext } from 'react'
import { Context } from '../index.js'

const MySubmission = () => {
    const {isAuthenticated} = useContext(Context);
    if(!isAuthenticated){        
        window.location.href = '/';
    }
  

    const [showCard, setShowCard]=useState(true);
    function handleOnClose(){
        setShowCard(true);
    }
    
const [mytasks,setmyTasks]=useState([]);

    useEffect(()=>{
            axios.get(`${server}/form/mysubmission`,{
                withCredentials: true,
            }).then(res=>{
                setmyTasks(res.data.entrepreneur);
                console.log(res.data.entrepreneur);
            }).catch(e=>{
                toast.error("Eror");
            })
    },[]);
    

  return (
    <>  
        <Navbar/>
        <div className='mt-32 mb-8'>
            <div className='text-3xl font-semibold flex font-mono tracking-widest justify-center'>There are total {mytasks.length} submission</div>
           {
            mytasks.map((task, index) => (
                <div className='mt-28 flex justify-center'>              
                    <DetailedCard2 name={task.name}  enrollmentno ={task.enrollmentno} batch={task.enrollmentNo} mobile ={task.mobileNo} email={task.emailId} aadhar={task.aadharNo} teamname={task.teamname} idea={task.ideaSubject} description={task.detailedDescription} marketsize={task.marketSize} verified={task.verified} visible={showCard} onClose={handleOnClose} />
                </div>
            ))
        } 
        </div>
    </>
  )
}

export default MySubmission