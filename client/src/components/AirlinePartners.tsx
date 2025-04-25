import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AirlinePartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Use a function to create properly formatted image paths
  const getImagePath = (filename: string) => {
    try {
      // Convert to a relative path that works with spaces
      return new URL(`../assets/Airline Partners/${filename}`, import.meta.url).href;
    } catch (error) {
      console.error(`Error creating URL for ${filename}:`, error);
      return ''; // Return empty string to trigger the onError fallback
    }
  };

  // All airline partners using local files
  const airlines = [
    { id: 1, name: 'Sri Lankan Airlines', logo: getImagePath('Sri Lankan Airlines.jpeg'), alt: 'Sri Lankan Airlines Logo' },
    { id: 2, name: 'Singapore Airlines', logo: getImagePath('Singapore Airlines.jpeg'), alt: 'Singapore Airlines Logo' },
    { id: 3, name: 'Emirates', logo: getImagePath('Emirates.png'), alt: 'Emirates Logo' },
    { id: 4, name: 'Qatar Airways', logo: getImagePath('Qatar.jpeg'), alt: 'Qatar Airways Logo' },
    { id: 5, name: 'Air Arabia', logo: getImagePath('airarabia.jpg'), alt: 'Air Arabia Logo' },
    { id: 6, name: 'Air China', logo: getImagePath('Air China.png'), alt: 'Air China Logo' },
    { id: 7, name: 'Cathay Pacific', logo: getImagePath('cathay_pacific.jpg'), alt: 'Cathay Pacific Logo' },
    { id: 8, name: 'China Eastern Airlines', logo: getImagePath('China-Eastern-Airlines.png'), alt: 'China Eastern Airlines Logo' },
    { id: 9, name: 'Etihad Airways', logo: getImagePath('Etihad-Airways.png'), alt: 'Etihad Airways Logo' },
    { id: 10, name: 'Fly Dubai', logo: getImagePath('flydubai-logo.png'), alt: 'Fly Dubai Logo' },
    { id: 11, name: 'Gulf Air', logo: getImagePath('gulf-air.jpg'), alt: 'Gulf Air Logo' },
    { id: 12, name: 'IndiGo', logo: getImagePath('IndiGo-Logo.jpg'), alt: 'IndiGo Logo' },
    { id: 13, name: 'Jazeera Airways', logo: getImagePath('Jazeera.png'), alt: 'Jazeera Airways Logo' },
  ];

  // CDN fallback URLs for when local images fail to load
  const cdnLogos: Record<string, string> = {
    'Sri Lankan Airlines': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/SriLankan_Airlines_Logo.svg/1200px-SriLankan_Airlines_Logo.svg.png',
    'Singapore Airlines': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/1200px-Singapore_Airlines_Logo_2.svg.png',
    'Emirates': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png',
    'Qatar Airways': 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png',
    'Air Arabia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Air_Arabia_logo.svg/2560px-Air_Arabia_logo.svg.png',
    'Air China': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Air_China_logo_2019.svg/1280px-Air_China_logo_2019.svg.png',
    'Cathay Pacific': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Cathay_Pacific_Logo.svg/1200px-Cathay_Pacific_Logo.svg.png',
    'China Eastern Airlines': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/China_Eastern_Airlines_logo.svg/2560px-China_Eastern_Airlines_logo.svg.png',
    'Etihad Airways': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/New_Etihad_Airways_Logo.svg/1200px-New_Etihad_Airways_Logo.svg.png',
    'Fly Dubai': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Flydubai_Logo.svg/1200px-Flydubai_Logo.svg.png',
    'Gulf Air': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Gulf_Air_current_logo_%282018%29.svg/2560px-Gulf_Air_current_logo_%282018%29.svg.png',
    'IndiGo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png',
    'Jazeera Airways': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jazeera_Airways_Logo.svg/1200px-Jazeera_Airways_Logo.svg.png'
  };

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

  // Handle image load error
  const handleImageError = (airlineName: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Failed to load image for ${airlineName}`);
    
    // Update the error state
    setImageErrors(prev => ({
      ...prev,
      [airlineName]: true
    }));
    
    // Try to find a fallback CDN URL for this airline
    const fallbackUrl = cdnLogos[airlineName] || 'https://placehold.co/200x100/e3e3e3/003B72?text=Airline+Logo';
    e.currentTarget.src = fallbackUrl;
  };

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
        
        {/* Auto-scrolling carousel of airline logos */}
        <div className="overflow-hidden relative">
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center bg-white rounded-lg p-4 shadow-md">
                  <img 
                    src={imageErrors[airline.name] ? cdnLogos[airline.name] : airline.logo} 
                    alt={airline.alt}
                    className="max-h-24 sm:max-h-28 max-w-full object-contain" 
                    loading={index < 13 ? "eager" : "lazy"}
                    onError={(e) => handleImageError(airline.name, e)}
                  />
                </div>
                <p className="mt-3 text-center font-medium text-gray-700">{airline.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AirlinePartners; 