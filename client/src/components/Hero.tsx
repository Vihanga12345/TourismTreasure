import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
// Import the video directly
import backgroundVideo from '../assets/Vedios/Vedio.mp4';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Skip the first 8 seconds of the video when it's loaded
    if (videoRef.current) {
      // Add event listener to handle when metadata is loaded
      videoRef.current.addEventListener('loadedmetadata', () => {
        // Set the current time to 8 seconds
        if (videoRef.current) {
          videoRef.current.currentTime = 8;
        }
      });

      // If the video restarts (due to loop), skip to 8 seconds again
      videoRef.current.addEventListener('seeked', () => {
        // Only apply this when the video loops back to the beginning
        if (videoRef.current && videoRef.current.currentTime < 1) {
          videoRef.current.currentTime = 8;
        }
      });
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      <div className="w-full relative z-20 text-left py-24 pl-6 sm:pl-10 md:pl-16 lg:pl-24">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-shadow mb-1">
              Discover the beauty of
            </h1>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary text-shadow mb-6">
              Sri Lanka
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-white text-shadow mb-10 pr-4"
          >
            Experience the island's breathtaking landscapes, ancient history, and vibrant culture with our expertly curated tours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/packages" 
              className="px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Explore Tour Packages
            </Link>
            <Link 
              to="/car-rentals" 
              className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              View Car Rentals
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
        <a href="#destinations" className="text-white">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
