/**
 * Structured Data templates for SEO
 * Following JSON-LD format for better Google rich results
 */

export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Exclusive Travels Sri Lanka",
    "url": "https://exclusivetravels.com",
    "logo": "https://exclusivetravels.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/ExclusiveTravelsSL",
      "https://www.instagram.com/exclusive_travels",
      "https://twitter.com/ExclusiveTravels",
      "https://www.youtube.com/ExclusiveTravelsSriLanka"
    ],
    "description": "Premium Sri Lankan tour packages and car rental services offering authentic cultural experiences and adventures.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Temple Road",
      "addressLocality": "Colombo",
      "postalCode": "03",
      "addressCountry": "Sri Lanka"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.9271",
      "longitude": "79.8612"
    },
    "telephone": "+94 11 234 5678",
    "email": "info@exclusivetravels.com",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "founder": "Exclusive Travels Team",
    "foundingDate": "2010",
    "areaServed": "Sri Lanka"
  };
};

export const createTourPackageSchema = (packageData: {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  duration: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": packageData.name,
    "description": packageData.description,
    "offers": {
      "@type": "Offer",
      "price": packageData.price,
      "priceCurrency": packageData.currency
    },
    "image": packageData.image,
    "tourOperator": {
      "@type": "Organization",
      "name": "Exclusive Travels Sri Lanka"
    },
    "touristType": ["traveler", "tourist", "family", "couple"],
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": parseInt(packageData.duration, 10),
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristAttraction",
            "name": "Sri Lankan Experience"
          }
        }
      ]
    }
  };
};

export const createCarRentalSchema = (carData: {
  name: string;
  image: string;
  pricePerDay: number;
  currency: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "RentalCarReservation",
    "name": carData.name,
    "image": carData.image,
    "provider": {
      "@type": "Organization",
      "name": "Exclusive Travels Sri Lanka"
    },
    "rentalVehicle": {
      "@type": "Car",
      "name": carData.name,
      "image": carData.image
    },
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": carData.pricePerDay,
      "priceCurrency": carData.currency,
      "unitText": "DAY"
    }
  };
};

export const createWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Exclusive Travels Sri Lanka",
    "url": "https://exclusivetravels.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://exclusivetravels.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}; 