import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-20 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
          >
            Our Services
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600"
          >
            Choose from our carefully curated tour packages or find the perfect vehicle for your Sri Lankan adventure.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tour Packages Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl overflow-hidden card-shadow card-hover"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=2070&auto=format&fit=crop" 
                alt="Sri Lanka Tour Packages" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Tour Packages</h3>
              <p className="text-gray-600 mb-6">
                Experience the best of Sri Lanka with our pre-designed tour packages or create your own custom itinerary based on your preferences.
              </p>
              <ul className="mb-8">
                <li className="flex items-start mb-3">
                  <span className="text-accent1 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <span>Pre-designed packages for popular destinations</span>
                </li>
                <li className="flex items-start mb-3">
                  <span className="text-accent1 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <span>Customized tours tailored to your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent1 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <span>Experienced guides and comfortable transportation</span>
                </li>
              </ul>
              <a href="#tours" className="inline-block px-6 py-3 bg-primary hover:bg-dark text-white font-medium rounded-full transition duration-300">
                Explore Tour Packages <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>
          
          {/* Car Rentals Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl overflow-hidden card-shadow card-hover"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" 
                alt="Car Rentals in Sri Lanka" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Car Rentals</h3>
              <p className="text-gray-600 mb-6">
                Choose from our fleet of well-maintained vehicles for a comfortable journey through Sri Lanka's scenic landscapes.
              </p>
              <ul className="mb-8">
                <li className="flex items-start mb-3">
                  <span className="text-accent1 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <span>Wide range of vehicles from economy to luxury</span>
                </li>
                <li className="flex items-start mb-3">
                  <span className="text-accent1 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <span>Options with or without experienced drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent1 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <span>Flexible rental durations and competitive rates</span>
                </li>
              </ul>
              <a href="#cars" className="inline-block px-6 py-3 bg-primary hover:bg-dark text-white font-medium rounded-full transition duration-300">
                View Car Rentals <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
