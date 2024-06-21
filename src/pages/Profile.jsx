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

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`http://localhost:4000/api/user/me`, {
              withCredentials: true,
            });
            setAppliers(data.entrepreneur);
            console.log("data ", data);
          } catch (e) {
            toast.error("Error");
            console.error("Error fetching data:", e);
          }
        };
    
        fetchData();
      }, []);
  
    return (
        <div>
            
        </div>
    );
};

export default Profile;
