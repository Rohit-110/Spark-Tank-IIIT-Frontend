import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { Context } from '..';
import img1 from '../assets/img2.png'
import Navbar from '../components/Navbar';
import { server } from '..';

const Profile = () => {    
    const { isAuthenticated , setIsAuthenticated}= useContext(Context);

    useEffect(() => {
        AOS.init({ duration: 1500 })
    })
   

    const [appliers,setAppliers]=useState([]);

    useEffect(()=>{
      axios.get(`${server}/user/me`,{
        withCredentials: true,
      }).then((res)=>{
        console.log(res);
        setAppliers(res.data.student);
        setIsAuthenticated(true);
      }).catch((error)=>{
        toast.error('Error');
      })
    
    },[]);
  
    return ( <div>
      <Navbar />
      <section className='bg-dark'>
          <div className="container py-28">
              <div className="row">
                  <div data-aos="fade-right" className="p-3 col-lg-4">
                      <div className="card mb-4">
                          <div className="card-body text-center d-flex flex-column align-items-center">
                              <img src={img1} alt="avatar" className="rounded-circle h-48 w-10" style={{ width: "150px" }} />
                              <p className="text-muted mb-4 font-semibold ">{`I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems.`}</p>
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
