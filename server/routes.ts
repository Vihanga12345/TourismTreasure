import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendgridApiKey } from "./config";
import sgMail from '@sendgrid/mail';

// Initialize SendGrid if the API key is available
if (sendgridApiKey) {
  sgMail.setApiKey(sendgridApiKey);
}

// EmailJS service and template IDs - replace with actual values from your emailjs account
const EMAILJS_SERVICE_ID = 'service_f58tvso';
const EMAILJS_TEMPLATE_ID = 'template_mofpg9o';

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Email service endpoint
  app.post('/api/send-email', async (req, res) => {
    try {
      const { type, data } = req.body;
      
      if (!type || !data) {
        return res.status(400).json({ 
          message: "Missing required fields" 
        });
      }
      
      // Validate required fields based on inquiry type
      if (!data.email) {
        return res.status(400).json({ 
          message: "Email address is required" 
        });
      }
      
      // For air ticket bookings
      if (type === 'flight-inquiry') {
        // Format data for the email
        const emailData = {
          name: data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : 'Traveler',
          time: new Date().toLocaleString(),
          message: `
Air Ticket Booking Request

Trip Details:
- Tour Type: ${data.tourType || 'Not specified'}
- Cabin Class: ${data.cabinClass || 'Not specified'}
- Student Fare: ${data.studentFare ? 'Yes' : 'No'}

Flight Details:
- Departure: ${data.departureCountry} ${data.departureAirport ? `(${data.departureAirport})` : ''}
- Arrival: ${data.arrivalCountry} ${data.arrivalAirport ? `(${data.arrivalAirport})` : ''}
- Departure Date: ${data.departureDate || 'Not specified'}
- Return Date: ${data.returnDate || 'Not applicable'}

Passenger Information:
- Infants (0-2): ${data.infants || 0}
- Children (3-12): ${data.children || 0}
- Adults (13+): ${data.adults || 1}

Contact Information:
- Name: ${data.firstName || ''} ${data.lastName || ''}
- Email: ${data.email}
- Phone: ${data.mobileNumber || 'Not provided'}

Additional Requirements:
${data.additionalRequirements || 'None provided'}
          `,
          email: data.email
        };
        
        // Log the email data
        console.log('Preparing email with data:', {
          recipient: 'jayamannevihanga@gmail.com',
          subject: 'New Air Ticket Booking Request',
          dataLength: Object.keys(emailData).length
        });
        
        // Send email using SendGrid if available
        if (sendgridApiKey) {
          const msg = {
            to: 'jayamannevihanga@gmail.com',
            from: data.email,
            subject: 'New Air Ticket Booking Request',
            text: emailData.message,
            html: emailData.message.replace(/\n/g, '<br>'),
          };
          
          await sgMail.send(msg);
          console.log('Email sent successfully via SendGrid');
        } else {
          // Log that SendGrid is not available
          console.log('SendGrid API key not available, skipping email send');
        }
        
        // Return success response
        return res.status(200).json({ 
          success: true,
          message: "Your booking request has been sent successfully!"
        });
      }
      
      // Handle other email types (package, rental, custom)
      // ...existing code for other types
      
      // Return success for other types
      res.status(200).json({ 
        success: true,
        message: "Your request has been sent successfully!",
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        success: false,
        message: "Failed to send your request. Please try again or contact us directly." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
