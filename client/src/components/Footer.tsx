const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">Exclusive<span className="text-secondary">Travels</span></h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner for unforgettable Sri Lankan experiences. Discover the beauty of our island with our curated tour packages and reliable car rental services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4">Tour Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Cultural Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Wildlife Safaris</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Beach Holidays</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Adventure Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Honeymoon Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Family Holidays</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span>123 Temple Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-secondary"></i>
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-mobile-alt mt-1 mr-3 text-secondary"></i>
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-secondary"></i>
                <span>info@exclusivetravels.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-secondary"></i>
                <span>Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Exclusive Travels. All rights reserved.
            </p>
            <a 
              href="https://t3xlk.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-secondary text-sm transition-colors"
            >
              Developed by <span className="font-medium text-secondary">T3X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
