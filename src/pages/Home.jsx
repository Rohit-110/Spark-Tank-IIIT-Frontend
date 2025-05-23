import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import img2 from '../assets/img4.jpg'
import img3 from '../assets/img5.jpg'
import img4 from '../assets/img6.jpg'
import img5 from '../assets/img11.jpg'
import img6 from '../assets/img10.jpg'
import { Link } from 'react-router-dom'
import { Context } from '..'

const Home = () => {
    const { isAuthenticated } = useContext(Context);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        if (!isAuthenticated) {
            window.location.href = '/';
        }
        
        // Add smooth scroll for anchor links
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });
        
        // Track mouse position for aurora effect
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            anchorLinks.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isAuthenticated]);
    
    // Variants for floating animations
    const floatingAnimation = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };
    
    const orbitAnimation = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };
    
    const pulseAnimation = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };
    
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
            {/* Aurora Effects */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-aurora-slow"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-indigo-500 rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-aurora-medium"></div>
                <div 
                    className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-aurora-fast"
                    style={{ 
                        left: `${mousePosition.x / 20}px`, 
                        top: `${mousePosition.y / 20}px` 
                    }}
                ></div>
            </div>
            
            {/* Floating particles */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white opacity-20"
                        initial={{ 
                            x: `${Math.random() * 100}vw`, 
                            y: `${Math.random() * 100}vh`,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{ 
                            x: `${Math.random() * 100}vw`, 
                            y: `${Math.random() * 100}vh` 
                        }}
                        transition={{ 
                            duration: Math.random() * 60 + 30,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        style={{ 
                            width: `${Math.random() * 20 + 10}px`, 
                            height: `${Math.random() * 20 + 10}px` 
                        }}
                    />
                ))}
            </div>
            
            {/* Orbital ring */}
            <motion.div 
                className="fixed top-1/2 left-1/2 w-[500px] h-[500px] border border-indigo-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0"
                variants={orbitAnimation}
                animate="animate"
            />
            
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-20 pb-16">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.div
                            variants={floatingAnimation}
                            animate="animate"
                            className="mb-6"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Spark Tank
                                </span>
                            </h1>
                            <div className="relative inline-block">
                                <span className="block text-lg md:text-xl text-gray-600 mt-2">IIIT Allahabad</span>
                                <motion.div 
                                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                    initial={{ width: 0 }}
                                    animate={{ width: "80%" }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative mb-12"
                        >
                            {/* Decorative element */}
                            <motion.div 
                                className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-blue-400 opacity-50"
                                variants={pulseAnimation}
                                animate="animate"
                            />
                            <motion.div 
                                className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-indigo-400 opacity-50"
                                variants={pulseAnimation}
                                animate="animate"
                            />
                            
                            <p className="text-lg md:text-xl font-mono tracking-wide leading-relaxed text-gray-700">
                                Welcome to Spark Tank IIIT Allahabad, where entrepreneurs can seamlessly pitch their innovative ideas. Our platform connects visionaries with investors, providing the tools and resources needed for successful presentations.
                            </p>
                        </motion.div>
                        
                        <div className="py-4">
                            <motion.blockquote 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="relative px-8 py-6 italic font-mono tracking-wide text-lg text-gray-700 border-l-4 border-blue-500 bg-white bg-opacity-50 rounded-lg shadow-sm backdrop-filter backdrop-blur-sm"
                            >
                                <motion.span 
                                    className="absolute -left-2 -top-4 text-5xl text-blue-400 opacity-50"
                                    animate={{ 
                                        rotateZ: [0, 5, 0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                >
                                    &#8220;
                                </motion.span>
                                Keep the Ideas Flowing, Keep the Innovation Growing.
                                <motion.span 
                                    className="absolute -right-2 -bottom-4 text-5xl text-blue-400 opacity-50"
                                    animate={{ 
                                        rotateZ: [0, -5, 0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        delay: 0.5
                                    }}
                                >
                                    &#8221;
                                </motion.span>
                            </motion.blockquote>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="mt-10"
                        >
                            <a href="#get-started" className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden group">
                                <span className="relative z-10">Ignite Your Journey</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <motion.span 
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20"
                                    animate={{ 
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "linear"
                                    }}
                                />
                                <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            
            {/* Business Tycoons Section */}
            <section className="py-16 relative">
                <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-12 font-mono tracking-wider">
                            <span className="relative inline-block">
                                Our Business Tycoons
                                <motion.div 
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                />
                            </span>
                        </h2>
                        
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {[
                                { img: img2, name: "Investor A", size: "xl", delay: 0 },
                                { img: img3, name: "Investor B", size: "xl", delay: 0.1 },
                                { img: img4, name: "Investor C", size: "xl", delay: 0.2 },
                                { img: img5, name: "Investor D", size: "xl", delay: 0.3 },
                                { img: img6, name: "Investor E", size: "xl", delay: 0.4 }
                            ].map((investor, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: investor.delay, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    className="text-center"
                                >
                                    <motion.div 
                                        className={`relative rounded-full overflow-hidden border-4 border-white shadow-lg ${
                                            investor.size === "md" ? "w-24 h-24" :
                                            investor.size === "lg" ? "w-32 h-32" : "w-40 h-40"
                                        }`}
                                        animate={{ 
                                            y: [0, -5, 0, -3, 0],
                                        }}
                                        transition={{
                                            duration: 4 + index,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20"></div>
                                        <img 
                                            src={investor.img} 
                                            alt={investor.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end justify-center">
                                            <span className="text-white font-medium pb-2">{investor.name}</span>
                                        </div>
                                        
                                        {/* Orbit effect */}
                                        <motion.div 
                                            className="absolute inset-0 border-2 border-indigo-300 rounded-full opacity-0 group-hover:opacity-60"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.2, opacity: 0.3 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Call to Action Section */}
            <section id="get-started" className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden backdrop-filter backdrop-blur-sm relative"
                    >
                        {/* Background animated patterns */}
                        <div className="absolute inset-0 opacity-5 overflow-hidden">
                            <motion.div 
                                className="absolute w-40 h-40 rounded-full bg-blue-500"
                                style={{ top: '10%', right: '5%' }}
                                animate={{ 
                                    x: [0, 20, 0],
                                    y: [0, 20, 0]
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <motion.div 
                                className="absolute w-60 h-60 rounded-full bg-indigo-500"
                                style={{ bottom: '-20%', left: '-10%' }}
                                animate={{ 
                                    x: [0, -20, 0],
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        </div>
                        
                        <div className="md:flex relative z-10">
                            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
                                {/* Moving particle effect */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute rounded-full bg-white"
                                            initial={{ 
                                                x: `${Math.random() * 100}%`, 
                                                y: `${Math.random() * 100}%`,
                                                opacity: 0.1,
                                                scale: Math.random() * 0.4 + 0.1
                                            }}
                                            animate={{ 
                                                x: `${Math.random() * 100}%`, 
                                                y: `${Math.random() * 100}%` 
                                            }}
                                            transition={{ 
                                                duration: Math.random() * 20 + 10,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                ease: "linear"
                                            }}
                                            style={{ 
                                                width: `${Math.random() * 20 + 5}px`, 
                                                height: `${Math.random() * 20 + 5}px` 
                                            }}
                                        />
                                    ))}
                                </div>
                                
                                <motion.h3 
                                    className="text-2xl font-bold font-mono tracking-wider mb-4 relative"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Ready to Begin?
                                </motion.h3>
                                <motion.p 
                                    className="mb-6 text-blue-100 relative"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    Turn your innovative ideas into reality with the support of our platform and community.
                                </motion.p>
                                <ul className="space-y-3 relative">
                                    {["Connect with investors", "Showcase your vision", "Receive expert feedback", "Access resources"].map((item, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            className="flex items-center"
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                        >
                                            <svg className="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <motion.h3 
                                    className="text-2xl font-bold font-mono tracking-wider mb-6 text-gray-800"
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Proceed Further
                                </motion.h3>
                                <div className="space-y-4">
                                    <Link to="/submission" className="block">
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3 px-6 flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-sm hover:shadow text-gray-800 font-medium relative overflow-hidden group"
                                            initial={{ y: 10, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <span className="relative z-10">View Others' Submissions</span>
                                            <motion.span 
                                                className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "0%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </motion.button>
                                    </Link>
                                    <Link to="/idea" className="block">
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3 px-6 flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:shadow-lg text-white font-medium relative overflow-hidden group"
                                            initial={{ y: 10, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            <span className="relative z-10">Submit Your Application</span>
                                            <motion.span 
                                                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "0%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 text-sm relative z-10">
                <p>© {new Date().getFullYear()} Spark Tank IIIT Allahabad. All rights reserved.</p>
                <motion.p 
                    className="mt-2 font-mono tracking-wide"
                    animate={{ 
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    Transforming ideas into reality.
                </motion.p>
            </footer>
            
            {/* Add Aurora animation keyframes */}
            <style jsx>{`
                @keyframes aurora-slow {
                    0% { transform: translateX(0) translateY(0) scale(1); opacity: 0.05; }
                    50% { transform: translateX(5%) translateY(5%) scale(1.2); opacity: 0.1; }
                    100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.05; }
                }
                
                @keyframes aurora-medium {
                    0% { transform: translateX(0) translateY(0) scale(1); opacity: 0.07; }
                    33% { transform: translateX(-5%) translateY(-2%) scale(1.1); opacity: 0.12; }
                    66% { transform: translateX(3%) translateY(-5%) scale(0.9); opacity: 0.07; }
                    100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.07; }
                }
                
                @keyframes aurora-fast {
                    0% { transform: translateX(-5%) translateY(5%) scale(0.9); opacity: 0.08; }
                    25% { transform: translateX(5%) translateY(-2%) scale(1.1); opacity: 0.12; }
                    50% { transform: translateX(-3%) translateY(-5%) scale(0.95); opacity: 0.08; }
                    75% { transform: translateX(5%) translateY(2%) scale(1.05); opacity: 0.12; }
                    100% { transform: translateX(-5%) translateY(5%) scale(0.9); opacity: 0.08; }
                }
                
                .animate-aurora-slow {
                    animation: aurora-slow 15s ease-in-out infinite;
                }
                
                .animate-aurora-medium {
                    animation: aurora-medium 12s ease-in-out infinite;
                }
                
                .animate-aurora-fast {
                    animation: aurora-fast 10s ease-in-out infinite;
                }
                
                .pattern-dots {
                    background-image: radial-gradient(currentColor 1px, transparent 1px);
                    background-size: calc(10 * 1px) calc(10 * 1px);
                }
                
                .blur-5xl {
                    filter: blur(100px);
                }
            `}</style>
        </div>
    )
}

export default Home