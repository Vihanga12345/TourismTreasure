import emailjs from '@emailjs/browser';

interface BookingData {
  type: 'package' | 'rental' | 'custom';
  [key: string]: any;
}

export const sendBookingEmail = async (bookingData: BookingData) => {
  const serviceId = process.env.EMAILJS_SERVICE_ID || 'default_service';
  const templateId = getTemplateId(bookingData.type);
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'default_key';

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      bookingData,
      publicKey
    );
    
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};

const getTemplateId = (type: string): string => {
  const templateIds = {
    package: process.env.EMAILJS_PACKAGE_TEMPLATE_ID || 'package_template',
    rental: process.env.EMAILJS_RENTAL_TEMPLATE_ID || 'rental_template',
    custom: process.env.EMAILJS_CUSTOM_TEMPLATE_ID || 'custom_template'
  };
  
  return templateIds[type as keyof typeof templateIds] || templateIds.package;
};
