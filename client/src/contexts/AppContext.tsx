import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context state type
interface AppContextState {
  selectedPackage: string | null;
  selectedCar: string | null;
  setSelectedPackage: (packageName: string | null) => void;
  setSelectedCar: (carModel: string | null) => void;
  handleBookingModalOpen: (packageName: string) => void;
  handleBookingModalClose: () => void;
  handleCarModalOpen: (carModel: string) => void;
  handleCarModalClose: () => void;
}

// Create the context with default values
const AppContext = createContext<AppContextState | undefined>(undefined);

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
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

  const value = {
    selectedPackage,
    selectedCar,
    setSelectedPackage,
    setSelectedCar,
    handleBookingModalOpen,
    handleBookingModalClose,
    handleCarModalOpen,
    handleCarModalClose,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}; 