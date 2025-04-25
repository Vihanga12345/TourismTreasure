import { useEffect } from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import MonthlyEvents from '../components/MonthlyEvents';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import OurCustomers from '../components/OurCustomers';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <Destinations />
      <MonthlyEvents />
      <AboutUs />
      <Team />
      <OurCustomers />
    </div>
  );
};

export default HomePage; 