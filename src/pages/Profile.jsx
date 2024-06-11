import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useState } from 'react';
import { server } from '..';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { Context } from '..';
import img1 from '../assets/img2.png'

const profileData = {
    image: img1,
    name: "Jai Khanna",
    email: "iit2022005@iiita.ac.in",
    phoneNumber: "8360708882",
    batch: "BTech IT '26",
    summary: "I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems.",
    resume: ""
};

const Profile = () => {    
    const { setIsAuthenticated}= useContext(Context);

    useEffect(() => {
        AOS.init({ duration: 1500 })
    })
   

    const [appliers,setAppliers]=useState([]);

    useEffect(()=>{
      axios.get(`${server}/user/me`,{
        withCredentials: true,
      }).then((res)=>{
        setAppliers(res.data.student);
        setIsAuthenticated(true);
      }).catch((error)=>{
        console.log(error);
      })
    
    },);
  
  
    return (
        <div>
            <Navbar />
            <section className='bg-dark'>
                <div className="container py-28">
                    <div className="row">
                        <div data-aos="fade-right" className="p-3 col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <img src={img1} alt="avatar" className="rounded-circle h-48 w-10" style={{ width: "150px" }} />
                                    <p className="text-muted mb-4 font-semibold ">{profileData.summary}</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="p-4 col-lg-8">
                            <div className="card mb-10 ">
                                <div className="card-body ">
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{appliers.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{appliers.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{appliers.mobile}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row p-1.5">
                                        <div className="col-sm-3">
                                            <p className="mb-1">Batch</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{ (appliers.batch==='')? appliers.batch : '2026'}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
