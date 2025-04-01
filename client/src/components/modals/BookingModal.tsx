import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingForm from '../forms/BookingForm';

interface BookingModalProps {
  packageName: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ packageName, isOpen, onClose }) => {
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
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 max-w-md w-full max-h-90vh overflow-y-auto m-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-primary">Book {packageName}</h3>
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            {packageName && <BookingForm packageName={packageName} onClose={onClose} />}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
