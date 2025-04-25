import { useEffect } from 'react';
import TourPackages from '../components/TourPackages';

const PackagesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="packages-page py-10">
      <TourPackages />
    </div>
  );
};

export default PackagesPage; 