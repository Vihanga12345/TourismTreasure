import { motion } from 'framer-motion';

// Import the images
import sriLankanBeach from '../assets/About Us/Sri lankan Beach.jpeg';
import sriLankanNature from '../assets/About Us/Sri Lankan Nature.jpg';
import sriLankanTemple from '../assets/About Us/Sri Lankan Temple.jpg';
import sriLankanCulture from '../assets/About Us/Sri lankan Culture.jpeg';

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
            <img src={sriLankanBeach} alt="Sri Lanka Beach" className="rounded-xl shadow-lg h-48 object-cover w-full" />
            <img src={sriLankanTemple} alt="Sri Lanka Temple" className="rounded-xl shadow-lg h-48 object-cover w-full mt-8" />
            <img src={sriLankanNature} alt="Sri Lanka Nature" className="rounded-xl shadow-lg h-48 object-cover w-full" />
            <img src={sriLankanCulture} alt="Sri Lanka Culture" className="rounded-xl shadow-lg h-48 object-cover w-full mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
