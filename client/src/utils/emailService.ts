import emailjs from '@emailjs/browser';

// EmailJS configuration with hardcoded values that we know work from your test
const SERVICE_ID = 'service_f58tvso';
const TEMPLATE_ID = 'template_mofpg9o';
const PUBLIC_KEY = '7QpUrEbr8JbgQYxUu';

// Initialize EmailJS with public key
emailjs.init(PUBLIC_KEY);

interface BookingData {
  type: 'package' | 'rental' | 'custom';
  [key: string]: any;
}

export const sendBookingEmail = async (bookingData: BookingData) => {
  try {
    console.log('Preparing to send email with booking data:', bookingData.type);
    
    // Prepare email data for template
    const emailData = {
      name: bookingData.name || bookingData.fullName,
      time: new Date().toLocaleString(),
      message: `
Booking Type: ${bookingData.type}
${bookingData.type === 'package' ? `Package: ${bookingData.packageName}` : ''}
${bookingData.type === 'rental' ? `Car Model: ${bookingData.carModel}` : ''}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
${bookingData.date ? `Travel Date: ${bookingData.date}` : ''}
${bookingData.travelDates ? `Travel Dates: ${bookingData.travelDates}` : ''}
${bookingData.travelers ? `Travelers: ${bookingData.travelers}` : ''}
${bookingData.groupSize ? `Group Size: ${bookingData.groupSize}` : ''}
${bookingData.startDate ? `Pickup Date: ${bookingData.startDate}` : ''}
${bookingData.endDate ? `Return Date: ${bookingData.endDate}` : ''}
${bookingData.location ? `Pickup Location: ${bookingData.location}` : ''}
${bookingData.driver ? `Driver Required: ${bookingData.driver}` : ''}
${bookingData.country ? `Country: ${bookingData.country}` : ''}
${bookingData.accommodation ? `Accommodation: ${bookingData.accommodation}` : ''}
${bookingData.budget ? `Budget: ${bookingData.budget}` : ''}
${bookingData.interests ? `Interests: ${bookingData.interests}` : ''}

Additional Information:
${bookingData.message || 'No additional information provided'}
      `,
      email: 'jayamannevihanga@gmail.com' // Setting both as sender and receiver
    };
    
    console.log('Using EmailJS configuration:', SERVICE_ID, TEMPLATE_ID);
    
    // Send the email using EmailJS exactly as in your working test
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData
    );
    
    console.log('Email successfully sent!', response);
    return { success: true, message: 'Your booking request has been sent successfully!' };
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages based on the error type
    let errorMessage = 'Failed to send booking request. Please try again or contact us directly.';
    
    if (error.message) {
      console.error('Error details:', error.message);
    }
    
    return { success: false, message: errorMessage };
  }
};
