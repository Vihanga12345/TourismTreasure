import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { monthlyData } from '../data/monthlyEvents';

const MonthlyEvents = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(
    // Start with the current month
    new Date().getMonth()
  );
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoRotateTimeoutRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const ROTATION_INTERVAL = 10000; // 10 seconds per month
  const PROGRESS_INTERVAL = 100; // Update progress every 100ms

  // Function to move to the next month
  const goToNextMonth = () => {
    setActiveMonthIndex((prevIndex) => (prevIndex + 1) % 12);
    resetProgress();
  };

  // Function to handle tab click
  const handleTabClick = (index: number) => {
    setActiveMonthIndex(index);
    // Do not stop auto-rotation, just reset progress
    resetProgress();
  };

  // Function to handle tab hover
  const handleTabHover = () => {
    // No longer stopping auto-rotation on hover
  };

  // Function to handle tab hover end
  const handleTabHoverEnd = () => {
    // No longer needed as we keep auto-rotation going
  };

  // Function to reset progress bar
  const resetProgress = () => {
    setProgress(0);
  };

  // Setup auto-rotation
  useEffect(() => {
    // Always keep auto-rotation running
    
    // Clear any existing timeout
    if (autoRotateTimeoutRef.current) {
      window.clearTimeout(autoRotateTimeoutRef.current);
    }
    
    // Set up the next rotation
    autoRotateTimeoutRef.current = window.setTimeout(() => {
      goToNextMonth();
    }, ROTATION_INTERVAL);
    
    // Set up progress bar
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
    }
    
    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (PROGRESS_INTERVAL / ROTATION_INTERVAL) * 100;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, PROGRESS_INTERVAL);
    
    // Cleanup on unmount
    return () => {
      if (autoRotateTimeoutRef.current) {
        window.clearTimeout(autoRotateTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeMonthIndex]);

  const activeMonth = monthlyData[activeMonthIndex];

  return (
    <section id="monthly-events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Events Calendar</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore Sri Lanka's vibrant cultural events, festivals, and optimal travel seasons throughout the year.
          </p>
        </motion.div>
        
        {/* Month Tabs */}
        <div className="relative mb-8 max-w-5xl mx-auto overflow-x-auto pb-2">
          <div className="flex justify-center gap-1 min-w-max">
            {monthlyData.map((month, index) => (
              <button
                key={month.id}
                onClick={() => handleTabClick(index)}
                onMouseEnter={handleTabHover}
                onMouseLeave={handleTabHoverEnd}
                className={`px-2 py-2 rounded-full text-xs font-medium transition-all duration-300 w-[60px] ${
                  activeMonthIndex === index
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {month.name.substring(0, 3)}
              </button>
            ))}
          </div>
          
          {/* Progress bar (only visible during auto-rotation) */}
          {isAutoRotating && (
            <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: `${progress}%` }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-secondary"
              />
            </div>
          )}
        </div>
        
        {/* Month Content */}
        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMonth.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 p-6 md:p-8"
            >
              {/* Left side - Images */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {activeMonth.images.map((image, index) => (
                    <div key={index} className={`rounded-xl overflow-hidden shadow-md ${index % 3 === 0 ? 'col-span-2' : ''}`}>
                      <img
                        src={image}
                        alt={`${activeMonth.name} in Sri Lanka`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-primary mb-2">Weather & Travel Tips</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-medium">Weather:</span> {activeMonth.weather}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Travel Tips:</span> {activeMonth.travelTips}
                  </p>
                </div>
              </div>
              
              {/* Right side - Description and Events */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{activeMonth.name} in Sri Lanka</h3>
                <p className="text-gray-700 mb-6">{activeMonth.description}</p>
                
                <h4 className="text-lg font-bold text-primary mb-4">Featured Events</h4>
                <div className="space-y-4">
                  {activeMonth.events.map((event) => (
                    <div key={event.id} className="bg-white p-4 rounded-xl shadow-md">
                      <div className="flex items-start">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                          event.type === 'cultural' ? 'bg-blue-100 text-blue-600' :
                          event.type === 'religious' ? 'bg-purple-100 text-purple-600' :
                          event.type === 'festival' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {event.type === 'cultural' && <i className="fas fa-landmark"></i>}
                          {event.type === 'religious' && <i className="fas fa-om"></i>}
                          {event.type === 'festival' && <i className="fas fa-music"></i>}
                          {event.type === 'seasonal' && <i className="fas fa-leaf"></i>}
                        </div>
                        <div>
                          <h5 className="font-bold text-primary">{event.name}</h5>
                          <p className="text-gray-700 text-sm mb-1">{event.description}</p>
                          <div className="flex text-xs text-gray-500 mt-2">
                            <span className="flex items-center mr-3">
                              <i className="far fa-calendar-alt mr-1"></i> {event.date}
                            </span>
                            <span className="flex items-center">
                              <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MonthlyEvents;