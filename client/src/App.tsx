import { useEffect } from "react";
import { Toaster } from "./components/ui/toaster";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { AppProvider } from './contexts/AppContext';

// Lazy loaded pages
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/HomePage'));
const Packages = lazy(() => import('./pages/PackagesPage'));
const CarRentals = lazy(() => import('./pages/CarRentalPage'));
const AirTickets = lazy(() => import('./pages/AirTicketPage'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <BrowserRouter>
            <Suspense fallback={
              <div className="h-screen w-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="packages" element={<Packages />} />
                  <Route path="car-rentals" element={<CarRentals />} />
                  <Route path="air-tickets" element={<AirTickets />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
            <Toaster />
          </BrowserRouter>
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
