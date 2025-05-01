import { useState } from 'react';
import { motion } from 'framer-motion';
import { vehicles } from '../data/vehicles';
import { useAppContext } from '../contexts/AppContext';

const CarRentals = () => {
  const [filterType, setFilterType] = useState('all');
  const [visibleRates, setVisibleRates] = useState<{[key: string]: boolean}>({});
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 6;
  const { handleCarModalOpen } = useAppContext();

  const toggleRates = (vehicleId: string) => {
    setVisibleRates(prev => ({
      ...prev,
      [vehicleId]: !prev[vehicleId]
    }));
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    // Type filter
    if (filterType !== 'all' && vehicle.type !== filterType) return false;
    return true;
  });

  // Calculate pagination
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);

  // Page change handlers
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of vehicle listings
    document.getElementById('vehicle-listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Car Rentals</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our fleet of well-maintained vehicles to explore Sri Lanka at your own pace.
          </p>
        </motion.div>
        
        {/* Driver & License Requirements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10"
        >
          <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">Driver & License Requirements</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Requirements */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-id-card text-secondary mr-2"></i>
                License Requirements
              </h4>
              <p className="text-gray-700 mb-4">
                At the car pickup, it is compulsory to hold a temporary Sri Lankan driver permit for self-driving.
              </p>
              <h5 className="font-bold text-primary mb-2">When you pick the car up, you'll need:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Passport or national ID card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Driving license</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Credit card</span>
                </li>
              </ul>
            </div>
            
            {/* Security Deposit */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-credit-card text-secondary mr-2"></i>
                Security Deposit
              </h4>
              <p className="text-gray-700 mb-4">
                At pick-up, the main driver will leave a refundable security deposit of € 700 on their credit card. Cash and debit cards are not accepted.
              </p>
              <h5 className="font-bold text-primary mb-2">Accepted cards:</h5>
              <div className="flex space-x-4 mt-4">
                <div className="flex items-center">
                  <i className="fab fa-cc-mastercard text-3xl"></i>
                  <span className="ml-2">Master Card</span>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-cc-visa text-3xl"></i>
                  <span className="ml-2">Visa Card</span>
                </div>
              </div>
            </div>
            
            {/* Damage Excess */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-car-crash text-secondary mr-2"></i>
                Damage Excess
              </h4>
              <p className="text-gray-700">
                If the car's bodywork gets damaged, the most you'll pay towards repairs covered by the Collision Damage Waiver is the damage excess (€ 1000). This cover is only valid if you stick to the terms of the rental agreement.
              </p>
            </div>
            
            {/* Mileage and Fuel */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-gas-pump text-secondary mr-2"></i>
                Mileage & Fuel Policy
              </h4>
              <div className="mb-4">
                <h5 className="font-bold text-primary mb-2 flex items-center">
                  <i className="fas fa-road text-gray-600 mr-2"></i>
                  Mileage (Unlimited)
                </h5>
                <p className="text-gray-700">
                  Your rental includes unlimited free kilometres.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-primary mb-2 flex items-center">
                  <i className="fas fa-gas-pump text-gray-600 mr-2"></i>
                  Fuel Policy (Full to Full)
                </h5>
                <p className="text-gray-700">
                  Your vehicle will be supplied with a full tank of fuel. To avoid incurring fuel charges, you will need to return it with the same amount of fuel as it had when you collected it.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Vehicle Type Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 bg-white p-4 rounded-xl shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="car-type" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <select 
                id="car-type" 
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  setCurrentPage(1); // Reset to first page when changing filter
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Types</option>
                <option value="mini">Mini Cars</option>
                <option value="economy">Economy Cars</option>
                <option value="standard">Standard Cars</option>
                <option value="semi-executive">Semi Executive Cars</option>
                <option value="executive">Executive Cars</option>
                <option value="luxury">Luxury Cars</option>
                <option value="mini-suv">Mini SUVs</option>
                <option value="large-suv">Large SUVs</option>
                <option value="mini-van">Mini Van</option>
                <option value="van">Van</option>
                <option value="weddings">Weddings</option>
                <option value="luxury-coach">Luxury Coach</option>
              </select>
            </div>
          </div>
        </motion.div>
        
        {/* Vehicle count display */}
        <div className="mb-4 text-gray-600">
          Showing {Math.min(filteredVehicles.length, indexOfFirstVehicle + 1)}-{Math.min(filteredVehicles.length, indexOfLastVehicle)} of {filteredVehicles.length} vehicles
        </div>
        
        {/* Car Listings */}
        <div id="vehicle-listings" className="grid md:grid-cols-2 gap-8">
          {currentVehicles.map((vehicle) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden card-shadow"
            >
              <div className="relative bg-gray-800 overflow-hidden">
                {/* Feature icons - hide for wedding cars */}
                {vehicle.type !== 'weddings' && (
                  <div className="absolute top-1 left-1 z-10 bg-gray-800 bg-opacity-25 p-1 w-1/6 rounded-lg shadow-sm">
                    <div className="text-white mb-0.5 flex items-center">
                      <i className="fas fa-snowflake mr-1 text-xs"></i>
                      <span className="text-xs">AC</span>
                    </div>
                    <div className="text-white mb-0.5 flex items-center">
                      <i className="fas fa-users mr-1 text-xs"></i>
                      <span className="text-xs">{vehicle.passengers}</span>
                    </div>
                    <div className="text-white mb-0.5 flex items-center">
                      <i className="fas fa-suitcase mr-1 text-xs"></i>
                      <span className="text-xs">{vehicle.luggage}</span>
                    </div>
                    <div className="text-white mb-0.5 flex items-center">
                      <i className="fas fa-gas-pump mr-1 text-xs"></i>
                      <span className="text-xs">{vehicle.fuelPolicy}</span>
                    </div>
                    <div className="text-white flex items-center">
                      <i className="fas fa-road mr-1 text-xs"></i>
                      <span className="text-xs">{vehicle.mileage}</span>
                    </div>
                  </div>
                )}
                
                {/* Car image */}
                <div className="bg-white h-64 flex items-center justify-center">
                  <img 
                    src={vehicle.image}
                    alt={vehicle.name} 
                    className="max-h-64 w-auto object-contain"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-primary mb-2">{vehicle.name}</h3>
                <div className="text-center mb-2 text-sm text-gray-500">
                  ( {vehicle.tag?.text} )
                </div>
                
                {vehicle.driverOnly && (
                  <div className="text-center mb-3 text-red-600 font-medium text-sm">
                    *** Available with Driver only ***
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="text-center text-gray-700 mb-4">
                    <p><strong>Info:</strong> Flexible cancellation with every booking.</p>
                  </div>
                  
                  {/* Rates section */}
                  {visibleRates[vehicle.id] && (
                    <div className="mb-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-bold text-primary mb-2 text-center">Rental Rates</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          {vehicle.rates.map((rate, index) => (
                            <tr key={index} className={index < vehicle.rates.length - 1 ? "border-b border-gray-200" : ""}>
                              <td className="py-2">{rate.days}</td>
                              <td className="py-2 font-medium text-right">{rate.price} {vehicle.currency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => toggleRates(vehicle.id)}
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-primary font-medium rounded-lg transition duration-300 text-sm"
                    >
                      {visibleRates[vehicle.id] ? 'Hide Rates' : 'View Rates'}
                    </button>
                  <button 
                    onClick={() => handleCarModalOpen(vehicle.name)}
                      className="px-4 py-3 bg-primary hover:bg-dark text-white font-medium rounded-lg transition duration-300 text-sm"
                  >
                    Rent Now
                  </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200 text-primary'}`}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-primary'}`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200 text-primary'}`}
              >
                <i className="fas fa-chevron-right"></i>
          </button>
        </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarRentals;

