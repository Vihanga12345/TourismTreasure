import { createRoot } from "react-dom/client";
import emailjs from '@emailjs/browser';
import App from "./App";
import "./index.css";
import "./styles/globals.css";

// Initialize EmailJS with public key
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

if (PUBLIC_KEY) {
  try {
    emailjs.init({
      publicKey: PUBLIC_KEY as string,
    });
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Error initializing EmailJS:', error);
  }
} else {
  console.warn('EmailJS public key not found in environment variables');
}

createRoot(document.getElementById("root")!).render(<App />);
