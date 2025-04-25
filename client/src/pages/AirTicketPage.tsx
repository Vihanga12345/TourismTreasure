import { useEffect } from 'react';
import AirTickets from '../components/AirTickets';
import AirlinePartners from '../components/AirlinePartners';

const AirTicketPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="air-ticket-page py-20">
      <AirTickets />
      <AirlinePartners />
    </div>
  );
};

export default AirTicketPage; 