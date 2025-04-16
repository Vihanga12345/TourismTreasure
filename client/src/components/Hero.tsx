import { motion } from 'framer-motion';
// Import the image directly
import backgroundImage from '../assets/background.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white text-shadow mb-6"
        >
          Discover the Beauty of <span className="text-secondary">Sri Lanka</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-white text-shadow mb-10 max-w-3xl mx-auto"
        >
          Experience the paradise island's breathtaking landscapes, rich cultural heritage, and unforgettable adventures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#tours" 
            className="px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            Explore Tour Packages
          </a>
          <a 
            href="#cars" 
            className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            View Car Rentals
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#tours" className="text-white">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
