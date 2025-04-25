// Server configuration
export const config = {
  // Use PORT environment variable or default to 5000
  port: process.env.PORT || 5000,
  
  // Database connection string (example)
  dbUrl: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mydb',
  
  // Session secret
  sessionSecret: process.env.SESSION_SECRET || 'tourism-treasure-secret-key',
  
  // API keys and other sensitive info should be kept in environment variables
  sendgridApiKey: process.env.SENDGRID_API_KEY,
  
  // CORS settings
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? 'https://exclusivetravels.com' 
      : 'http://localhost:3000',
    credentials: true
  },
  
  // Environment
  isDev: process.env.NODE_ENV !== 'production'
};

// Export individual config values for easier imports
export const { 
  port, 
  dbUrl, 
  sessionSecret, 
  sendgridApiKey,
  cors, 
  isDev 
} = config; 