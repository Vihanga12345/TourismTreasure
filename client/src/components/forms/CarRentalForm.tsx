import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendBookingEmail } from '../../utils/emailService';
import { vehicles } from '../../data/vehicles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CarRentalFormProps {
  carModel: string;
  onClose: () => void;
}

const CarRentalForm: React.FC<CarRentalFormProps> = ({ carModel, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  
  // Date picker states
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  
  // Business WhatsApp number - updated for car rentals
  const businessWhatsAppNumber = "94775602403"; // Sri Lankan number: country code (94) + number without leading 0
  
  // Check if this vehicle is driver-only
  const isDriverOnly = vehicles.find(v => v.name === carModel)?.driverOnly || false;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    location: '',
    driver: isDriverOnly ? 'yes' : '',
    message: ''
  });

  // Update driver selection when vehicle changes or if it's a driver-only vehicle
  useEffect(() => {
    if (isDriverOnly) {
      setFormData(prev => ({
        ...prev,
        driver: 'yes'
      }));
    }
  }, [carModel, isDriverOnly]);

  // Update date strings when date objects change
  const updatePickupDate = (date: Date | null) => {
    setPickupDate(date);
    
    if (date) {
      const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      setFormData({
        ...formData,
        startDate: formatter.format(date)
      });
      
      // If return date is earlier than pickup date, reset it
      if (returnDate && returnDate < date) {
        setReturnDate(null);
        setFormData(prev => ({
          ...prev,
          endDate: ''
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        startDate: ''
      }));
    }
  };
  
  const updateReturnDate = (date: Date | null) => {
    setReturnDate(date);
    
    if (date) {
      const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      setFormData({
        ...formData,
        endDate: formatter.format(date)
      });
    } else {
      setFormData(prev => ({
        ...prev,
        endDate: ''
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      driver: e.target.value
    });
  };

  // Format form data for WhatsApp message
  const formatWhatsAppMessage = (): string => {
    const message = `*Vehicle Rental Request*\n\n` +
      `*Vehicle:* ${carModel}\n\n` +
      
      `*Customer Details:*\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n\n` +
      
      `*Rental Details:*\n` +
      `• Pickup Date: ${formData.startDate}\n` +
      `• Return Date: ${formData.endDate}\n` +
      `• Pickup Location: ${formData.location}\n` +
      `• Driver Required: ${formData.driver === 'yes' ? 'Yes' : 'No, self-drive'}\n\n` +
      
      `*Additional Information:*\n` +
      `${formData.message || 'None provided'}`;
    
    return message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendBookingEmail({
        ...formData,
        carModel,
        type: 'rental'
      });
      
      if (result.success) {
        toast({
          title: "Car Rental Request Submitted",
          description: "We will contact you soon to confirm your rental.",
          variant: "default",
        });
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Rental error:', error);
      toast({
        title: "Submission Error",
        description: error instanceof Error ? error.message : "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // New function for handling WhatsApp redirection
  const handleWhatsAppRequest = async () => {
    // Validate form first
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required contact details before continuing.",
        variant: "destructive",
      });
      return;
    }
    
    setIsCopying(true);
    
    try {
      // Format the message
      const message = formatWhatsAppMessage();
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp with the business number and pre-filled message
      window.open(`https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`, '_blank');
      
      // Show success toast
      toast({
        title: "Opening WhatsApp",
        description: "Your booking details will be pre-filled in the WhatsApp message.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      
      toast({
        title: "Error",
        description: "Couldn't open WhatsApp with your details. Please try again or use the email option.",
        variant: "destructive",
      });
    } finally {
      setIsCopying(false);
    }
  };

  // Combined function to handle both email submission and WhatsApp
  const handleCombinedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form first
    if (!formData.name || !formData.email || !formData.phone || !formData.startDate || !formData.endDate || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before continuing.",
        variant: "destructive",
      });
      return;
    }
    
    // Set both flags to indicate processing
    setIsSubmitting(true);
    setIsCopying(true);
    
    try {
      // 1. Start email submission process in background
      // Prepare data for email
      const emailData = {
        ...formData,
        carModel,
        type: 'rental' as 'rental'
      };
      
      // Start email sending without waiting for it to complete
      const emailPromise = sendBookingEmail(emailData);
      
      // 2. Immediately proceed with WhatsApp
      // Format the message for WhatsApp
      const message = formatWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp with the business number and pre-filled message
      window.open(`https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`, '_blank');
      
      // Show success toast for WhatsApp opening
      toast({
        title: "WhatsApp Opened",
        description: "Your booking request has been prepared in WhatsApp. Just send the message to complete your request.",
        variant: "default",
      });
      
      // Now handle email result in background
      emailPromise
        .then(result => {
          if (result.success) {
            toast({
              title: "Request Received",
              description: "Your booking details have also been sent to our team via email.",
              variant: "default",
            });
            onClose();
          } else {
            // Only show email error if WhatsApp succeeded
            toast({
              title: "Email Notification",
              description: "We couldn't send your email copy, but your WhatsApp request was processed.",
              variant: "destructive",
            });
          }
        })
        .catch(error => {
          console.error("Background email error:", error);
        });
      
    } catch (error) {
      console.error('Error in combined submit:', error);
      
      toast({
        title: "Error",
        description: "Something went wrong while processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      // Reset both status flags
      setIsSubmitting(false);
      setIsCopying(false);
    }
  };

  return (
    <form onSubmit={handleCombinedSubmit}>
      <input type="hidden" name="carModel" value={carModel} />
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
          required 
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
          required 
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
          required 
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">Pickup Date *</label>
          <DatePicker
            selected={pickupDate}
            onChange={updatePickupDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Select pickup date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
          <input 
            type="hidden" 
            name="startDate" 
            value={formData.startDate} 
          />
        </div>
        
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">Return Date *</label>
          <DatePicker
            selected={returnDate}
            onChange={updateReturnDate}
            dateFormat="dd/MM/yyyy"
            minDate={pickupDate || new Date()}
            placeholderText="Select return date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
            disabled={!pickupDate}
          />
          <input 
            type="hidden" 
            name="endDate" 
            value={formData.endDate} 
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
          required 
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Driver Required? *</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input 
              type="radio" 
              name="driver" 
              value="yes" 
              checked={formData.driver === 'yes'}
              onChange={handleRadioChange}
              className="mr-2" 
              required
            />
            <span>Yes, I need a driver</span>
          </label>
          <label className={`flex items-center ${isDriverOnly ? 'opacity-50' : ''}`}>
            <input 
              type="radio" 
              name="driver" 
              value="no" 
              checked={formData.driver === 'no'}
              onChange={handleRadioChange}
              className="mr-2"
              disabled={isDriverOnly}
            />
            <span>No, self-drive</span>
          </label>
        </div>
        {isDriverOnly && (
          <p className="mt-2 text-sm text-red-600">This vehicle is available with driver only.</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          rows={4} 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting || isCopying}
        className="w-full px-6 py-3 bg-primary hover:bg-dark text-white font-medium rounded-full shadow-md transition duration-300"
      >
        {isSubmitting || isCopying ? 'Processing...' : 'Submit Rental Request'}
      </button>
      <p className="mt-4 text-xs text-gray-600 text-center">
        * We'll send your request via both email and WhatsApp for faster response.
      </p>
    </form>
  );
};

export default CarRentalForm;
