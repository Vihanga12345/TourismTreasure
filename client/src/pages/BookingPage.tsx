import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/forms/BookingForm';
import { tourPackages } from '../data/tourPackages';

const BookingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Get selected package from session storage
    const packageName = sessionStorage.getItem('selectedPackage');
    if (packageName) {
      setSelectedPackage(packageName);
    } else {
      // If no package selected, redirect to packages page
      navigate('/packages');
    }
  }, [navigate]);
  
  // Find the package details
  const packageDetails = tourPackages.find(pkg => pkg.name === selectedPackage);

  const handleClose = () => {
    // Navigate back to packages page
    navigate('/packages');
  };

  return (
    <div className="booking-page py-20">
      <div className="container mx-auto px-4 pt-16 max-w-6xl">
        <h1 className="text-4xl font-serif font-bold text-primary text-center mb-8">Book Your Tour</h1>
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          {packageDetails && (
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">{packageDetails.name}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column - Itinerary Details */}
                {packageDetails.detailedItinerary && (
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-primary mb-4">
                      <i className="fas fa-route mr-2"></i>
                      Detailed Itinerary
                    </h4>
                    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                      {packageDetails.detailedItinerary.map((day, index) => (
                        <div key={index} className="flex mb-2">
                          <div className="flex-shrink-0 w-20 font-bold text-primary">{day[0]}</div>
                          <div className="flex-grow text-gray-700">{day[1]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Right column - Booking Form */}
                <div>
                  <div className="text-gray-600 mb-4">
                    <div className="font-bold text-lg text-primary mb-2">
                      <i className="fas fa-calendar-check mr-2"></i>
                      Book This Tour
                    </div>
                    <p>Please fill out the form below to reserve your spot.</p>
                  </div>
                  {selectedPackage && (
                    <BookingForm packageName={selectedPackage} onClose={handleClose} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 