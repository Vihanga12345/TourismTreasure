import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingForm from '../forms/BookingForm';
import { tourPackages } from '../../data/tourPackages';

interface BookingModalProps {
  packageName: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ packageName, isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Find the selected package details when packageName changes
  useEffect(() => {
    if (packageName) {
      const packageDetails = tourPackages.find(pkg => pkg.name === packageName);
      setSelectedPackage(packageDetails);
    } else {
      setSelectedPackage(null);
    }
  }, [packageName]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 max-w-6xl w-full m-4 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-2xl font-serif font-bold text-primary">{packageName}</h3>
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Itinerary Details */}
              {selectedPackage && selectedPackage.detailedItinerary && (
                <div className="bg-gray-50 rounded-lg p-5 h-full">
                  <h4 className="text-lg font-bold text-primary mb-4 bg-gray-50">
                    <i className="fas fa-route mr-2"></i>
                    Detailed Itinerary
                  </h4>
                  <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                    {selectedPackage.detailedItinerary.map((day, index) => (
                      <div key={index} className="flex mb-2">
                        <div className="flex-shrink-0 w-20 font-bold text-primary">{day[0]}</div>
                        <div className="flex-grow text-gray-700">{day[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Right column - Booking Form */}
              <div className="h-full">
                <div className="text-gray-600 mb-4 bg-white">
                  <div className="font-bold text-lg text-primary mb-2">
                    <i className="fas fa-calendar-check mr-2"></i>
                    Book This Tour
                  </div>
                  <p>Please fill out the form below to reserve your spot.</p>
                </div>
                {packageName && <BookingForm packageName={packageName} onClose={onClose} />}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
