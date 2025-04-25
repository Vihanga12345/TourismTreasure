import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/Gallery/Exclusive_Travels_LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Exclusive Travels Logo" 
                className="h-10 w-auto" 
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-serif font-bold text-2xl text-primary"
              >
                Exclusive<span className="text-secondary">Travels</span>
              </motion.span>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-end w-full ml-12">
            <Link to="/" className={`nav-link px-4 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>Home</Link>
            <Link to="/packages" className={`nav-link px-4 py-2 text-sm font-medium ${location.pathname === '/packages' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>Tour Packages</Link>
            <Link to="/car-rentals" className={`nav-link px-4 py-2 text-sm font-medium ${location.pathname === '/car-rentals' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>Car Rentals</Link>
            <Link to="/air-tickets" className={`nav-link px-4 py-2 text-sm font-medium ${location.pathname === '/air-tickets' ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}>Air Tickets</Link>
          </div>
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-md ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/' ? 'text-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-100'}`}>Home</Link>
          <Link to="/packages" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/packages' ? 'text-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-100'}`}>Tour Packages</Link>
          <Link to="/car-rentals" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/car-rentals' ? 'text-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-100'}`}>Car Rentals</Link>
          <Link to="/air-tickets" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/air-tickets' ? 'text-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-100'}`}>Air Tickets</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
