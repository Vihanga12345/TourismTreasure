import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">About Us</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Your Trusted Sri Lankan Travel Partner</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Ceylon Explorer has been providing exceptional tourism services to visitors from around the world. Our team of experienced travel professionals is dedicated to creating memorable experiences that showcase the best of Sri Lanka.
            </p>
            <p className="text-gray-600 mb-4">
              We specialize in creating personalized tour packages and providing reliable car rental services that allow our clients to explore Sri Lanka at their own pace. Our deep local knowledge and commitment to quality service have made us a preferred choice for travelers seeking authentic Sri Lankan experiences.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <p className="text-gray-600">Happy Clients</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-gray-600">Tours Arranged</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-gray-600">Expert Guides</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Vehicles in Fleet</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1600697230088-4992c83b2804?q=80&w=2070&auto=format&fit=crop" alt="Sri Lanka Beach" className="rounded-xl shadow-lg h-48 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1595411425732-e69c1aba47d8?q=80&w=2070&auto=format&fit=crop" alt="Sri Lanka Temple" className="rounded-xl shadow-lg h-48 object-cover w-full mt-8" />
            <img src="https://images.unsplash.com/photo-1602941800793-73a0d3c73d56?q=80&w=2070&auto=format&fit=crop" alt="Sri Lanka Wildlife" className="rounded-xl shadow-lg h-48 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1596402184362-7beec30ea5c2?q=80&w=2070&auto=format&fit=crop" alt="Sri Lanka Culture" className="rounded-xl shadow-lg h-48 object-cover w-full mt-8" />
          </motion.div>
        </div>
        
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif font-bold text-primary mb-8 text-center"
          >
            Why Choose Ceylon Explorer?
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marked-alt text-2xl text-primary"></i>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3 text-center">Local Expertise</h4>
              <p className="text-gray-600 text-center">
                Our team has extensive knowledge of Sri Lanka's culture, history, and hidden gems that typical tourists might miss.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-heart text-2xl text-primary"></i>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3 text-center">Personalized Service</h4>
              <p className="text-gray-600 text-center">
                We create customized experiences based on your interests, preferences, and travel style for a truly unique journey.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3 text-center">Safety & Reliability</h4>
              <p className="text-gray-600 text-center">
                Your safety is our priority with well-maintained vehicles, trained drivers, and 24/7 customer support throughout your trip.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
