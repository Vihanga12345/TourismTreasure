import { useState } from 'react';
import { motion } from 'framer-motion';
import { tourPackages } from '../data/tourPackages';
import CustomTourForm from './forms/CustomTourForm';
import { useAppContext } from '../contexts/AppContext';

const TourPackages = () => {
  const [activeTab, setActiveTab] = useState<'premade' | 'custom'>('premade');
  const { handleBookingModalOpen } = useAppContext();

  return (
    <section id="tours" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Tour Packages</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our selection of pre-made tour packages or create your own custom experience.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white shadow-md rounded-full p-1">
            <button
              onClick={() => setActiveTab('premade')}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'premade' 
                ? 'bg-primary text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Pre-made Packages
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'custom'
                ? 'bg-primary text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Custom Tour Request
            </button>
          </div>
        </div>
        
        {/* Pre-made Packages Content */}
        <div className={activeTab === 'premade' ? 'block' : 'hidden'}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-4 py-2">
                    {pkg.duration}
                  </div>
                  {pkg.isPopular && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white font-medium px-4 py-1 text-sm">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{pkg.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(Math.floor(pkg.rating))].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                      {pkg.rating % 1 !== 0 && (
                        <i className="fas fa-star-half-alt"></i>
                      )}
                      {[...Array(5 - Math.ceil(pkg.rating))].map((_, i) => (
                        <i key={i} className="far fa-star"></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({pkg.reviewCount} reviews)</span>
                  </div>
                  <ul className="mb-4 text-gray-600 text-sm">
                    <li className="flex items-center mb-1">
                      <i className="fas fa-map-marker-alt text-secondary mr-2"></i>
                      <span>{pkg.locations}</span>
                    </li>
                    <li className="flex items-center mb-1">
                      <i className="fas fa-users text-secondary mr-2"></i>
                      <span>{pkg.groupSize}</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-calendar-alt text-secondary mr-2"></i>
                      <span>{pkg.season}</span>
                    </li>
                  </ul>
                  
                  {pkg.highlights && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Highlights:</h4>
                      <ul className="text-sm text-gray-600">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-start mb-1">
                            <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                            <span>{highlight}</span>
                          </li>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <li className="text-primary text-xs mt-1 cursor-pointer hover:underline">
                            + {pkg.highlights.length - 3} more highlights
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={() => handleBookingModalOpen(pkg.name)}
                      className="w-full py-3 bg-primary hover:bg-dark text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Custom Tour Request Form */}
        <div className={activeTab === 'custom' ? 'block' : 'hidden'}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Let us design a custom tour based on your preferences and budget.
              Our travel experts will create a personalized itinerary just for you.
            </p>
            <CustomTourForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
