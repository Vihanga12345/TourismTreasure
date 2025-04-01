import { useState } from 'react';
import { motion } from 'framer-motion';
import { tourPackages } from '../data/tourPackages';
import CustomTourForm from './forms/CustomTourForm';

interface TourPackagesProps {
  onBookNow: (packageName: string) => void;
}

const TourPackages: React.FC<TourPackagesProps> = ({ onBookNow }) => {
  const [activeTab, setActiveTab] = useState<'premade' | 'custom'>('premade');

  return (
    <section id="tours" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Tour Packages</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our selection of pre-made tour packages or create your own custom experience.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center border-b">
            <button 
              onClick={() => setActiveTab('premade')}
              className={`px-6 py-3 font-medium focus:outline-none ${activeTab === 'premade' ? 'tab-active' : ''}`}
            >
              Pre-made Packages
            </button>
            <button 
              onClick={() => setActiveTab('custom')}
              className={`px-6 py-3 font-medium focus:outline-none ${activeTab === 'custom' ? 'tab-active' : ''}`}
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
                className="bg-white rounded-xl overflow-hidden card-shadow card-hover"
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
                </div>
                <div className="p-6">
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
                      <i className="fas fa-map-marker-alt text-accent2 mr-2"></i>
                      <span>{pkg.locations}</span>
                    </li>
                    <li className="flex items-center mb-1">
                      <i className="fas fa-users text-accent2 mr-2"></i>
                      <span>{pkg.groupSize}</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-calendar-alt text-accent2 mr-2"></i>
                      <span>{pkg.season}</span>
                    </li>
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-xl font-bold text-primary">{pkg.currency}{pkg.price}<span className="text-sm font-normal">/person</span></p>
                    </div>
                    <button 
                      onClick={() => onBookNow(pkg.name)}
                      className="px-4 py-2 bg-primary hover:bg-dark text-white text-sm font-medium rounded-full transition duration-300"
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
            className="bg-white rounded-xl p-8 card-shadow"
          >
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Let us design a custom tour based on your preferences and budget.
            </p>
            <CustomTourForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
