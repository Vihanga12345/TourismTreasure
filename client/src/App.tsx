import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MonthlyEvents from "./components/MonthlyEvents";
import TourPackages from "./components/TourPackages";
import CarRentals from "./components/CarRentals";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingModal from "./components/modals/BookingModal";
import CarRentalModal from "./components/modals/CarRentalModal";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

function App() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  const handleBookingModalOpen = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  const handleBookingModalClose = () => {
    setSelectedPackage(null);
  };

  const handleCarModalOpen = (carModel: string) => {
    setSelectedCar(carModel);
  };

  const handleCarModalClose = () => {
    setSelectedCar(null);
  };

  // Initialize AOS animation library
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-sans text-gray-800 bg-light">
        <Navbar />
        <Hero />
        <Services />
        <TourPackages onBookNow={handleBookingModalOpen} />
        <CarRentals onRentNow={handleCarModalOpen} />
        <AboutUs />
        <Gallery />
        <Team />
        <MonthlyEvents />
        <Testimonials />
        <Footer />
        <BookingModal 
          packageName={selectedPackage} 
          isOpen={selectedPackage !== null} 
          onClose={handleBookingModalClose} 
        />
        <CarRentalModal 
          carModel={selectedCar} 
          isOpen={selectedCar !== null} 
          onClose={handleCarModalClose} 
        />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
