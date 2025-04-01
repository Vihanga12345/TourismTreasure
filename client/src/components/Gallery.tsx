import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    { id: 1, category: 'beaches', image: 'https://images.unsplash.com/photo-1586861760473-bb3174951dd7?q=80&w=2070&auto=format&fit=crop', alt: 'Beach in Sri Lanka' },
    { id: 2, category: 'wildlife', image: 'https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=2070&auto=format&fit=crop', alt: 'Elephant in Sri Lanka' },
    { id: 3, category: 'temples', image: 'https://images.unsplash.com/photo-1578005226034-57e263212be9?q=80&w=2070&auto=format&fit=crop', alt: 'Temple in Sri Lanka' },
    { id: 4, category: 'landscapes', image: 'https://images.unsplash.com/photo-1548019979-e49b7076f9d3?q=80&w=2071&auto=format&fit=crop', alt: 'Tea Plantation in Sri Lanka' },
    { id: 5, category: 'beaches', image: 'https://images.unsplash.com/photo-1511602752689-faa2275f0e15?q=80&w=2071&auto=format&fit=crop', alt: 'Tropical Beach in Sri Lanka' },
    { id: 6, category: 'wildlife', image: 'https://images.unsplash.com/photo-1547972827-8c3f6ead948c?q=80&w=2070&auto=format&fit=crop', alt: 'Leopard in Sri Lanka' },
    { id: 7, category: 'temples', image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?q=80&w=2070&auto=format&fit=crop', alt: 'Ancient Temple in Sri Lanka' },
    { id: 8, category: 'landscapes', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop', alt: 'Coastal Landscape in Sri Lanka' }
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore the breathtaking beauty of Sri Lanka through our gallery of stunning destinations.
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
