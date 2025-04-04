import emailjs from '@emailjs/browser';

// EmailJS configuration (you'll need to set these up in your EmailJS account)
// Replace these with your actual values from EmailJS
const SERVICE_ID = 'service_ceylonexplorer';
const PUBLIC_KEY = 'yVJ3xoXDl_6HdFVjz';
const TEMPLATE_ID = 'template_ceylonexplorer';

interface BookingData {
  type: 'package' | 'rental' | 'custom';
  [key: string]: any;
}

export const sendBookingEmail = async (bookingData: BookingData) => {
  try {
    // Prepare email data with recipient's email
    const emailData = {
      to_email: 'jayamannevihanga@gmail.com',
      booking_type: bookingData.type,
      ...bookingData,
      // Ensure all form fields are included
      message: bookingData.notes || bookingData.specialRequirements || 'No additional information provided'
    };
    
    console.log('Sending booking information to:', emailData.to_email);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData,
      PUBLIC_KEY
    );
    
    console.log('Email successfully sent!', response);
    return { success: true, message: 'Your booking request has been sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send booking request. Please try again or contact us directly.' 
    };
  }
};
