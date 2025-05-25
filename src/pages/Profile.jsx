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
  
    return ( 
        <div>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-cyan-500/10 blur-2xl animate-ping"></div>
                </div>
                
                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-16" data-aos="fade-down">
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                Profile Dashboard
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Profile Card */}
                            <div data-aos="fade-right" className="lg:col-span-1">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                                    <div className="text-center">
                                        {/* Avatar with glow effect */}
                                        <div className="relative mb-8">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                                            <img 
                                                src={img1} 
                                                alt="avatar" 
                                                className="relative w-40 h-40 rounded-full object-cover border-4 border-white/30 shadow-2xl mx-auto hover:rotate-6 transition-transform duration-300" 
                                            />
                                        </div>
                                        
                                        {/* Bio Section */}
                                        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-6 border border-white/10">
                                            <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                                About Me
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {`I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems.`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Details Card */}
                            <div data-aos="fade-left" className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
                                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg mr-3 flex items-center justify-center">
                                            <span className="text-white text-sm">👤</span>
                                        </div>
                                        Personal Information
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        {/* Full Name */}
                                        <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                                            <div className="flex flex-col md:flex-row md:items-center">
                                                <div className="md:w-1/3 mb-2 md:mb-0">
                                                    <p className="text-cyan-300 font-semibold flex items-center">
                                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                                                        Full Name
                                                    </p>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <p className="text-white font-medium text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                                                        {appliers.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                        {/* Email */}
                                        <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                                            <div className="flex flex-col md:flex-row md:items-center">
                                                <div className="md:w-1/3 mb-2 md:mb-0">
                                                    <p className="text-purple-300 font-semibold flex items-center">
                                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                                        Email
                                                    </p>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <p className="text-white font-medium text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                                                        {appliers.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                        {/* Phone */}
                                        <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                                            <div className="flex flex-col md:flex-row md:items-center">
                                                <div className="md:w-1/3 mb-2 md:mb-0">
                                                    <p className="text-pink-300 font-semibold flex items-center">
                                                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                                                        Phone
                                                    </p>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <p className="text-white font-medium text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                                                        {appliers.mobile}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                        {/* Batch */}
                                        <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                                            <div className="flex flex-col md:flex-row md:items-center">
                                                <div className="md:w-1/3 mb-2 md:mb-0">
                                                    <p className="text-yellow-300 font-semibold flex items-center">
                                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                                        Batch
                                                    </p>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2">
                                                        <span className="text-yellow-300 font-bold text-lg">
                                                            {(appliers.batch==='')? appliers.batch : '2026'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="fixed bottom-8 right-8" data-aos="zoom-in" data-aos-delay="800">
                            <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group">
                                <span className="text-white text-xl group-hover:rotate-12 transition-transform duration-300">⚙️</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;