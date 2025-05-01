import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendBookingEmail } from '../../utils/emailService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  "Vatican City": "39",
  "Venezuela": "58",
  "Vietnam": "84",
  "Yemen": "967",
  "Zambia": "260",
  "Zimbabwe": "263",
  "Other": ""
};

const CustomTourForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  
  // For date range selection
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  // For phone prefix selection
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("94"); // Default Sri Lanka
  const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState(false);
  
  // Business WhatsApp number - updated for custom tours
  const businessWhatsAppNumber = "94775602403"; // Sri Lankan number: country code (94) + number without leading 0
  
  const [interests, setInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    groupSize: '',
    accommodation: '',
    budget: '',
    referenceNumber: '',
    message: ''
  });

  // Update country code when country changes
  useEffect(() => {
    if (formData.country && COUNTRY_CODES[formData.country]) {
      setSelectedCountryCode(COUNTRY_CODES[formData.country]);
    }
  }, [formData.country]);

  // Format dates as a range string for the form
  const updateDateRange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    
    if (start && end) {
      const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      const formattedStart = formatter.format(start);
      const formattedEnd = formatter.format(end);
      const dateRangeString = `${formattedStart} - ${formattedEnd}`;
      
      setFormData({
        ...formData,
        travelDates: dateRangeString
      });
    } else {
      setFormData({
        ...formData,
        travelDates: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter(i => i !== value));
    }
  };

  // Format form data for WhatsApp message
  const formatWhatsAppMessage = (): string => {
    const message = `*Custom Tour Booking Request*\n\n` +
      `*Customer Details:*\n` +
      `• Name: ${formData.fullName}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: +${selectedCountryCode} ${formData.phone}\n` +
      `• Country: ${formData.country}\n\n` +
      
      `*Tour Details:*\n` +
      `• Travel Dates: ${formData.travelDates}\n` +
      `• Group Size: ${formData.groupSize}\n` +
      `• Accommodation: ${formData.accommodation}\n` +
      `• Budget: ${formData.budget}\n` +
      `• Interests: ${interests.join(', ') || 'None specified'}\n\n` +
      
      `${formData.referenceNumber ? `• Reference Number: ${formData.referenceNumber}\n\n` : ''}` +
      
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
        phone: `+${selectedCountryCode} ${formData.phone}`,
        interests: interests.join(', '), // Convert array to string for email
        type: 'custom'
      });
      
      if (result.success) {
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          travelDates: '',
          groupSize: '',
          accommodation: '',
          budget: '',
          referenceNumber: '',
          message: ''
        });
        setInterests([]);
        setStartDate(null);
        setEndDate(null);
        setSelectedCountryCode("94"); // Reset to Sri Lanka
        
        toast({
          title: "Custom Tour Request Submitted",
          description: "We will contact you soon to discuss your custom tour.",
          variant: "default",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Custom tour error:', error);
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
    if (!formData.fullName || !formData.email || !formData.phone) {
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
    if (!formData.fullName || !formData.email || !formData.phone || !formData.travelDates) {
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
        phone: `+${selectedCountryCode} ${formData.phone}`,
        interests: interests.join(', '),
        type: 'custom' as 'custom'
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
            
            // Reset form after successful submission
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              country: '',
              travelDates: '',
              groupSize: '',
              accommodation: '',
              budget: '',
              referenceNumber: '',
              message: ''
            });
            setInterests([]);
            setStartDate(null);
            setEndDate(null);
            setSelectedCountryCode("94"); // Reset to Sri Lanka
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

  // Toggle country code dropdown
  const toggleCountryCodeDropdown = () => {
    setShowCountryCodeDropdown(!showCountryCodeDropdown);
  };

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

  return (
    <form onSubmit={handleCombinedSubmit} className="custom-form">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name<span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address<span className="text-red-500">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number<span className="text-red-500">*</span></label>
          <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg">
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
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full py-3 px-3 bg-transparent border-none focus:outline-none" 
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="referenceNumber" className="block text-sm font-medium text-gray-700 mb-2">Reference Number</label>
          <input 
            type="text" 
            id="referenceNumber" 
            name="referenceNumber" 
            value={formData.referenceNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country<span className="text-red-500">*</span></label>
          <select 
            id="country" 
            name="country" 
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
            required
          >
            <option value="">Select your country</option>
            {Object.keys(COUNTRY_CODES).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 mb-2">Travel Dates<span className="text-red-500">*</span></label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => updateDateRange(date, endDate)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="Start Date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50"
                required
              />
            </div>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => updateDateRange(startDate, date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                minDate={startDate || new Date()}
                placeholderText="End Date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50"
                required
              />
            </div>
          </div>
          {/* Hidden input to store the formatted date range */}
          <input 
            type="hidden" 
            name="travelDates" 
            value={formData.travelDates} 
          />
        </div>
        <div>
          <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers<span className="text-red-500">*</span></label>
          <select 
            id="groupSize" 
            name="groupSize" 
            value={formData.groupSize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
            required
          >
            <option value="">Select group size</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3-4">3-4 people</option>
            <option value="5-6">5-6 people</option>
            <option value="7-10">7-10 people</option>
            <option value="10+">More than 10 people</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Travel Interests</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="wildlife" 
              checked={interests.includes('wildlife')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Wildlife & Safari</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="beach" 
              checked={interests.includes('beach')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Beaches & Coastal</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="cultural" 
              checked={interests.includes('cultural')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Cultural Heritage</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="adventure" 
              checked={interests.includes('adventure')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Adventure Activities</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="hill" 
              checked={interests.includes('hill')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Hill Country & Tea</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="ayurveda" 
              checked={interests.includes('ayurveda')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Ayurveda & Wellness</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="food" 
              checked={interests.includes('food')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Food & Culinary Experiences</span>
          </label>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Preference<span className="text-red-500">*</span></label>
        <select 
          id="accommodation" 
          name="accommodation" 
          value={formData.accommodation}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
          required
        >
          <option value="">Select accommodation type</option>
          <option value="budget">Budget (2-3 star)</option>
          <option value="midrange">Mid-range (3-4 star)</option>
          <option value="luxury">Luxury (4-5 star)</option>
          <option value="mixed">Mixed categories</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per person)<span className="text-red-500">*</span></label>
        <select 
          id="budget" 
          name="budget" 
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
          required
        >
          <option value="">Select budget range</option>
          <option value="economy">Economy ($500-$800)</option>
          <option value="standard">Standard ($800-$1,200)</option>
          <option value="premium">Premium ($1,200-$2,000)</option>
          <option value="luxury">Luxury ($2,000+)</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          rows={4} 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
          placeholder="Tell us more about your preferences, special requirements, or any specific places you'd like to visit..."
        ></textarea>
      </div>
      
      <div className="flex justify-center">
        <button 
          type="submit" 
          disabled={isSubmitting || isCopying}
          className="px-8 py-3 bg-secondary hover:bg-yellow-400 text-primary font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          {isSubmitting || isCopying ? 'Processing...' : 'Submit Custom Tour Request'}
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center">
        * We'll send your request via both email and WhatsApp for faster response.
      </p>
    </form>
  );
};

export default CustomTourForm;
