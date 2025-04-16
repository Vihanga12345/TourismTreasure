import { useState } from 'react';
import { motion } from 'framer-motion';

// Import images from assets
import pexelsMalindabandaralk from '../assets/pexels-malindabandaralk-16508228.jpg';
import pexelsRomanOdintsov from '../assets/pexels-roman-odintsov-4553621.jpg';
import pexelsAkthar from '../assets/pexels-akthar-595196.jpg';
import pexelsTomasMalik from '../assets/pexels-tomas-malik-793526-1998439.jpg';
import pexelsSandraMack from '../assets/pexels-sandra-mack-1233541-2365974.jpg';
import pexelsGihans from '../assets/pexels-gihans-18199788.jpg';
import pexelsGenineAndrada from '../assets/pexels-genine-alyssa-pedreno-andrada-1263127-2403209.jpg';
import pexelsEugeneDorosh from '../assets/pexels-eugene-dorosh-230277-739409.jpg';
import pexelsHirusha from '../assets/pexels-hirusha-12144831.jpg';
import backgroundImage from '../assets/background.jpg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    { id: 1, category: 'beaches', image: pexelsMalindabandaralk, alt: 'Tropical beach with azure water in Sri Lanka' },
    { id: 2, category: 'wildlife', image: pexelsRomanOdintsov, alt: 'Wild elephants in Sri Lanka national park' },
    { id: 3, category: 'temples', image: pexelsAkthar, alt: 'Ancient temple architecture in Sri Lanka' },
    { id: 4, category: 'landscapes', image: pexelsTomasMalik, alt: 'Stunning mountain landscape in Sri Lanka highlands' },
    { id: 5, category: 'beaches', image: pexelsSandraMack, alt: 'Beautiful sunset over a Sri Lankan beach' },
    { id: 6, category: 'wildlife', image: pexelsGihans, alt: 'Exotic birds in Sri Lankan wildlife sanctuary' },
    { id: 7, category: 'temples', image: pexelsGenineAndrada, alt: 'Historic temple ruins in Sri Lanka' },
    { id: 8, category: 'landscapes', image: pexelsEugeneDorosh, alt: 'Tea plantations in Sri Lanka central highlands' },
    { id: 9, category: 'wildlife', image: pexelsHirusha, alt: 'Leopard in Yala National Park' },
    { id: 10, category: 'landscapes', image: backgroundImage, alt: 'Breathtaking view of Sri Lankan mountains' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Sri Lanka Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore the breathtaking beauty of Sri Lanka through our gallery showcasing pristine beaches, exotic wildlife, ancient temples, and stunning landscapes.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`gallery-filter px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white border border-gray-300'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('beaches')}
              className={`gallery-filter px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === 'beaches' ? 'bg-primary text-white' : 'bg-white border border-gray-300'}`}
            >
              Beaches
            </button>
            <button 
              onClick={() => setActiveFilter('wildlife')}
              className={`gallery-filter px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === 'wildlife' ? 'bg-primary text-white' : 'bg-white border border-gray-300'}`}
            >
              Wildlife
            </button>
            <button 
              onClick={() => setActiveFilter('temples')}
              className={`gallery-filter px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === 'temples' ? 'bg-primary text-white' : 'bg-white border border-gray-300'}`}
            >
              Temples
            </button>
            <button 
              onClick={() => setActiveFilter('landscapes')}
              className={`gallery-filter px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === 'landscapes' ? 'bg-primary text-white' : 'bg-white border border-gray-300'}`}
            >
              Landscapes
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              layout
              transition={{ duration: 0.4 }}
              className="gallery-item"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-primary hover:bg-dark text-white font-medium rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
