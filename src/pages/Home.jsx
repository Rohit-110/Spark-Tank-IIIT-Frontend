import React from 'react'
import Navbar from '../components/Navbar'
import img2 from '../assets/img4.jpg'
import img3 from '../assets/img5.jpg'
import img4 from '../assets/img6.jpg'
import img5 from '../assets/img9.jpg'
import img6 from '../assets/img8.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className=' text-wrap  font-mono tracking-widest text-xl mt-44 mx-5'>
        Welcome to Spark Tank IIIT, where entrepreneurs can seamlessly pitch their innovative ideas. Our platform connects visionaries with investors, providing the tools and resources needed for successful presentations. Ignite your entrepreneurial journey with us and turn your ideas into reality.
        </div>
        <p className="relative font-mono tracking-widest text-xl mt-14 ml-28 ">
            <span className="absolute -left-4  -top-4 text-3xl  font-mono tracking-widest select-none">&#8220;</span>
            Keep the Ideas Flowing, Keep the Innovation Growing.
            <span className="absolute  -bottom-4 text-3xl font-mono tracking-widest select-none">&#8221;</span>
        </p>
        <div className='mt-28 mx-5 font-mono tracking-widest text-2xl font-bold '>
            <p>Our Business Tycoons</p>
        </div>
        <div className='flex flex-row items-center'>
            <img src={`${img2}`} className=' h-28 w-28 rounded-full mx-5' alt=""/>
            <img src={`${img3}`} className=' h-32 w-32 rounded-full mx-5' alt=""/>
            <img src={`${img4}`} className=' h-28 w-28 rounded-full mx-5' alt=""/>
            <img src={`${img5}`} className=' h-16 w-28 rounded-full mx-5' alt=""/>
            <img src={`${img6}`} className=' h-28 w-32 rounded-full mx-5' alt=""/>
        </div>
        <div className='mt-4 mx-5 font-mono tracking-widest text-2xl font-semibold '>
            Proceed  Further
            <div className='flex flex-row mt-3'>
                <Link to='/submission'><Button variant="contained" className='m-2'>View Others Submission</Button></Link>
                <Link to='/idea'><Button variant="contained" className='m-2'>Submit Your Application</Button></Link>
            </div>

        </div>
    </>
  )
}

export default Home