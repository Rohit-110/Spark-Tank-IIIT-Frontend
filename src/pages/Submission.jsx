import React from 'react'
import Card from '../components/Card'
import DetailedCard from '../components/DetailedCard'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {server} from '../index.js'
import { useContext } from 'react'
import { Context } from '../index.js'

const Submission = () => {
  const {isAuthenticated} = useContext(Context);
  if(!isAuthenticated){        
      window.location.href = '/';
  }
    const [showCard, setShowCard]=useState(false);
    const handleOnClose=()=>{setShowCard(false)};
    const [tasks,setTasks]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${server}/form/submission`, {
              withCredentials: true,
            });
            setTasks(data.entrepreneur);
            console.log("data ", data);
          } catch (e) {
            toast.error("Error");
            console.error("Error fetching data:", e);
          }
        };
    
        fetchData();
      }, []);
    
    


  return (
    <>
        <Navbar/>
        <div className='mt-32'>
            <div className='text-3xl font-semibold flex font-mono tracking-widest justify-center'>There are total {tasks.length} submission</div>
            {
                tasks.map((task, index) => (
                    <div className='mt-28 flex justify-center'>
                        <button onClick={()=>{setShowCard(true)}}>
                            <Card teamname={task.teamname} status={task.verified} investor={task.uso} idea={task.ideaSubject} />
                        </button>                
                        <DetailedCard name={task.name}  enrollmentno ={task.enrollmentNo} batch={task.batch} mobile ={task.mobileNo} email={task.emailId} aadhar={task.aadharNo} teamname={task.teamname} idea={task.ideaSubject} description={task.detailedDescription} marketsize={task.marketSize} verified={task.verified} visible={showCard} onClose={handleOnClose} />
                      </div>
                ))
            } 
        </div>
    </>
  )
}

export default Submission;