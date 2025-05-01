import logoImage from '../assets/Gallery/Exclusive_Travels_LOGO.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Exclusive Travels Logo" 
                className="h-10 w-auto bg-white rounded-md p-1" 
              />
              <h3 className="font-serif font-bold text-2xl">Exclusive<span className="text-secondary">Travels</span></h3>
            </div>
            <p className="mb-4 text-gray-300">
              Your trusted partner for unforgettable Sri Lankan experiences. Discover the beauty of our island with our curated tour packages and reliable car rental services.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          {/* Middle Column - Contact Information */}
          <div>
            <h4 className="font-bold text-xl mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span>88/3 Main street jaela</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-secondary"></i>
                <span>+94 77 560 2403</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-secondary"></i>
                <span>slexclusivetravels@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-secondary"></i>
                <span>Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Review Platform Links */}
          <div>
            <h4 className="font-bold text-xl mb-4">Check Our Reviews</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.tripadvisor.com/Attraction_Review-g293962-d28139382-Reviews-Exclusive_Travel_and_Rent_a_Car-Colombo_Western_Province.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-white text-primary px-4 py-3 rounded-md hover:bg-secondary transition-colors"
              >
                <i className="fab fa-tripadvisor mr-2 text-lg"></i>
                <span className="font-medium">TripAdvisor</span>
              </a>
              <a 
                href="https://www.booking.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-white text-primary px-4 py-3 rounded-md hover:bg-secondary transition-colors"
              >
                <i className="fa fa-bed mr-2 text-lg"></i>
                <span className="font-medium">Booking.com</span>
              </a>
              <a 
                href="https://www.trustpilot.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-white text-primary px-4 py-3 rounded-md hover:bg-secondary transition-colors"
              >
                <i className="fa fa-star mr-2 text-lg"></i>
                <span className="font-medium">Trustpilot</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Exclusive Travels. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm">
                Developed by <a href="https://t3xlk.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-yellow-300 transition-colors">T3X</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
