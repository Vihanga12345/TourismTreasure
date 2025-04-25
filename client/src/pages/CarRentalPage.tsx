import { useEffect } from 'react';
import CarRentals from '../components/CarRentals';

const CarRentalPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="car-rentals-page py-10">
      <CarRentals />
    </div>
  );
};

export default CarRentalPage; 