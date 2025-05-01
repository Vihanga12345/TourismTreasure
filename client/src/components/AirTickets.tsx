import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToast } from "../hooks/use-toast";
import { getCountries, getAirportsByCountry, Airport } from "../data/airports";
import { sendBookingEmail } from "../utils/emailService";

// Define country codes mapping
const COUNTRY_CODES: { [key: string]: string } = {
  "Afghanistan": "93",
  "Albania": "355",
  "Algeria": "213",
  "Angola": "244",
  "Antigua and Barbuda": "267",
  "Argentina": "54",
  "Armenia": "374",
  "Aruba": "297",
  "Australia": "61",
  "Austria": "43",
  "Azerbaijan": "994",
  "Bahamas": "241",
  "Bahrain": "973",
  "Bangladesh": "880",
  "Barbados": "245",
  "Belarus": "375",
  "Belgium": "32",
  "Belize": "501",
  "Benin": "229",
  "Bermuda": "440",
  "Bhutan": "975",
  "Bolivia": "591",
  "Bosnia and Herzegovina": "387",
  "Botswana": "267",
  "Brazil": "55",
  "Brunei": "673",
  "Bulgaria": "359",
  "Burkina Faso": "226",
  "Burundi": "257",
  "Cambodia": "855",
  "Cameroon": "237",
  "Canada": "1",
  "Cape Verde": "238",
  "Cayman Islands": "344",
  "Central African Republic": "236",
  "Chad": "235",
  "Chile": "56",
  "China": "86",
  "Colombia": "57",
  "Comoros": "269",
  "Congo (Republic)": "242",
  "Congo (Democratic Republic)": "243",
  "Costa Rica": "506",
  "Croatia": "385",
  "Cuba": "53",
  "Curaçao": "599",
  "Cyprus": "357",
  "Czech Republic": "420",
  "Denmark": "45",
  "Djibouti": "253",
  "Dominica": "766",
  "Dominican Republic": "1",
  "Ecuador": "593",
  "Egypt": "20",
  "El Salvador": "503",
  "Equatorial Guinea": "240",
  "Eritrea": "291",
  "Estonia": "372",
  "Eswatini": "268",
  "Ethiopia": "251",
  "Fiji": "679",
  "Finland": "358",
  "France": "33",
  "French Polynesia": "689",
  "Gabon": "241",
  "Gambia": "220",
  "Georgia": "995",
  "Germany": "49",
  "Ghana": "233",
  "Greece": "30",
  "Grenada": "472",
  "Guatemala": "502",
  "Guinea": "224",
  "Guinea-Bissau": "245",
  "Guyana": "592",
  "Haiti": "509",
  "Honduras": "504",
  "Hungary": "36",
  "Iceland": "354",
  "India": "91",
  "Indonesia": "62",
  "Iran": "98",
  "Iraq": "964",
  "Ireland": "353",
  "Israel": "972",
  "Italy": "39",
  "Jamaica": "1",
  "Japan": "81",
  "Jordan": "962",
  "Kazakhstan": "7",
  "Kenya": "254",
  "Kiribati": "686",
  "Kosovo": "383",
  "Kuwait": "965",
  "Kyrgyzstan": "996",
  "Laos": "856",
  "Latvia": "371",
  "Lebanon": "961",
  "Lesotho": "266",
  "Liberia": "231",
  "Libya": "218",
  "Lithuania": "370",
  "Luxembourg": "352",
  "Madagascar": "261",
  "Malawi": "265",
  "Malaysia": "60",
  "Maldives": "960",
  "Mali": "223",
  "Malta": "356",
  "Marshall Islands": "692",
  "Mauritania": "222",
  "Mauritius": "230",
  "Mexico": "52",
  "Micronesia": "691",
  "Moldova": "373",
  "Monaco": "377",
  "Mongolia": "976",
  "Montenegro": "382",
  "Morocco": "212",
  "Mozambique": "258",
  "Myanmar": "95",
  "Namibia": "264",
  "Nauru": "674",
  "Nepal": "977",
  "Netherlands": "31",
  "New Zealand": "64",
  "Nicaragua": "505",
  "Niger": "227",
  "Nigeria": "234",
  "North Korea": "850",
  "North Macedonia": "389",
  "Norway": "47",
  "Oman": "968",
  "Pakistan": "92",
  "Palau": "680",
  "Palestine": "970",
  "Panama": "507",
  "Papua New Guinea": "675",
  "Paraguay": "595",
  "Peru": "51",
  "Philippines": "63",
  "Poland": "48",
  "Portugal": "351",
  "Qatar": "974",
  "Romania": "40",
  "Russia": "7",
  "Rwanda": "250",
  "Saint Kitts and Nevis": "868",
  "Saint Lucia": "757",
  "Saint Vincent and the Grenadines": "783",
  "Samoa": "685",
  "San Marino": "378",
  "São Tomé and Príncipe": "239",
  "Saudi Arabia": "966",
  "Senegal": "221",
  "Serbia": "381",
  "Seychelles": "248",
  "Sierra Leone": "232",
  "Singapore": "65",
  "Slovakia": "421",
  "Slovenia": "386",
  "Solomon Islands": "677",
  "Somalia": "252",
  "South Africa": "27",
  "South Korea": "82",
  "South Sudan": "211",
  "Spain": "34",
  "Sri Lanka": "94",
  "Sudan": "249",
  "Suriname": "597",
  "Sweden": "46",
  "Switzerland": "41",
  "Syria": "963",
  "Taiwan": "886",
  "Tajikistan": "992",
  "Tanzania": "255",
  "Thailand": "66",
  "Timor-Leste": "670",
  "Togo": "228",
  "Tonga": "676",
  "Trinidad and Tobago": "867",
  "Tunisia": "216",
  "Turkey": "90",
  "Turkmenistan": "993",
  "Tuvalu": "688",
  "Uganda": "256",
  "Ukraine": "380",
  "United Arab Emirates": "971",
  "United Kingdom": "44",
  "United States": "1",
  "Uruguay": "598",
  "Uzbekistan": "998",
  "Vanuatu": "678",
  "Vatican City": "379",
  "Venezuela": "58",
  "Vietnam": "84",
  "Yemen": "967",
  "Zambia": "260",
  "Zimbabwe": "263",
};

interface AirTicketsProps {}

// Form data interface to ensure type safety
interface FlightSegment {
  departureCountry: string;
  departureAirport: string;
  arrivalCountry: string;
  arrivalAirport: string;
  departureDate: Date | null;
}

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
  // New field for country selection
  country: string;
  // New field to store multiple flight segments for multi-city
  flightSegments: FlightSegment[];
}

const AirTickets: React.FC<AirTicketsProps> = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"form" | "how-it-works">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  
  // Business WhatsApp number - updated for Air Tickets specifically
  const businessWhatsAppNumber = "94775325285"; // Sri Lankan number: country code (94) + number without leading 0
  
  // Country code dropdown state
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("94"); // Default to Sri Lanka
  const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState<boolean>(false);
  
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
    country: "",
    flightSegments: [],
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

  // Update country code when country changes
  useEffect(() => {
    if (formData.country && COUNTRY_CODES[formData.country]) {
      setSelectedCountryCode(COUNTRY_CODES[formData.country]);
    }
  }, [formData.country]);

  // Close country code dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.country-code-dropdown') && !target.closest('.country-code-selector')) {
        setShowCountryCodeDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          flightSegments: [],
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
    let flightDetailsSection = '';
    
    // Format the flight details based on tour type
    if (formData.tourType === "Multi-City") {
      // Format multi-city flight segments
      flightDetailsSection = `*Flight Details (Multi-City):*\n`;
      formData.flightSegments.forEach((segment, index) => {
        flightDetailsSection += `\n*Flight ${index + 1}:*\n`;
        flightDetailsSection += `• Departure: ${segment.departureCountry} ${segment.departureAirport ? `(${segment.departureAirport})` : ''}\n`;
        flightDetailsSection += `• Arrival: ${segment.arrivalCountry} ${segment.arrivalAirport ? `(${segment.arrivalAirport})` : ''}\n`;
        flightDetailsSection += `• Date: ${segment.departureDate ? segment.departureDate.toLocaleDateString() : 'Not specified'}\n`;
      });
    } else {
      // Format one-way or round-trip flight details
      flightDetailsSection = `*Flight Details (${formData.tourType}):*\n`;
      flightDetailsSection += `• Departure: ${formData.departureCountry} ${formData.departureAirport ? `(${formData.departureAirport})` : ''}\n`;
      flightDetailsSection += `• Arrival: ${formData.arrivalCountry} ${formData.arrivalAirport ? `(${formData.arrivalAirport})` : ''}\n`;
      flightDetailsSection += `• Departure Date: ${formData.departureDate ? formData.departureDate.toLocaleDateString() : 'Not specified'}\n`;
      flightDetailsSection += formData.tourType === "Round Trip" ? `• Return Date: ${formData.returnDate ? formData.returnDate.toLocaleDateString() : 'Not specified'}\n` : '';
    }
    
    const message = `*Air Ticket Booking Request*\n\n` +
      `*Trip Details:*\n` +
      `• Tour Type: ${formData.tourType}\n` +
      `• Cabin Class: ${formData.cabinClass}\n` +
      `• Student Fare: ${formData.studentFare ? 'Yes' : 'No'}\n\n` +
      
      flightDetailsSection + `\n` +
      
      `*Passenger Information:*\n` +
      `• Infants (0-2): ${formData.infants}\n` +
      `• Children (2-12): ${formData.children}\n` +
      `• Adults (12+): ${formData.adults}\n\n` +
      
      `*Contact Information:*\n` +
      `• Name: ${formData.firstName} ${formData.lastName}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: +${selectedCountryCode} ${formData.mobileNumber}\n\n` +
      
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

    // Extra validation for multi-city
    if (formData.tourType === "Multi-City") {
      // Check if all flight segments have required fields
      const invalidSegments = formData.flightSegments.filter(
        segment => !segment.departureCountry || !segment.departureAirport || 
                  !segment.arrivalCountry || !segment.arrivalAirport || 
                  !segment.departureDate
      );
      
      if (invalidSegments.length > 0) {
        toast({
          title: "Incomplete Flight Details",
          description: "Please fill in all required flight details for each segment.",
          variant: "destructive",
        });
        return;
      }
    } else {
      // One-way or round-trip validation
      if (!formData.departureCountry || !formData.departureAirport || 
          !formData.arrivalCountry || !formData.arrivalAirport || 
          !formData.departureDate) {
        toast({
          title: "Incomplete Flight Details",
          description: "Please fill in all required flight details.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Set both flags to indicate processing
    setIsSubmitting(true);
    setIsCopying(true);
    
    try {
      // 1. Start email submission process in background
      // Prepare email data based on tour type
      let emailData: any = {
        type: 'airticket' as 'airticket',
        tourType: formData.tourType,
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
      
      if (formData.tourType === "Multi-City") {
        // Add multi-city flight details to email data
        emailData.flightSegments = formData.flightSegments.map((segment, index) => ({
          segmentNumber: index + 1,
          departure: `${segment.departureCountry} - ${segment.departureAirport}`,
          arrival: `${segment.arrivalCountry} - ${segment.arrivalAirport}`,
          departureDate: segment.departureDate ? segment.departureDate.toLocaleDateString() : '',
        }));
      } else {
        // Add one-way or round-trip flight details
        const departureAirportInfo = departureAirports.find(a => a.code === formData.departureAirport);
        const arrivalAirportInfo = arrivalAirports.find(a => a.code === formData.arrivalAirport);
        
        emailData.departure = `${formData.departureCountry} - ${departureAirportInfo?.name || formData.departureAirport}`;
        emailData.departureDate = formData.departureDate ? formData.departureDate.toLocaleDateString() : '';
        emailData.arrival = `${formData.arrivalCountry} - ${arrivalAirportInfo?.name || formData.arrivalAirport}`;
        emailData.returnDate = formData.returnDate ? formData.returnDate.toLocaleDateString() : '';
      }
      
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

  // Function to add a new flight segment for multi-city
  const addFlightSegment = () => {
    // Don't allow more than 5 segments to prevent abuse
    if (formData.flightSegments.length >= 5) {
      toast({
        title: "Maximum Segments Reached",
        description: "You can add up to 5 flight segments for a multi-city trip.",
        variant: "destructive",
      });
      return;
    }

    // Add a new empty segment
    setFormData({
      ...formData,
      flightSegments: [
        ...formData.flightSegments,
        {
          departureCountry: "",
          departureAirport: "",
          arrivalCountry: "",
          arrivalAirport: "",
          departureDate: null,
        }
      ]
    });
  };

  // Function to remove a flight segment
  const removeFlightSegment = (index: number) => {
    // Don't allow removing all segments
    if (formData.flightSegments.length <= 1) {
      return;
    }

    const updatedSegments = [...formData.flightSegments];
    updatedSegments.splice(index, 1);
    
    setFormData({
      ...formData,
      flightSegments: updatedSegments
    });
  };

  // Function to update a specific flight segment
  const updateFlightSegment = (index: number, field: keyof FlightSegment, value: any) => {
    const updatedSegments = [...formData.flightSegments];
    updatedSegments[index] = {
      ...updatedSegments[index],
      [field]: value
    };

    setFormData({
      ...formData,
      flightSegments: updatedSegments
    });
  };

  // Initialize flight segments when tour type is changed to Multi-City
  useEffect(() => {
    if (formData.tourType === "Multi-City" && formData.flightSegments.length === 0) {
      // Initialize with 2 empty segments
      setFormData({
        ...formData,
        flightSegments: [
          {
            departureCountry: "",
            departureAirport: "",
            arrivalCountry: "",
            arrivalAirport: "",
            departureDate: null,
          },
          {
            departureCountry: "",
            departureAirport: "",
            arrivalCountry: "",
            arrivalAirport: "",
            departureDate: null,
          }
        ]
      });
    }
  }, [formData.tourType]);

  // Toggle country code dropdown
  const toggleCountryCodeDropdown = () => {
    setShowCountryCodeDropdown(!showCountryCodeDropdown);
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
                  
                  {/* For One Way and Round Trip */}
                  {(formData.tourType === "One Way" || formData.tourType === "Round Trip") && (
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
                  )}
                  
                  {/* For Multi-City */}
                  {formData.tourType === "Multi-City" && (
                    <div className="space-y-6">
                      {formData.flightSegments.map((segment, index) => (
                        <div key={`segment-${index}`} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-lg font-bold text-primary">Flight {index + 1}</h4>
                            {formData.flightSegments.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeFlightSegment(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <i className="fas fa-times"></i> Remove
                              </button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Departure Country */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Departure Country*
                              </label>
                              <select
                                value={segment.departureCountry}
                                onChange={(e) => updateFlightSegment(index, 'departureCountry', e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                  <option key={`seg-${index}-dep-${country}`} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Departure Airport */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Departure Airport*
                              </label>
                              <select
                                value={segment.departureAirport}
                                onChange={(e) => updateFlightSegment(index, 'departureAirport', e.target.value)}
                                disabled={!segment.departureCountry}
                                required
                                className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                                  !segment.departureCountry ? "bg-gray-100 cursor-not-allowed" : ""
                                }`}
                              >
                                <option value="">
                                  {segment.departureCountry
                                    ? "Select Airport"
                                    : "Select Country First"}
                                </option>
                                {segment.departureCountry && getAirportsByCountry(segment.departureCountry).map((airport) => (
                                  <option
                                    key={`seg-${index}-dep-${airport.code}`}
                                    value={`${airport.name} (${airport.code})`}
                                  >
                                    {airport.name} ({airport.code})
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Arrival Country */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Arrival Country*
                              </label>
                              <select
                                value={segment.arrivalCountry}
                                onChange={(e) => updateFlightSegment(index, 'arrivalCountry', e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                  <option key={`seg-${index}-arr-${country}`} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Arrival Airport */}
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Arrival Airport*
                              </label>
                              <select
                                value={segment.arrivalAirport}
                                onChange={(e) => updateFlightSegment(index, 'arrivalAirport', e.target.value)}
                                disabled={!segment.arrivalCountry}
                                required
                                className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                                  !segment.arrivalCountry ? "bg-gray-100 cursor-not-allowed" : ""
                                }`}
                              >
                                <option value="">
                                  {segment.arrivalCountry
                                    ? "Select Airport"
                                    : "Select Country First"}
                                </option>
                                {segment.arrivalCountry && getAirportsByCountry(segment.arrivalCountry).map((airport) => (
                                  <option
                                    key={`seg-${index}-arr-${airport.code}`}
                                    value={`${airport.name} (${airport.code})`}
                                  >
                                    {airport.name} ({airport.code})
                                  </option>
                                ))}
                              </select>
                            </div>
                            
                            {/* Date for this segment */}
                            <div className="md:col-span-2">
                              <label className="block text-gray-700 font-medium mb-2">
                                Departure Date*
                              </label>
                              <DatePicker
                                selected={segment.departureDate}
                                onChange={(date) => updateFlightSegment(index, 'departureDate', date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                placeholderText="Select departure date"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Add Another Flight button */}
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={addFlightSegment}
                          className="flex items-center justify-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
                        >
                          <i className="fas fa-plus mr-2"></i> Add Another Flight
                        </button>
                      </div>
                    </div>
                  )}

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
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select your country</option>
                        {Object.keys(COUNTRY_CODES).map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <label className="block text-gray-700 font-medium mb-2">Mobile Number <span className="text-red-500">*</span></label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <div className="relative country-code-selector">
                          <div 
                            className="px-3 text-gray-500 cursor-pointer flex items-center gap-1 border-r border-gray-300 h-full"
                            onClick={toggleCountryCodeDropdown}
                          >
                            +{selectedCountryCode} <i className="fas fa-caret-down text-xs ml-1"></i>
                          </div>
                          
                          {/* Country code dropdown */}
                          {showCountryCodeDropdown && (
                            <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto z-50 w-64 country-code-dropdown">
                              <div className="sticky top-0 bg-white p-2 border-b border-gray-200">
                                <input 
                                  type="text" 
                                  placeholder="Search country..."
                                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                                  onClick={(e) => e.stopPropagation()}
                                  onChange={(e) => {
                                    // Implement search filter logic if needed
                                  }}
                                />
                              </div>
                              <div className="p-1">
                                {Object.entries(COUNTRY_CODES).map(([country, code]) => (
                                  <div 
                                    key={country} 
                                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${selectedCountryCode === code ? 'bg-gray-100' : ''}`}
                                    onClick={() => {
                                      setSelectedCountryCode(code);
                                      setShowCountryCodeDropdown(false);
                                    }}
                                  >
                                    <span className="font-medium">+{code}</span> {country}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <input 
                          type="tel" 
                          name="mobileNumber" 
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          className="w-full py-2 px-3 bg-transparent border-none focus:outline-none" 
                          required
                        />
                      </div>
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