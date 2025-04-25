# Exclusive Travels - Technical Specification

## Project Overview
This document outlines the technical specifications of the Exclusive Travels website, a full-stack application designed to showcase Sri Lankan tour packages and car rental services.

## Technology Stack

### Frontend
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: TailwindCSS 3.4
- **Animation Library**: Framer Motion 11.18
- **Form Handling**: React Hook Form 7.53
- **Icons**: Font Awesome (via CDN), React Icons 5.4
- **Email Service**: EmailJS 4.4

### Backend
- **Runtime**: Node.js
- **Framework**: Express 4.21
- **Language**: TypeScript
- **TypeScript Runner**: tsx
- **API Format**: RESTful

### Database
- **Database**: Neon (PostgreSQL serverless)
- **ORM**: Drizzle ORM 0.39
- **Schema Validation**: Zod 3.23, Drizzle-Zod 0.7

### Authentication & Session Management
- **Authentication**: Passport.js 0.7 with Local Strategy
- **Session Management**: Express Session 1.18
- **Session Store**: Memory Store (development), PG Simple (production)

### Communication
- **API**: REST endpoints
- **WebSockets**: ws 8.18 for real-time features

### Email Services
- **Email Provider**: SendGrid 8.1

## Architecture

### Frontend Architecture
The frontend follows a component-based architecture with the following structure:

- **`/src`** - Main source code
  - **`/assets`** - Static assets (images, videos)
  - **`/components`** - Reusable UI components
    - **`/forms`** - Form components for bookings and inquiries
    - **`/modals`** - Modal dialog components
  - **`/data`** - Static data (tour packages, vehicles, monthly events)
  - **`/hooks`** - Custom React hooks
  - **`/utils`** - Utility functions
  - **`/styles`** - Global styles and Tailwind configuration

### Backend Architecture
The backend follows a modular architecture:

- **`/server`** - Main server code
  - **`/routes`** - API route handlers
  - **`/controllers`** - Business logic
  - **`/models`** - Data models and Drizzle schema
  - **`/middleware`** - Express middleware
  - **`/utils`** - Utility functions
  - **`/config`** - Configuration files

## Key Features

1. **Tour Package Showcase**
   - Display of various tour packages with detailed itineraries
   - Booking functionality with form validation

2. **Car Rental System**
   - Display of available vehicles with specifications
   - Rental request submission with driver options

3. **Custom Tour Requests**
   - Form for users to request customized tour packages

4. **Monthly Events Calendar**
   - Interactive display of events and activities by month
   - Weather information and travel tips

5. **Image Gallery**
   - Filterable gallery of Sri Lankan attractions

6. **Responsive Design**
   - Mobile-first approach ensuring compatibility across all devices

7. **Animations**
   - Smooth transitions and animations for enhanced user experience

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/tours` | GET | Retrieve all tour packages |
| `/api/tours/:id` | GET | Retrieve specific tour package details |
| `/api/vehicles` | GET | Retrieve all rental vehicles |
| `/api/vehicles/:id` | GET | Retrieve specific vehicle details |
| `/api/contact` | POST | Submit contact form |
| `/api/booking` | POST | Submit booking request |
| `/api/rental` | POST | Submit rental request |

## Deployment

### Development Environment
- Local development using Vite dev server for frontend
- Backend development using tsx for TypeScript execution

### Production Environment
- **Hosting Platform**: Vercel
- **Deployment Strategy**: 
  - Frontend: Static site generation
  - Backend: Serverless functions
- **Configuration**: Custom vercel.json for routing and build processes

## Performance Optimization
- Lazy loading of images
- Code splitting
- Minimal dependencies
- Optimized assets

## Security Measures
- Input validation using Zod
- Session management
- CSRF protection
- Secure email handling

## Future Enhancements
- User authentication for booking management
- Payment gateway integration
- Multilingual support
- Review and rating system
- Admin dashboard for content management

## Development Workflow
- Version control with Git
- Component-driven development
- Responsive design testing
- Cross-browser compatibility testing

---

*This technical specification is subject to updates as the project evolves.* 