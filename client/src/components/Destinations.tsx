import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import map images
import beachesMap from '../assets/Sri Lanka Map/Beaches.jpg';
import cultureMap from '../assets/Sri Lanka Map/Culture.jpg';
import wildlifeMap from '../assets/Sri Lanka Map/Wildlife.jpg';
import adventureMap from '../assets/Sri Lanka Map/Adventure.jpg';
import hiddenGemsMap from '../assets/Sri Lanka Map/Hidden Gems.jpg';

// Define the categories with their respective icons, maps, and descriptions
const categories = [
  { 
    id: 'beaches', 
    name: 'Beaches', 
    icon: 'fa-umbrella-beach', 
    map: beachesMap,
    description: 'Discover pristine coastlines, golden sands, and turquoise waters perfect for relaxation and water activities.'
  },
  { 
    id: 'culture', 
    name: 'Culture', 
    icon: 'fa-landmark', 
    map: cultureMap,
    description: 'Explore ancient temples, colonial architecture, and vibrant local traditions that define Sri Lanka\'s rich heritage.'
  },
  { 
    id: 'wildlife', 
    name: 'Wildlife', 
    icon: 'fa-paw', 
    map: wildlifeMap,
    description: 'Encounter elephants, leopards, and exotic birds in their natural habitats across stunning national parks.'
  },
  { 
    id: 'adventure', 
    name: 'Adventure', 
    icon: 'fa-mountain', 
    map: adventureMap,
    description: 'Experience thrilling activities from hiking and white water rafting to surfing and scuba diving.'
  },
  { 
    id: 'hidden-gems', 
    name: 'Hidden Gems', 
    icon: 'fa-gem', 
    map: hiddenGemsMap,
    description: 'Uncover off-the-beaten-path destinations and secret spots known only to locals and seasoned travelers.'
  },
];

const Destinations = () => {
  // State to track the currently active category
  const [activeCategory, setActiveCategory] = useState('beaches');
  // State for preloaded images
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload images to ensure smooth transitions
  useEffect(() => {
    const imagePromises = categories.map(category => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = category.map;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    
    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(error => console.error("Error preloading images:", error));
  }, []);

  // Find the active category object
  const currentCategory = categories.find(category => category.id === activeCategory) || categories[0];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
          >
            Discover Sri Lanka
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-gray-600"
          >
            Explore the island paradise's diverse attractions and unforgettable experiences
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start">
          {/* Left column - Category buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5 md:pr-10 z-10"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Choose Your Adventure</h3>
            
            {/* Fixed height container for description */}
            <div className="h-[150px] mb-8 relative">
              {/* Category description - Absolutely positioned */}
              <motion.div 
                key={activeCategory + "-description"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <i className={`fas ${currentCategory.icon} text-primary`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-primary">{currentCategory.name}</h4>
                </div>
                <p className="text-gray-600">{currentCategory.description}</p>
              </motion.div>
            </div>
            
            {/* Category buttons - Fixed layout */}
            <div className="flex flex-col space-y-6">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className="relative"
                >
                  <motion.div 
                    onHoverStart={() => setActiveCategory(category.id)}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center p-5 rounded-2xl cursor-pointer transition-colors duration-300 ${
                      activeCategory === category.id 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-14 h-14 rounded-full ${
                      activeCategory === category.id ? 'bg-secondary' : 'bg-primary bg-opacity-10'
                    } flex items-center justify-center mr-5`}>
                      <i className={`fas ${category.icon} text-xl ${
                        activeCategory === category.id ? 'text-primary' : 'text-secondary'
                      }`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{category.name}</h4>
                      <p className={activeCategory === category.id ? 'text-gray-200' : 'text-gray-500'}>
                        Explore Sri Lanka's {category.name.toLowerCase()}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Map display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5 relative flex items-center justify-center md:pl-4 mt-12 md:mt-0"
          >
            {/* Loading indicator */}
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            
            {/* Maps container - Make it much larger */}
            <div className="relative h-[800px] w-full">
              {/* We render all images but only animate the opacity for smooth transitions */}
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeCategory === category.id ? 1 : 0,
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  style={{ 
                    pointerEvents: 'none',
                  }}
                >
                  <img 
                    src={category.map} 
                    alt={`Sri Lanka ${category.name} Map`} 
                    className="w-full h-full object-scale-down max-w-none transform scale-125"
                    style={{ display: 'block' }}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Destinations; 