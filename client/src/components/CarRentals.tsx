import { useState } from 'react';
import { motion } from 'framer-motion';
import { vehicles } from '../data/vehicles';

interface CarRentalsProps {
  onRentNow: (carModel: string) => void;
}

const CarRentals: React.FC<CarRentalsProps> = ({ onRentNow }) => {
  const [filterType, setFilterType] = useState('all');
  const [visibleRates, setVisibleRates] = useState<{[key: string]: boolean}>({});
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 6;

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Car Rentals</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our fleet of well-maintained vehicles to explore Sri Lanka at your own pace.
          </p>
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
                {/* Feature icons */}
                <div className="absolute top-0 left-0 z-10 bg-gray-800 bg-opacity-40 p-2 w-1/4 rounded-br-lg">
                  <div className="text-white mb-1 flex items-center">
                    <i className="fas fa-snowflake mr-1"></i>
                    <span className="text-xs">Front AC</span>
                  </div>
                  <div className="text-white mb-1 flex items-center">
                    <i className="fas fa-users mr-1"></i>
                    <span className="text-xs">{vehicle.passengers}</span>
                  </div>
                  <div className="text-white mb-1 flex items-center">
                    <i className="fas fa-suitcase mr-1"></i>
                    <span className="text-xs">{vehicle.luggage}</span>
                  </div>
                  <div className="text-white mb-1 flex items-center">
                    <i className="fas fa-gas-pump mr-1"></i>
                    <span className="text-xs">{vehicle.fuelPolicy}</span>
                  </div>
                  <div className="text-white flex items-center">
                    <i className="fas fa-road mr-1"></i>
                    <span className="text-xs">{vehicle.mileage}</span>
                  </div>
                </div>
                
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
                    onClick={() => onRentNow(vehicle.name)}
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
        
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md mb-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-primary mb-4">Driver & license requirements</h3>
            <p className="text-center mb-4 text-sm bg-gray-100 p-3 rounded border border-gray-200">
              At the car pickup, it is compulsory to hold a temporary Sri Lankan driver permit for self-driving.
            </p>
            <h4 className="font-medium mb-2">When you pick the car up, you'll need:</h4>
            <ul className="text-left text-sm mb-6">
              <li className="mb-2 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">✓</span>
                Passport or national ID card
              </li>
              <li className="mb-2 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">✓</span>
                Driving license
              </li>
              <li className="mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">✓</span>
                Credit card
              </li>
            </ul>

            {/* Security deposit section */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Security deposit</h4>
              <p className="text-sm mb-4">
                At pick-up, the main driver will leave a refundable security deposit of € 700 on their credit card. Cash and debit cards are not accepted. The counter staff will confirm how much this will be.
              </p>
              
              <h4 className="font-medium mb-2">Accepted cards</h4>
              <div className="flex gap-4 justify-center mb-4">
                <div className="text-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Master Card" className="h-8 mx-auto mb-1" />
                  <span className="text-xs">Master Card</span>
                </div>
                <div className="text-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" alt="Visa Card" className="h-8 mx-auto mb-1" />
                  <span className="text-xs">Visa Card</span>
                </div>
              </div>
            </div>

            {/* Damage Excess section */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Damage Excess</h4>
              <p className="text-sm mb-4">
                If the car's bodywork gets damaged, the most you'll pay towards repairs covered by the Collision Damage Waiver is the damage excess (€ 1000). This cover is only valid if you stick to the terms of the rental agreement.
              </p>
            </div>

            {/* Mileage section */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Mileage (Unlimited)</h4>
              <p className="text-sm mb-4">
                Your rental includes unlimited free kilometres.
              </p>
            </div>

            {/* Fuel policy section */}
            <div>
              <h4 className="font-medium mb-2">Fuel policy (Full to Full)</h4>
              <p className="text-sm">
                Your vehicle will be supplied with a full tank of fuel. To avoid incurring fuel charges, you will need to return it with the same amount of fuel as it had when you collected it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentals;

