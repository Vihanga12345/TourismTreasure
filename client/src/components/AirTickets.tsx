import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToast } from "../hooks/use-toast";
import { getCountries, getAirportsByCountry, Airport } from "../data/airports";
import { sendBookingEmail } from "../utils/emailService";

interface AirTicketsProps {}

// Form data interface to ensure type safety
interface FormData {
  tourType: string;
  departureCountry: string;
  departureAirport: string;
  arrivalCountry: string;
  arrivalAirport: string;
  departureDate: Date | null;
  returnDate: Date | null;
  cabinClass: string;
  studentFare: boolean;
  infants: number;
  children: number;
  adults: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  additionalRequirements: string;
}

const AirTickets: React.FC<AirTicketsProps> = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"form" | "how-it-works">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  
  // Business WhatsApp number - updated with the actual business number
  const businessWhatsAppNumber = "94769876880"; // Sri Lankan number: country code (94) + number without leading 0
  
  // Countries list
  const [countries, setCountries] = useState<string[]>([]);
  
  // Departure airports
  const [departureAirports, setDepartureAirports] = useState<Airport[]>([]);
  
  // Arrival airports
  const [arrivalAirports, setArrivalAirports] = useState<Airport[]>([]);
  
  // Initialize form with default values
  const [formData, setFormData] = useState<FormData>({
    tourType: "One Way",
    departureCountry: "",
    departureAirport: "",
    arrivalCountry: "",
    arrivalAirport: "",
    departureDate: null,
    returnDate: null,
    cabinClass: "Economy",
    studentFare: false,
    infants: 0,
    children: 0,
    adults: 1,
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    additionalRequirements: "",
  });

  // Initialize countries when component mounts
  useEffect(() => {
    setCountries(getCountries());
  }, []);

  // Update departure airports when departure country changes
  useEffect(() => {
    if (formData.departureCountry) {
      setDepartureAirports(getAirportsByCountry(formData.departureCountry));
      // Clear the selected airport if country changes
      if (formData.departureAirport) {
        setFormData(prev => ({ ...prev, departureAirport: "" }));
      }
    } else {
      setDepartureAirports([]);
    }
  }, [formData.departureCountry]);

  // Update arrival airports when arrival country changes
  useEffect(() => {
    if (formData.arrivalCountry) {
      setArrivalAirports(getAirportsByCountry(formData.arrivalCountry));
      // Clear the selected airport if country changes
      if (formData.arrivalAirport) {
        setFormData(prev => ({ ...prev, arrivalAirport: "" }));
      }
    } else {
      setArrivalAirports([]);
    }
  }, [formData.arrivalCountry]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const updatePassengerCount = (type: 'infants' | 'children' | 'adults', increment: boolean) => {
    setFormData(prev => {
      // Get current count
      const currentCount = prev[type];
      
      // Set limits for each passenger type
      const limits = {
        infants: { min: 0, max: 5 },
        children: { min: 0, max: 10 },
        adults: { min: 1, max: 20 },
      };
      
      // Calculate new count based on increment/decrement within limits
      let newCount = increment 
        ? Math.min(currentCount + 1, limits[type].max)
        : Math.max(currentCount - 1, limits[type].min);
      
      return {
        ...prev,
        [type]: newCount
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submission started with data:", formData);
      
      // Get airport names for email
      const departureAirportInfo = departureAirports.find(a => a.code === formData.departureAirport);
      const arrivalAirportInfo = arrivalAirports.find(a => a.code === formData.arrivalAirport);
      
      console.log("Departure airport info:", departureAirportInfo);
      console.log("Arrival airport info:", arrivalAirportInfo);

      // Prepare data for email - include all filled fields
      const emailData = {
        type: 'airticket' as 'airticket',
        tourType: formData.tourType,
        departure: `${formData.departureCountry} - ${departureAirportInfo?.name || formData.departureAirport}`,
        departureDate: formData.departureDate ? formData.departureDate.toLocaleDateString() : '',
        arrival: `${formData.arrivalCountry} - ${arrivalAirportInfo?.name || formData.arrivalAirport}`,
        returnDate: formData.returnDate ? formData.returnDate.toLocaleDateString() : '',
        cabinClass: formData.cabinClass,
        studentFare: formData.studentFare ? 'Yes' : 'No',
        infants: formData.infants,
        children: formData.children,
        adults: formData.adults,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        message: formData.additionalRequirements || 'No additional requirements provided',
      };
      
      console.log("Prepared email data:", emailData);

      // Send email using EmailJS service
      console.log("Sending email via sendBookingEmail...");
      const result = await sendBookingEmail(emailData);
      console.log("Email sending result:", result);

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your flight inquiry has been sent. We'll contact you shortly.",
          variant: "default",
        });
        // Reset form after successful submission
        setFormData({
          ...formData,
          departureCountry: "",
          departureAirport: "",
          arrivalCountry: "",
          arrivalAirport: "",
          departureDate: null,
          returnDate: null,
          additionalRequirements: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format form data for WhatsApp message
  const formatWhatsAppMessage = (): string => {
    const message = `*Air Ticket Booking Request*\n\n` +
      `*Trip Details:*\n` +
      `• Tour Type: ${formData.tourType}\n` +
      `• Cabin Class: ${formData.cabinClass}\n` +
      `• Student Fare: ${formData.studentFare ? 'Yes' : 'No'}\n\n` +
      
      `*Flight Details:*\n` +
      `• Departure: ${formData.departureCountry} ${formData.departureAirport ? `(${formData.departureAirport})` : ''}\n` +
      `• Arrival: ${formData.arrivalCountry} ${formData.arrivalAirport ? `(${formData.arrivalAirport})` : ''}\n` +
      `• Departure Date: ${formData.departureDate ? formData.departureDate.toLocaleDateString() : 'Not specified'}\n` +
      `${formData.tourType === "Round Trip" ? `• Return Date: ${formData.returnDate ? formData.returnDate.toLocaleDateString() : 'Not specified'}\n` : ''}\n` +
      
      `*Passenger Information:*\n` +
      `• Infants (0-2): ${formData.infants}\n` +
      `• Children (2-12): ${formData.children}\n` +
      `• Adults (12+): ${formData.adults}\n\n` +
      
      `*Contact Information:*\n` +
      `• Name: ${formData.firstName} ${formData.lastName}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.mobileNumber}\n\n` +
      
      `*Additional Requirements:*\n` +
      `${formData.additionalRequirements || 'None provided'}`;
    
    return message;
  };
  
  // Handle WhatsApp button click
  const handleWhatsAppRequest = async () => {
    // Validate form first
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobileNumber) {
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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobileNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required contact details before continuing.",
        variant: "destructive",
      });
      return;
    }
    
    // Set both flags to indicate processing
    setIsSubmitting(true);
    setIsCopying(true);
    
    try {
      // 1. Start email submission process in background
      // Get airport names for email
      const departureAirportInfo = departureAirports.find(a => a.code === formData.departureAirport);
      const arrivalAirportInfo = arrivalAirports.find(a => a.code === formData.arrivalAirport);
      
      // Prepare data for email
      const emailData = {
        type: 'airticket' as 'airticket',
        tourType: formData.tourType,
        departure: `${formData.departureCountry} - ${departureAirportInfo?.name || formData.departureAirport}`,
        departureDate: formData.departureDate ? formData.departureDate.toLocaleDateString() : '',
        arrival: `${formData.arrivalCountry} - ${arrivalAirportInfo?.name || formData.arrivalAirport}`,
        returnDate: formData.returnDate ? formData.returnDate.toLocaleDateString() : '',
        cabinClass: formData.cabinClass,
        studentFare: formData.studentFare ? 'Yes' : 'No',
        infants: formData.infants,
        children: formData.children,
        adults: formData.adults,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        message: formData.additionalRequirements || 'No additional requirements provided',
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
      
      // Reset form for new entries (optional - you might want to keep the form data in case they want to modify and resubmit)
      // setFormData({...initial form values});
      
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-12">
          Air Tickets Booking
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white shadow-md rounded-full p-1">
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === "form"
                ? "bg-primary text-white shadow-md" 
                : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Book Air Tickets
            </button>
            <button
              onClick={() => setActiveTab("how-it-works")}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === "how-it-works"
                ? "bg-primary text-white shadow-md" 
                : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: activeTab === "form" ? 1 : 0,
            y: activeTab === "form" ? 0 : 20,
            display: activeTab === "form" ? "block" : "none"
          }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <form onSubmit={handleCombinedSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Flight & Passenger Information */}
              <div>
                {/* Trip Type Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-200">
                    Trip Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Tour Type
                      </label>
                      <select
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="One Way">One Way</option>
                        <option value="Round Trip">Round Trip</option>
                        <option value="Multi-City">Multi-City</option>
                      </select>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Cabin Class
                      </label>
                      <select
                        name="cabinClass"
                        value={formData.cabinClass}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Flight Details Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-200">
                    Flight Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Departure Country */}
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Departure Country*
                      </label>
                      <select
                        name="departureCountry"
                        value={formData.departureCountry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={`departure-${country}`} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Departure Airport */}
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Departure Airport*
                      </label>
                      <select
                        name="departureAirport"
                        value={formData.departureAirport}
                        onChange={handleChange}
                        disabled={!formData.departureCountry}
                        required
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          !formData.departureCountry ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        <option value="">
                          {formData.departureCountry
                            ? "Select Airport"
                            : "Select Country First"}
                        </option>
                        {departureAirports.map((airport) => (
                          <option
                            key={`departure-${airport.code}`}
                            value={`${airport.name} (${airport.code})`}
                          >
                            {airport.name} ({airport.code})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Arrival Country */}
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Arrival Country*
                      </label>
                      <select
                        name="arrivalCountry"
                        value={formData.arrivalCountry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={`arrival-${country}`} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Arrival Airport */}
                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Arrival Airport*
                      </label>
                      <select
                        name="arrivalAirport"
                        value={formData.arrivalAirport}
                        onChange={handleChange}
                        disabled={!formData.arrivalCountry}
                        required
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          !formData.arrivalCountry ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                      >
                        <option value="">
                          {formData.arrivalCountry
                            ? "Select Airport"
                            : "Select Country First"}
                        </option>
                        {arrivalAirports.map((airport) => (
                          <option
                            key={`arrival-${airport.code}`}
                            value={`${airport.name} (${airport.code})`}
                          >
                            {airport.name} ({airport.code})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-1">
                      <label className="block text-gray-700 font-medium mb-2">
                        Departure Date*
                      </label>
                      <DatePicker
                        selected={formData.departureDate}
                        onChange={(date) => setFormData({ ...formData, departureDate: date })}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        placeholderText="Select departure date"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    {formData.tourType === "Round Trip" && (
                      <div className="col-span-1">
                        <label className="block text-gray-700 font-medium mb-2">
                          Return Date
                        </label>
                        <DatePicker
                          selected={formData.returnDate}
                          onChange={(date) => setFormData({ ...formData, returnDate: date })}
                          dateFormat="dd/MM/yyyy"
                          minDate={formData.departureDate || new Date()}
                          placeholderText="Select return date"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="studentFare"
                        checked={formData.studentFare}
                        onChange={handleChange}
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700">Student Fare (Special discounts for students)</span>
                    </label>
                  </div>
                </div>

                {/* Passenger Details Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-200">
                    Passenger Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Infants (0-2 yrs)</label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => updatePassengerCount('infants', false)}
                          className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          name="infants"
                          value={formData.infants}
                          readOnly
                          className="w-12 py-1 text-center border-t border-b border-gray-300 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => updatePassengerCount('infants', true)}
                          className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Children (2-12 yrs)</label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => updatePassengerCount('children', false)}
                          className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          name="children"
                          value={formData.children}
                          readOnly
                          className="w-12 py-1 text-center border-t border-b border-gray-300 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => updatePassengerCount('children', true)}
                          className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Adults (12+ yrs)*</label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => updatePassengerCount('adults', false)}
                          className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          name="adults"
                          value={formData.adults}
                          readOnly
                          className="w-12 py-1 text-center border-t border-b border-gray-300 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => updatePassengerCount('adults', true)}
                          className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Information & Additional Requirements */}
              <div>
                {/* Contact Details Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-200">
                    Contact Details
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Mobile Number*
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+94 XX XXX XXXX"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-200">
                    Additional Requirements
                  </h3>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Special Requirements or Preferences
                    </label>
                    <textarea
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="Please let us know if you have any specific requirements or preferences for your flight..."
                      rows={12}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isCopying}
                  className="bg-primary text-white text-lg font-semibold px-10 py-3 rounded-lg shadow-md hover:bg-dark focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
                >
                  {isSubmitting || isCopying ? "Processing..." : "Request"}
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * We'll send your request via both email and WhatsApp for faster response.
              </p>
            </div>
          </form>
        </motion.div>

        {/* How It Works Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: activeTab === "how-it-works" ? 1 : 0,
            y: activeTab === "how-it-works" ? 0 : 20,
            display: activeTab === "how-it-works" ? "block" : "none"
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">How It Works</h3>
            <p className="text-gray-600">Our simple 4-step process to book your flights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <i className="fas fa-info-circle text-2xl text-primary"></i>
              </div>
              <h4 className="font-bold text-lg text-primary mb-3">1. Provide Your Travel Details</h4>
              <p className="text-gray-600 text-sm">
                Share your departure and destination locations, travel dates, and passenger information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <i className="fas fa-search text-2xl text-primary"></i>
              </div>
              <h4 className="font-bold text-lg text-primary mb-3">2. Flight Search & Selection</h4>
              <p className="text-gray-600 text-sm">
                Our team will search for the best available flights that match your preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <i className="fas fa-list text-2xl text-primary"></i>
              </div>
              <h4 className="font-bold text-lg text-primary mb-3">3. Review Flight Options</h4>
              <p className="text-gray-600 text-sm">
                We will present a list of suitable flight options, including pricing, schedules, and airline details.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <i className="fas fa-ticket-alt text-2xl text-primary"></i>
              </div>
              <h4 className="font-bold text-lg text-primary mb-3">4. Confirm & Finalize Your Booking</h4>
              <p className="text-gray-600 text-sm">
                Choose your preferred flight, and we'll handle the booking process for you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AirTickets; 