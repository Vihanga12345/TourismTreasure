import { useState } from 'react';
import { motion } from 'framer-motion';
import { vehicles } from '../data/vehicles';

interface CarRentalsProps {
  onRentNow: (carModel: string) => void;
}

const CarRentals: React.FC<CarRentalsProps> = ({ onRentNow }) => {
  const [filterType, setFilterType] = useState('all');
  const [filterPassengers, setFilterPassengers] = useState('all');
  const [filterTransmission, setFilterTransmission] = useState('all');

  const filteredVehicles = vehicles.filter(vehicle => {
    // Type filter
    if (filterType !== 'all' && vehicle.type !== filterType) return false;
    
    // Passenger filter
    if (filterPassengers === '2-4' && parseInt(vehicle.passengers) > 4) return false;
    if (filterPassengers === '5-7' && (parseInt(vehicle.passengers) < 5 || parseInt(vehicle.passengers) > 7)) return false;
    if (filterPassengers === '8+' && parseInt(vehicle.passengers) < 8) return false;
    
    // Transmission filter
    if (filterTransmission !== 'all' && !vehicle.transmission.toLowerCase().includes(filterTransmission.toLowerCase())) return false;
    
    return true;
  });

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Car Rentals</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our fleet of well-maintained vehicles to explore Sri Lanka at your own pace.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 bg-white p-4 rounded-xl shadow-md"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="car-type" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <select 
                id="car-type" 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Types</option>
                <option value="economy">Economy</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="van">Van/Minivan</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div>
              <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
              <select 
                id="passengers" 
                value={filterPassengers}
                onChange={(e) => setFilterPassengers(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">Any</option>
                <option value="2-4">2-4 passengers</option>
                <option value="5-7">5-7 passengers</option>
                <option value="8+">8+ passengers</option>
              </select>
            </div>
            <div>
              <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
              <select 
                id="transmission" 
                value={filterTransmission}
                onChange={(e) => setFilterTransmission(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </div>
        </motion.div>
        
        {/* Car Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden card-shadow card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vehicle.image}
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {vehicle.tag && (
                  <div className={`absolute top-0 right-0 ${
                    vehicle.tag.type === 'popular' ? 'bg-accent1' : 
                    vehicle.tag.type === 'economy' ? 'bg-secondary' : 
                    'bg-accent2'
                  } text-white font-bold px-4 py-2`}>
                    {vehicle.tag.text}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">{vehicle.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-users text-accent2 mr-2"></i>
                    <span className="text-sm">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-suitcase text-accent2 mr-2"></i>
                    <span className="text-sm">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cog text-accent2 mr-2"></i>
                    <span className="text-sm">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-snowflake text-accent2 mr-2"></i>
                    <span className="text-sm">{vehicle.hasAC ? 'A/C' : 'No A/C'}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Price per day</span>
                    <p className="text-xl font-bold text-primary">{vehicle.currency}{vehicle.pricePerDay}</p>
                  </div>
                  <button 
                    onClick={() => onRentNow(vehicle.name)}
                    className="px-4 py-2 bg-primary hover:bg-dark text-white text-sm font-medium rounded-full transition duration-300"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">All vehicles come with comprehensive insurance and 24/7 roadside assistance.</p>
          <button className="px-8 py-3 bg-primary hover:bg-dark text-white font-medium rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarRentals;
