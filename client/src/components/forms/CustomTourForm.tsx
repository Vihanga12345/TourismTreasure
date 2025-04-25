import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendBookingEmail } from '../../utils/emailService';

const CustomTourForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendBookingEmail({
        ...formData,
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

  return (
    <form onSubmit={handleSubmit} className="custom-form">
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
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number<span className="text-red-500">*</span></label>
          <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg">
            <span className="px-3 text-gray-500">LK +94</span>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="07X XXXX XXX"
              className="w-full py-3 pr-3 bg-transparent border-none focus:outline-none" 
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
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 mb-2">Travel Dates<span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="travelDates" 
            name="travelDates" 
            value={formData.travelDates}
            onChange={handleChange}
            placeholder="MM/DD/YYYY - MM/DD/YYYY" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" 
            required
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
        <label className="block text-sm font-medium text-gray-700 mb-3">Select Your Interests<span className="text-red-500">*</span></label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="interests" 
              value="beaches" 
              checked={interests.includes('beaches')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Beaches & Coastal Areas</span>
          </label>
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
              value="cultural" 
              checked={interests.includes('cultural')}
              onChange={handleInterestChange}
              className="h-4 w-4 text-primary"
            />
            <span className="ml-2">Cultural & Heritage Sites</span>
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
          disabled={isSubmitting}
          className="px-8 py-3 bg-secondary hover:bg-yellow-400 text-primary font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Custom Tour Request'}
        </button>
      </div>
    </form>
  );
};

export default CustomTourForm;
