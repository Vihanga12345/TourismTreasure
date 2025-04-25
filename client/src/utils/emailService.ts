import emailjs from '@emailjs/browser';

// EmailJS configuration with hardcoded values that we know work from your test
const SERVICE_ID = 'service_f58tvso';
const TEMPLATE_ID = 'template_mofpg9o';
const PUBLIC_KEY = '7QpUrEbr8JbgQYxUu';

// Only initialize EmailJS in a browser environment
if (typeof window !== 'undefined') {
  emailjs.init(PUBLIC_KEY);
}

interface BookingData {
  type: 'package' | 'rental' | 'custom' | 'airticket';
  [key: string]: any;
}

export const sendBookingEmail = async (bookingData: BookingData) => {
  try {
    console.log('Preparing to send email with booking data type:', bookingData.type);
    console.log('Booking data content:', JSON.stringify(bookingData, null, 2));
    
    // Validate required fields
    if (!bookingData.email) {
      console.error('Missing required field: email');
      return { success: false, message: 'Email address is required.' };
    }
    
    // Ensure we have a name one way or another
    const fullName = bookingData.name || 
                    bookingData.fullName || 
                    (bookingData.firstName && bookingData.lastName 
                      ? `${bookingData.firstName} ${bookingData.lastName}` 
                      : 'Customer');
    
    // Prepare email data for template with specific templates for each booking type
    const message = createEmailMessageContent(bookingData);
    
    const emailData = {
      name: fullName,
      time: new Date().toLocaleString(),
      message,
      email: bookingData.email,
      reply_to: bookingData.email, // Important: Makes the reply go to the customer
    };
    
    console.log('Email template data prepared:', {
      name: emailData.name,
      email: emailData.email,
      messageLength: emailData.message.length
    });
    console.log('Using EmailJS configuration:', SERVICE_ID, TEMPLATE_ID);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData
    );
    
    console.log('Email successfully sent! Response:', response);
    return { success: true, message: 'Your booking request has been sent successfully!' };
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages based on the error type
    let errorMessage = 'Failed to send booking request. Please try again or contact us directly.';
    
    if (error.message) {
      console.error('Error details:', error.message);
      
      if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out. Please check your internet connection and try again.';
      } else if (error.message.includes('Network Error')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      }
    }
    
    return { success: false, message: errorMessage };
  }
};

// Helper function to create appropriate email message content based on booking type
function createEmailMessageContent(bookingData: BookingData): string {
  const baseContent = `Booking Type: ${bookingData.type}`;
  
  // Package booking
  if (bookingData.type === 'package') {
    return `${baseContent}
Package: ${bookingData.packageName || 'Not specified'}
Travel Date: ${bookingData.date || 'Not specified'}
Travelers: ${bookingData.travelers || 'Not specified'}
Email: ${bookingData.email}
Phone: ${bookingData.phone || bookingData.mobileNumber || 'Not provided'}

Additional Information:
${bookingData.message || 'No additional information provided'}`;
  }
  
  // Car rental booking
  if (bookingData.type === 'rental') {
    return `${baseContent}
Car Model: ${bookingData.carModel || 'Not specified'}
Pickup Date: ${bookingData.startDate || 'Not specified'}
Return Date: ${bookingData.endDate || 'Not specified'}
Pickup Location: ${bookingData.location || 'Not specified'}
Driver Required: ${bookingData.driver || 'Not specified'}
Email: ${bookingData.email}
Phone: ${bookingData.phone || bookingData.mobileNumber || 'Not provided'}

Additional Information:
${bookingData.message || 'No additional information provided'}`;
  }
  
  // Air ticket booking
  if (bookingData.type === 'airticket') {
    return `${baseContent}
Tour Type: ${bookingData.tourType || 'Not specified'}
Departure: ${bookingData.departure || 'Not specified'}
Departure Date: ${bookingData.departureDate || 'Not specified'}
Arrival: ${bookingData.arrival || 'Not specified'}
${bookingData.returnDate ? `Return Date: ${bookingData.returnDate}` : ''}
Cabin Class: ${bookingData.cabinClass || 'Not specified'}
${bookingData.studentFare ? `Student Fare: ${bookingData.studentFare}` : ''}
Infants (0-2): ${bookingData.infants || 0}
Children (3-12): ${bookingData.children || 0}
Adults (13+): ${bookingData.adults || 1}
Full Name: ${bookingData.firstName || ''} ${bookingData.lastName || ''}
Email: ${bookingData.email}
Phone: ${bookingData.phone || bookingData.mobileNumber || 'Not provided'}

Additional Information:
${bookingData.message || 'No additional information provided'}`;
  }
  
  // Custom tour booking
  if (bookingData.type === 'custom') {
    return `${baseContent}
Travel Dates: ${bookingData.travelDates || 'Not specified'}
Group Size: ${bookingData.groupSize || 'Not specified'}
Accommodation: ${bookingData.accommodation || 'Not specified'}
Budget: ${bookingData.budget || 'Not specified'}
Interests: ${bookingData.interests || 'Not specified'}
Email: ${bookingData.email}
Phone: ${bookingData.phone || bookingData.mobileNumber || 'Not provided'}

Additional Information:
${bookingData.message || 'No additional information provided'}`;
  }
  
  // Generic booking (fallback)
  return `${baseContent}
Email: ${bookingData.email}
Phone: ${bookingData.phone || bookingData.mobileNumber || 'Not provided'}

Additional Information:
${bookingData.message || 'No additional information provided'}`;
}
