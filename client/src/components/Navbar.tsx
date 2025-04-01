import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-serif font-bold text-2xl text-primary"
              >
                Ceylon<span className="text-secondary">Explorer</span>
              </motion.span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link px-3 py-2 text-sm font-medium">Home</a>
            <a href="#tours" className="nav-link px-3 py-2 text-sm font-medium">Tour Packages</a>
            <a href="#cars" className="nav-link px-3 py-2 text-sm font-medium">Car Rentals</a>
            <a href="#about" className="nav-link px-3 py-2 text-sm font-medium">About Us</a>
            <a href="#gallery" className="nav-link px-3 py-2 text-sm font-medium">Gallery</a>
            <a href="#team" className="nav-link px-3 py-2 text-sm font-medium">Our Team</a>
            <button className="ml-4 px-6 py-2 bg-secondary hover:bg-yellow-400 text-primary font-medium rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </button>
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
          <a href="#home" className="block px-3 py-2 text-base font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#tours" className="block px-3 py-2 text-base font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Tour Packages</a>
          <a href="#cars" className="block px-3 py-2 text-base font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Car Rentals</a>
          <a href="#about" className="block px-3 py-2 text-base font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#gallery" className="block px-3 py-2 text-base font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#team" className="block px-3 py-2 text-base font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Our Team</a>
          <button className="my-2 w-full px-6 py-2 bg-secondary hover:bg-yellow-400 text-primary font-medium rounded-full shadow-md transition">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
