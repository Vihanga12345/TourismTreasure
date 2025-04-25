import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SeoComponent from './SeoComponent';
import BookingModal from './modals/BookingModal';
import CarRentalModal from './modals/CarRentalModal';
import { useAppContext } from '../contexts/AppContext';
import { Suspense } from 'react';

const Layout = () => {
  const { 
    selectedPackage, 
    selectedCar, 
    handleBookingModalClose, 
    handleCarModalClose 
  } = useAppContext();

  return (
    <div className="font-sans text-gray-800 bg-light">
      <SeoComponent />
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />

      {/* Modals */}
      <BookingModal 
        packageName={selectedPackage} 
        isOpen={selectedPackage !== null} 
        onClose={handleBookingModalClose} 
      />
      <CarRentalModal 
        carModel={selectedCar} 
        isOpen={selectedCar !== null} 
        onClose={handleCarModalClose} 
      />
    </div>
  );
};

export default Layout; 