import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendBookingEmail } from '../../utils/emailService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormProps {
  packageName: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ packageName, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  
  // Business WhatsApp number - updated for tour packages
  const businessWhatsAppNumber = "94775602403"; // Sri Lankan number: country code (94) + number without leading 0
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null as Date | null,
    travelers: '',
    referenceNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Format form data for WhatsApp message
  const formatWhatsAppMessage = (): string => {
    const formattedDate = formData.date 
      ? new Intl.DateTimeFormat('en-US', { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit' 
        }).format(formData.date)
      : 'Not specified';
      
    const message = `*Tour Package Booking Request*\n\n` +
      `*Package:* ${packageName}\n\n` +
      
      `*Customer Details:*\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n\n` +
      
      `*Trip Details:*\n` +
      `• Travel Date: ${formattedDate}\n` +
      `• Number of Travelers: ${formData.travelers}\n` +
      `${formData.referenceNumber ? `• Reference Number: ${formData.referenceNumber}\n\n` : '\n'}` +
      
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
        // Format date for email
        date: formData.date ? new Intl.DateTimeFormat('en-US', { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit' 
        }).format(formData.date) : '',
        packageName,
        type: 'package'
      });
      
      if (result.success) {
        toast({
          title: "Booking Request Submitted",
          description: "We will contact you soon to confirm your booking.",
          variant: "default",
        });
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Booking error:', error);
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
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
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
        // Format date for email
        date: formData.date ? new Intl.DateTimeFormat('en-US', { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit' 
        }).format(formData.date) : '',
        packageName,
        type: 'package' as 'package'
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
      <input type="hidden" name="packageName" value={packageName} />
      
      <div className="grid grid-cols-2 gap-4">
        {/* Left column fields */}
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
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
        </div>
        
        {/* Right column fields */}
        <div>
          <div className="mb-4">
            <label htmlFor="referenceNumber" className="block text-sm font-medium text-gray-700 mb-1.5">Reference Number</label>
            <input 
              type="text" 
              id="referenceNumber" 
              name="referenceNumber" 
              value={formData.referenceNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1.5">Travel Date *</label>
            <DatePicker
              selected={formData.date}
              onChange={(date: Date | null) => setFormData({ ...formData, date })}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Select travel date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1.5">Travelers *</label>
            <select 
              id="travelers" 
              name="travelers" 
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
              required
            >
              <option value="">Select</option>
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5+">5+ people</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-4 mt-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Additional Requests</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          rows={3} 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Special requirements, questions, or comments..."
        ></textarea>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button 
          type="submit" 
          disabled={isSubmitting || isCopying}
          className="px-6 py-2 bg-primary hover:bg-dark text-white font-medium rounded-lg shadow-md transition duration-300"
        >
          {isSubmitting || isCopying ? 'Processing...' : 'Book Now'}
        </button>
      </div>
      <p className="mt-4 text-xs text-gray-600">
        * We'll send your request via both email and WhatsApp for faster response.
      </p>
    </form>
  );
};

export default BookingForm;
