/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003B72",   // Dark blue
        secondary: "#FFB703", // Yellow
        dark: "#002E59",      // Darker blue
        background: "#ffffff", // White background
        foreground: "#333333", // Dark text
        border: "#e5e7eb",     // Light gray border
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}; 