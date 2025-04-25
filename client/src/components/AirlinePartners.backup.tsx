import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import all airline logos
import sriLankanAirlines from '../assets/Airline Partners/Sri Lankan Airlines.jpeg';
import singaporeAirlines from '../assets/Airline Partners/Singapore Airlines.jpeg';
import emirates from '../assets/Airline Partners/Emirates.png';
import qatar from '../assets/Airline Partners/Qatar.jpeg';
import airArabia from '../assets/Airline Partners/airarabia.jpg';
import airChina from '../assets/Airline Partners/Air China.png';
import cathayPacific from '../assets/Airline Partners/cathay_pacific.jpg';
import chinaEastern from '../assets/Airline Partners/China-Eastern-Airlines.png';
import etihad from '../assets/Airline Partners/Etihad-Airways.png';
import fitsAir from '../assets/Airline Partners/Fits air.png';
import flyDubai from '../assets/Airline Partners/flydubai-logo.png';
import gulfAir from '../assets/Airline Partners/gulf-air.jpg';
import indiGo from '../assets/Airline Partners/IndiGo-Logo.jpg';
import jazeera from '../assets/Airline Partners/Jazeera.png';

const AirlinePartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // All airline partners
  const airlines = [
    { id: 1, name: 'Sri Lankan Airlines', logo: sriLankanAirlines, alt: 'Sri Lankan Airlines Logo' },
    { id: 2, name: 'Singapore Airlines', logo: singaporeAirlines, alt: 'Singapore Airlines Logo' },
    { id: 3, name: 'Emirates', logo: emirates, alt: 'Emirates Logo' },
    { id: 4, name: 'Qatar Airways', logo: qatar, alt: 'Qatar Airways Logo' },
    { id: 5, name: 'Air Arabia', logo: airArabia, alt: 'Air Arabia Logo' },
    { id: 6, name: 'Air China', logo: airChina, alt: 'Air China Logo' },
    { id: 7, name: 'Cathay Pacific', logo: cathayPacific, alt: 'Cathay Pacific Logo' },
    { id: 8, name: 'China Eastern Airlines', logo: chinaEastern, alt: 'China Eastern Airlines Logo' },
    { id: 9, name: 'Etihad Airways', logo: etihad, alt: 'Etihad Airways Logo' },
    { id: 10, name: 'Fits Air', logo: fitsAir, alt: 'Fits Air Logo' },
    { id: 11, name: 'Fly Dubai', logo: flyDubai, alt: 'Fly Dubai Logo' },
    { id: 12, name: 'Gulf Air', logo: gulfAir, alt: 'Gulf Air Logo' },
    { id: 13, name: 'IndiGo', logo: indiGo, alt: 'IndiGo Logo' },
    { id: 14, name: 'Jazeera Airways', logo: jazeera, alt: 'Jazeera Airways Logo' },
  ];

  // Duplicate the airlines for seamless looping
  const duplicatedAirlines = [...airlines, ...airlines];

  useEffect(() => {
    // Set up automatic scrolling animation
    const startAutoScroll = async () => {
      if (!scrollRef.current) return;
      
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const distance = scrollWidth / 2; // Half the scroll width (original set of logos)
      
      // Start the infinite scroll animation
      controls.start({
        x: -distance,
        transition: {
          duration: 30, // Slow scrolling (30 seconds)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    startAutoScroll();
  }, [controls]);

  return (
    <section id="airline-partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Airline Partners</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We collaborate with the world's leading airlines to provide you with the best flight options for your journey to and from Sri Lanka.
          </p>
        </motion.div>
        
        {/* Carousel container */}
        <div className="overflow-hidden relative">
          {/* Auto-scrolling carousel */}
          <motion.div 
            ref={scrollRef}
            className="flex items-center py-8"
            animate={controls}
            style={{ width: "fit-content" }}
          >
            {duplicatedAirlines.map((airline, index) => (
              <div
                key={`${airline.id}-${index}`}
                className="flex flex-col items-center mx-8"
              >
                <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 flex items-center justify-center bg-white rounded-lg p-5 shadow-lg">
                  <img 
                    src={airline.logo} 
                    alt={airline.alt}
                    className="max-h-28 sm:max-h-32 md:max-h-36 max-w-full object-contain" 
                  />
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">{airline.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AirlinePartners; 