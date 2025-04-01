import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendBookingEmail } from '../../utils/emailService';

interface CarRentalFormProps {
  carModel: string;
  onClose: () => void;
}

const CarRentalForm: React.FC<CarRentalFormProps> = ({ carModel, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    location: '',
    driver: '',
    message: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendBookingEmail({
        ...formData,
        carModel,
        type: 'rental'
      });
      
      toast({
        title: "Car Rental Request Submitted",
        description: "We will contact you soon to confirm your rental.",
        variant: "default",
      });
      onClose();
    } catch (error) {
      console.error('Rental error:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <input 
            type="text" 
            id="startDate" 
            name="startDate" 
            value={formData.startDate}
            onChange={handleChange}
            placeholder="MM/DD/YYYY" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">Return Date *</label>
          <input 
            type="text" 
            id="endDate" 
            name="endDate" 
            value={formData.endDate}
            onChange={handleChange}
            placeholder="MM/DD/YYYY" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
            required 
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
          <label className="flex items-center">
            <input 
              type="radio" 
              name="driver" 
              value="no" 
              checked={formData.driver === 'no'}
              onChange={handleRadioChange}
              className="mr-2" 
            />
            <span>No, self-drive</span>
          </label>
        </div>
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
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary hover:bg-dark text-white font-medium rounded-full shadow-md transition duration-300"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Rental Request'}
      </button>
    </form>
  );
};

export default CarRentalForm;
