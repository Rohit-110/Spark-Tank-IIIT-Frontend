import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let timeout;

  const toggleNotifications = () => {
    clearTimeout(timeout);
    setShowNotifications(true);
  };

  const toggleNotificationsOff = () => {
    timeout = setTimeout(() => {
      setShowNotifications(false);
    }, 100);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`z-10 fixed top-0 left-0 right-0 ${scrolled ? 'bg-slate-800' : ' bg-slate-800'} transition-colors duration-300`} style={{ transition: 'background-color 0.3s, color 0.3s' }}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <Link to="/home" className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300`} style={{ textDecoration: 'none' }}>
            Spark Tank IIIT
          </Link>
        </h1>
        <nav className="hidden lg:flex justify-around">
          <ul className="flex space-x-10 text-xl">
            <li>
              <Link className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 hover:font-semibold hover:underline`} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 hover:font-semibold hover:underline`} to="/idea">
                Idea
              </Link>
            </li>
            <li>
              <Link className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 hover:font-semibold hover:underline`} to="/sumission">
                Submission
              </Link>
            </li>
            <li>
              <Link className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 hover:font-semibold hover:underline`} to="/discuss">
                Discuss
              </Link>
            </li>
          </ul>
        </nav>        
        <nav className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-8 items-center">
            <li onMouseEnter={toggleNotifications} onMouseLeave={toggleNotificationsOff}>
              <Link to="/notifications">
                <button className="nav-link btn btn-info">
                    <NotificationsNoneIcon className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 cursor-pointer`} />
                </button>
              </Link>
              <Notifications showNotifications={showNotifications} />
            </li>
            <li>
              <Link to="/profile">
                <button className="nav-link btn btn-primary">
                    <PersonIcon className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 cursor-pointer`} />
                </button>
              </Link>
            </li>
            <li>
              <button className="nav-link btn btn-danger">
                <PowerSettingsNewIcon className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300`} />
              </button>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden transition-all duration-300`}>
        <ul className="flex flex-col items-center space-y-4 p-4">
          <li>
            <Link className="text-white" to="/search">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/profile">
              Idea
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/contact">
              Submission
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/contact">
              Discuss
            </Link>
          </li>
            <li onMouseEnter={toggleNotifications} onMouseLeave={toggleNotificationsOff}>
              <Link to="/notifications">
                <NotificationsNoneIcon className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 cursor-pointer`} />
              </Link>
              <Notifications showNotifications={showNotifications} />
            </li>
          <li>
            <button className="nav-link btn btn-danger">
              <PowerSettingsNewIcon className="text-white" />
            </button>
          </li>
            <li>
              <Link to="/profile">
                <PersonIcon className={`${scrolled ? 'text-white' : 'text-white'} transition-colors duration-300 cursor-pointer`} />
              </Link>
            </li>
        </ul>
      </div>
    </header>
  );
}
