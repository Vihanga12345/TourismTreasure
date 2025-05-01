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
  // State for the last actively selected category (persists after hover ends)
  const [lastSelectedCategory, setLastSelectedCategory] = useState<string | null>(null);
  // State for hover category (desktop only)
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);
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

  // Function to handle clicking a category
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setLastSelectedCategory(categoryId);
  };

  // Find the active category object - use hover category for desktop if available
  // If no hover, use the last selected category or the active category as fallback
  const displayCategory = hoverCategory || lastSelectedCategory || activeCategory;
  const currentCategory = categories.find(category => category.id === displayCategory) || categories[0];

  return (
    <section id="destinations" className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4"
          >
            Discover Sri Lanka
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base"
          >
            Explore the island paradise's diverse attractions and unforgettable experiences
          </motion.p>
        </div>
        
        {/* Mobile view with horizontal icons and map */}
        <div className="md:hidden">
          {/* Mobile horizontal icon buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            {categories.map((category) => (
              <motion.div 
                key={`mobile-icon-${category.id}`}
                onClick={() => handleCategoryClick(category.id)}
                className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  activeCategory === category.id 
                    ? 'bg-primary shadow-md' 
                    : 'bg-white border border-gray-200'
                }`}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={`fas ${category.icon} text-xl ${
                  activeCategory === category.id ? 'text-white' : 'text-primary'
                }`}></i>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Map Container - No border */}
          <div className="relative w-full h-[350px] mx-auto rounded-lg overflow-hidden shadow-sm">
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            
            {categories.map((category) => (
              <motion.div
                key={`mobile-map-${category.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCategory === category.id ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <img 
                  src={category.map} 
                  alt={`Sri Lanka ${category.name} Map`} 
                  className="w-full h-full object-contain"
                  onDragStart={(e) => e.preventDefault()}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Mobile description for selected category */}
          <motion.div 
            key={`mobile-desc-${activeCategory}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 bg-white p-4 rounded-xl shadow-sm"
          >
            <h4 className="text-lg font-bold text-primary mb-2">{currentCategory.name}</h4>
            <p className="text-sm text-gray-600">{currentCategory.description}</p>
          </motion.div>
        </div>
        
        {/* Desktop layout with buttons on left, map on right */}
        <div className="hidden md:flex md:flex-row items-start">
          {/* Left column - Category buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-2/5 md:pr-10 z-10"
          >
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4 md:mb-8">Choose Your Adventure</h3>
            
            {/* Fixed height container for description */}
            <div className="h-[120px] md:h-[150px] mb-6 md:mb-8 relative">
              {/* Category description - Absolutely positioned */}
              <motion.div 
                key={displayCategory + "-description"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full bg-white p-4 md:p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <i className={`fas ${currentCategory.icon} text-base text-primary`}></i>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary">{currentCategory.name}</h4>
                </div>
                <p className="text-sm md:text-base text-gray-600">{currentCategory.description}</p>
              </motion.div>
            </div>
            
            {/* Category buttons - Vertical layout for desktop */}
            <div className="flex flex-col space-y-3 md:space-y-4">
              {categories.map((category) => (
                <motion.div 
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  onMouseEnter={() => setHoverCategory(category.id)}
                  onMouseLeave={() => {
                    // When mouse leaves, set lastSelectedCategory to the category we were hovering
                    if (hoverCategory) {
                      setLastSelectedCategory(hoverCategory);
                    }
                    setHoverCategory(null);
                  }}
                  className={`flex items-center p-3 md:p-5 rounded-xl md:rounded-2xl cursor-pointer transition-colors duration-300 ${
                    (hoverCategory || lastSelectedCategory || activeCategory) === category.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${
                    (hoverCategory || lastSelectedCategory || activeCategory) === category.id ? 'bg-secondary' : 'bg-primary bg-opacity-10'
                  } flex items-center justify-center mr-4`}>
                    <i className={`fas ${category.icon} text-xl ${
                      (hoverCategory || lastSelectedCategory || activeCategory) === category.id ? 'text-primary' : 'text-secondary'
                    }`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">{category.name}</h4>
                    <p className={`text-xs md:text-sm ${(hoverCategory || lastSelectedCategory || activeCategory) === category.id ? 'text-gray-200' : 'text-gray-500'}`}>
                      Explore Sri Lanka's {category.name.toLowerCase()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Map display for desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-3/5 relative flex items-center justify-center md:pl-4"
          >
            {/* Loading indicator */}
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            
            {/* Maps container - No border */}
            <div className="relative h-[700px] w-full rounded-lg overflow-hidden">
              {/* We render all images but only animate the opacity for smooth transitions */}
              {categories.map((category) => (
                <motion.div
                  key={`desktop-${category.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: displayCategory === category.id ? 1 : 0,
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
                    className="w-full h-full object-contain max-w-none"
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