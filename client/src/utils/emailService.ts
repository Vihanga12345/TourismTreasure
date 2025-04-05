import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID || 'service_f58tvso';
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

// Initialize EmailJS with public key
emailjs.init(PUBLIC_KEY);

interface BookingData {
  type: 'package' | 'rental' | 'custom';
  [key: string]: any;
}

export const sendBookingEmail = async (bookingData: BookingData) => {
  try {
    // Validate EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS configuration missing:', { 
        serviceId: SERVICE_ID ? 'Set' : 'Missing', 
        templateId: TEMPLATE_ID ? 'Set' : 'Missing',
        publicKey: PUBLIC_KEY ? 'Set' : 'Missing'
      });
      return { 
        success: false, 
        message: 'Email service is not properly configured. Please contact support.' 
      };
    }
    
    // Prepare email data with recipient's email
    const emailData = {
      to_email: 'jayamannevihanga@gmail.com',
      booking_type: bookingData.type,
      ...bookingData,
      // Ensure all form fields are included
      message: bookingData.notes || bookingData.specialRequirements || 'No additional information provided'
    };
    
    console.log('Sending booking information to:', emailData.to_email);
    console.log('Using EmailJS service:', SERVICE_ID);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData,
      PUBLIC_KEY
    );
    
    console.log('Email successfully sent!', response);
    return { success: true, message: 'Your booking request has been sent successfully!' };
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages based on the error type
    let errorMessage = 'Failed to send booking request. Please try again or contact us directly.';
    
    if (error.message) {
      if (error.message.includes('Network Error') || error.message.includes('timeout')) {
        errorMessage = 'Network error: Please check your internet connection and try again.';
      } else if (error.message.includes('Invalid API key')) {
        errorMessage = 'Service configuration error: Please contact support.';
      } else if (error.message.includes('service_id')) {
        errorMessage = 'Email service ID is not valid. Please contact support.';
      } else if (error.message.includes('template_id')) {
        errorMessage = 'Email template ID is not valid. Please contact support.';
      }
      console.error('Error details:', error.message);
    }
    
    return { success: false, message: errorMessage };
  }
};
