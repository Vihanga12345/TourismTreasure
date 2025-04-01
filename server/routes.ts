import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import emailjs from '@emailjs/browser';

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Email service endpoint
  app.post('/api/send-email', async (req, res) => {
    try {
      const { 
        type, 
        packageName, 
        carModel, 
        name, 
        email, 
        phone, 
        message,
        ...otherData 
      } = req.body;
      
      // Validate required fields
      if (!type || !email || !phone) {
        return res.status(400).json({ 
          message: "Missing required fields" 
        });
      }
      
      // Define which template to use based on the type
      let templateId = '';
      let templateData = {};
      
      switch (type) {
        case 'package':
          if (!packageName) {
            return res.status(400).json({ message: "Missing package name" });
          }
          templateId = process.env.EMAILJS_PACKAGE_TEMPLATE_ID || 'package_template';
          templateData = {
            packageName,
            name,
            email,
            phone,
            message,
            ...otherData
          };
          break;
          
        case 'rental':
          if (!carModel) {
            return res.status(400).json({ message: "Missing car model" });
          }
          templateId = process.env.EMAILJS_RENTAL_TEMPLATE_ID || 'rental_template';
          templateData = {
            carModel,
            name,
            email,
            phone,
            message,
            ...otherData
          };
          break;
          
        case 'custom':
          templateId = process.env.EMAILJS_CUSTOM_TEMPLATE_ID || 'custom_template';
          templateData = {
            name: otherData.fullName || name,
            email,
            phone,
            message,
            ...otherData
          };
          break;
          
        default:
          return res.status(400).json({ message: "Invalid request type" });
      }
      
      // In a real application, you would send the email here
      // For this example, we'll just log it and return a success response
      console.log('Sending email with data:', templateData);
      
      // Return success response
      res.status(200).json({ 
        message: "Email sent successfully",
        data: templateData
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        message: "Failed to send email" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
