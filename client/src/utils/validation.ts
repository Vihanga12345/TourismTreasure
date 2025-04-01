import * as yup from 'yup';

export const bookingFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  date: yup.string().required('Travel date is required'),
  travelers: yup.string().required('Number of travelers is required'),
  message: yup.string()
});

export const carRentalFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  startDate: yup.string().required('Pickup date is required'),
  endDate: yup.string().required('Return date is required'),
  location: yup.string().required('Pickup location is required'),
  driver: yup.string().required('Please select if you need a driver'),
  message: yup.string()
});

export const customTourFormSchema = yup.object().shape({
  fullName: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  country: yup.string().required('Country is required'),
  travelDates: yup.string().required('Travel dates are required'),
  groupSize: yup.string().required('Group size is required'),
  accommodation: yup.string().required('Accommodation preference is required'),
  budget: yup.string().required('Budget range is required'),
  message: yup.string()
});

export const validatePhoneNumber = (phone: string): boolean => {
  // Basic international phone format validation
  const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
  return phoneRegex.test(phone);
};

export const validateDate = (date: string): boolean => {
  // Check if date is in MM/DD/YYYY format and is in the future
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  if (!dateRegex.test(date)) return false;
  
  const inputDate = new Date(date);
  const today = new Date();
  
  return inputDate > today;
};

export const validateDateRange = (startDate: string, endDate: string): boolean => {
  if (!validateDate(startDate) || !validateDate(endDate)) return false;
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return end > start;
};
