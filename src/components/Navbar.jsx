import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import toast from 'react-hot-toast';
import { server, Context } from '../index.js';
import axios from 'axios';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleSignOut = async () => {
    try {
      await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });
      toast.success("You are logged out");
      setIsAuthenticated(false);
      window.location.href = '/';
    } catch (error) {
      toast.error("Error");
      setIsAuthenticated(true);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="z-50 fixed top-0 left-0 right-0 bg-slate-800 bg-opacity-95 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <Link to="/home" className="text-white transition-colors duration-300" style={{ textDecoration: 'none' }}>
            IIIT
          </Link>
        </h1>
        <nav className="hidden lg:flex justify-around">
          <ul className="flex space-x-10 text-xl relative">
            <li>
              <Link className="text-white transition-colors duration-300 hover:font-semibold hover:underline" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white transition-colors duration-300 hover:font-semibold hover:underline" to="/idea">
                Idea
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className="flex items-center text-white hover:font-semibold hover:underline focus:outline-none"
              >
                Submission
                <svg className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-2 bg-slate-800 bg-opacity-95 backdrop-blur-md rounded-md shadow-lg py-2 px-4 space-y-2 z-50">
                  <li>
                    <Link className="block text-white text-sm hover:bg-slate-600 px-2 py-1 rounded" to="/mysubmission">
                      My Submission
                    </Link>
                  </li>
                  <li>
                    <Link className="block text-white text-sm hover:bg-slate-600 px-2 py-1 rounded" to="/submission">
                      All Submission
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="text-white transition-colors duration-300 hover:font-semibold hover:underline" to="/discuss">
                Discuss
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link to="/profile">
                <button className="nav-link btn btn-primary">
                  <PersonIcon className="text-white transition-colors duration-300 cursor-pointer" />
                </button>
              </Link>
            </li>
            <li>
              <button onClick={handleSignOut} className="nav-link btn btn-danger">
                <PowerSettingsNewIcon className="text-white transition-colors duration-300" />
              </button>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden transition-all duration-300`}>
        <ul className="flex flex-col items-center space-y-4 p-4">
          <li>
            <Link className="text-white" to="/search">Home</Link>
          </li>
          <li>
            <Link className="text-white" to="/profile">Idea</Link>
          </li>
          <li>
            <Link className="text-white" to="/contact">Submission</Link>
          </li>
          <li>
            <Link className="text-white" to="/contact">Discuss</Link>
          </li>
          <li>
            <button onClick={handleSignOut} className="nav-link btn btn-danger">
              <PowerSettingsNewIcon className="text-white" />
            </button>
          </li>
          <li>
            <Link to="/profile">
              <PersonIcon className="text-white transition-colors duration-300 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
