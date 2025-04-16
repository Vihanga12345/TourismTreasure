export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  rating: number;
  reviewCount: number;
  locations: string;
  groupSize: string;
  season: string;
  price: number;
  currency: string;
  image: string;
  highlights?: string[];
  isPopular?: boolean;
  detailedItinerary?: string[][];
}

// Import the new package images
import colomboGalleTour from '../assets/Packages/Colombo Galle Tour.jpg';
import kandyNuwaraEliyaTour from '../assets/Packages/Kandy Nuwara Eliya Tour.jpg';
import bentotaBeachEscape from '../assets/Packages/Bentota Beach Escape.jpg';
import culturalTriangleTour from '../assets/Packages/Cultural Triangle Tour.jpeg';
import hillCountryBeachTour from '../assets/Packages/Hill Country & Beach Tour.jpeg';
import southCoastAdventure from '../assets/Packages/South Coast Adventure.jpg';
import heritageWildlifeTour from '../assets/Packages/Heritage & Wildlife Tour.jpeg';
import trainJourneyBeachTour from '../assets/Packages/Train Journey & Beach Tour.jpeg';
import beachCulturalTour from '../assets/Packages/Beach & Cultural Tour.jpg';
import natureAdventureTour from '../assets/Packages/Nature & Adventure Tour.jpg';
import culturalSpiritualTour from '../assets/Packages/Cultural & Spiritual Tour.jpeg';
import comprehensiveSriLankaTour from '../assets/Packages/Comprehensive Sri Lanka Tour.jpg';

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    name: "3-Day Colombo Galle Tour",
    duration: "3 Days",
    rating: 4.5,
    reviewCount: 32,
    locations: "Colombo, Galle, Unawatuna",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 399,
    currency: "$",
    image: colomboGalleTour,
    highlights: [
      "Explore Colombo's historic landmarks",
      "Visit the UNESCO-listed Galle Fort",
      "Relax at beautiful Unawatuna Beach"
    ],
    detailedItinerary: [
      ["Day 1", "Explore Colombo's landmarks like Independence Square, Gangaramaya Temple, and the bustling Pettah Market."],
      ["Day 2", "Travel to Galle to visit the UNESCO-listed Galle Fort, then relax at Unawatuna Beach."],
      ["Day 3", "Return to Colombo for shopping or a city tour before departure."]
    ]
  },
  {
    id: "2",
    name: "3-Day Kandy Nuwara Eliya Tour",
    duration: "3 Days",
    rating: 4.8,
    reviewCount: 48,
    locations: "Kandy, Nuwara Eliya, Colombo",
    groupSize: "2-8 people",
    season: "Best from Nov to Apr",
    price: 449,
    currency: "$",
    image: kandyNuwaraEliyaTour,
    highlights: [
      "Visit the Pinnawala Elephant Orphanage",
      "Explore the sacred Temple of the Tooth Relic",
      "Tour tea plantations in Nuwara Eliya"
    ],
    detailedItinerary: [
      ["Day 1", "Visit the Pinnawala Elephant Orphanage en route to Kandy; explore the Temple of the Tooth Relic and enjoy a cultural show."],
      ["Day 2", "Proceed to Nuwara Eliya to tour tea plantations, Gregory Lake, and Hakgala Botanical Garden."],
      ["Day 3", "Return to Colombo, visiting attractions like the National Museum and Galle Face Green."]
    ]
  },
  {
    id: "3",
    name: "3-Day Bentota Beach Escape",
    duration: "3 Days",
    rating: 4.7,
    reviewCount: 38,
    locations: "Bentota, Madu River, Colombo",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 379,
    currency: "$",
    image: bentotaBeachEscape,
    highlights: [
      "Relax on the beautiful Bentota Beach",
      "Experience the Madu River boat safari",
      "Visit a local Turtle Hatchery Farm"
    ],
    detailedItinerary: [
      ["Day 1", "Arrive in Bentota and relax at the beach."],
      ["Day 2", "Enjoy a Madu River boat safari and visit the Turtle Hatchery Farm."],
      ["Day 3", "Travel to Colombo for a city tour before departure."]
    ]
  },
  {
    id: "4",
    name: "5-Day Cultural Triangle Tour",
    duration: "5 Days",
    rating: 4.9,
    reviewCount: 56,
    locations: "Dambulla, Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya",
    groupSize: "2-8 people",
    season: "Best from Jan to May",
    price: 799,
    currency: "$",
    image: culturalTriangleTour,
    highlights: [
      "Explore ancient Buddhist cave temples at Dambulla",
      "Climb the iconic Sigiriya Rock Fortress",
      "Visit the sacred Temple of the Tooth Relic in Kandy"
    ],
    detailedItinerary: [
      ["Day 1", "Visit Dambulla Cave Temple and stay overnight in Sigiriya."],
      ["Day 2", "Climb Sigiriya Rock Fortress and explore Polonnaruwa ancient city."],
      ["Day 3", "Proceed to Kandy, visiting Matale Spice Garden and the Temple of the Tooth Relic."],
      ["Day 4", "Travel to Nuwara Eliya to tour tea plantations and Gregory Lake."],
      ["Day 5", "Return to Colombo for departure."]
    ]
  },
  {
    id: "5",
    name: "5-Day Hill Country & Beach Tour",
    duration: "5 Days",
    rating: 4.6,
    reviewCount: 42,
    locations: "Kandy, Nuwara Eliya, Bentota, Colombo",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 749,
    currency: "$",
    image: hillCountryBeachTour,
    highlights: [
      "Experience the cultural richness of Kandy",
      "Visit tea estates and waterfalls in Nuwara Eliya",
      "Relax on the beautiful beaches of Bentota"
    ],
    detailedItinerary: [
      ["Day 1", "Explore Kandy's cultural sites."],
      ["Day 2", "Visit Nuwara Eliya's tea estates and waterfalls."],
      ["Day 3", "Travel to Bentota for beach activities."],
      ["Day 4", "Enjoy water sports in Bentota."],
      ["Day 5", "Return to Colombo for departure."]
    ]
  },
  {
    id: "6",
    name: "5-Day South Coast Adventure",
    duration: "5 Days",
    rating: 4.8,
    reviewCount: 51,
    locations: "Galle, Mirissa, Yala, Ella, Colombo",
    groupSize: "2-6 people",
    season: "Best from Dec to Apr",
    price: 829,
    currency: "$",
    image: southCoastAdventure,
    highlights: [
      "Explore the historic Galle Fort",
      "Enjoy beautiful beaches and nightlife in Mirissa",
      "Experience a wildlife safari in Yala National Park"
    ],
    detailedItinerary: [
      ["Day 1", "Arrive in Galle and explore the Galle Fort."],
      ["Day 2", "Relax at Mirissa Beach and enjoy the nightlife."],
      ["Day 3", "Visit Yala National Park for a wildlife safari."],
      ["Day 4", "Travel to Ella to see Nine Arch Bridge and Little Adam's Peak."],
      ["Day 5", "Return to Colombo for departure."]
    ]
  },
  {
    id: "7",
    name: "7-Day Heritage & Wildlife Tour",
    duration: "7 Days",
    rating: 5,
    reviewCount: 64,
    locations: "Anuradhapura, Mihintale, Sigiriya, Kandy, Nuwara Eliya, Yala, Mirissa",
    groupSize: "2-8 people",
    season: "Available year-round",
    price: 1199,
    currency: "$",
    image: heritageWildlifeTour,
    highlights: [
      "Explore ancient ruins of Anuradhapura",
      "Climb the iconic Sigiriya Rock Fortress",
      "Experience exciting wildlife safari in Yala National Park"
    ],
    detailedItinerary: [
      ["Day 1", "Explore Anuradhapura's ancient ruins."],
      ["Day 2", "Visit Mihintale and proceed to Sigiriya."],
      ["Day 3", "Climb Sigiriya Rock and explore Dambulla Cave Temple."],
      ["Day 4", "Travel to Kandy, visiting Matale Spice Garden en route."],
      ["Day 5", "Proceed to Nuwara Eliya to tour tea plantations."],
      ["Day 6", "Visit Yala National Park for a safari."],
      ["Day 7", "Relax at Mirissa Beach before departure."]
    ],
    isPopular: true
  },
  {
    id: "8",
    name: "7-Day Train Journey & Beach Tour",
    duration: "7 Days",
    rating: 4.8,
    reviewCount: 57,
    locations: "Colombo, Kandy, Ella, Yala, Mirissa",
    groupSize: "2-6 people",
    season: "Best from Nov to Apr",
    price: 1099,
    currency: "$",
    image: trainJourneyBeachTour,
    highlights: [
      "Experience Colombo's vibrant city life",
      "Enjoy scenic train journey from Kandy to Ella",
      "Relax on the beautiful beaches of Mirissa"
    ],
    detailedItinerary: [
      ["Day 1", "Explore Colombo's attractions."],
      ["Day 2", "Travel to Kandy and visit the Temple of the Tooth Relic."],
      ["Day 3", "Enjoy a scenic train ride to Ella."],
      ["Day 4", "Visit Nine Arch Bridge and Little Adam's Peak."],
      ["Day 5", "Travel to Yala National Park for a safari."],
      ["Day 6", "Relax at Mirissa Beach."],
      ["Day 7", "Return to Colombo for departure."]
    ]
  },
  {
    id: "9",
    name: "7-Day Beach & Cultural Tour",
    duration: "7 Days",
    rating: 4.7,
    reviewCount: 49,
    locations: "Negombo, Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Bentota",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 999,
    currency: "$",
    image: beachCulturalTour,
    highlights: [
      "Relax on the beautiful beaches of Negombo and Bentota",
      "Explore the ancient city of Polonnaruwa",
      "Experience the cooler climate of Nuwara Eliya"
    ],
    detailedItinerary: [
      ["Day 1", "Arrive in Negombo and relax at the beach."],
      ["Day 2", "Travel to Sigiriya to climb the rock fortress."],
      ["Day 3", "Explore Polonnaruwa's ancient city."],
      ["Day 4", "Proceed to Kandy and visit cultural sites."],
      ["Day 5", "Travel to Nuwara Eliya to tour tea plantations."],
      ["Day 6", "Relax at Bentota Beach."],
      ["Day 7", "Return to Colombo for departure."]
    ]
  },
  {
    id: "10",
    name: "10-Day Nature & Adventure Tour",
    duration: "10 Days",
    rating: 5,
    reviewCount: 72,
    locations: "Colombo, Kitulgala, Nuwara Eliya, Ella, Arugam Bay, Yala, Galle",
    groupSize: "2-8 people",
    season: "Best from Apr to Sep",
    price: 1699,
    currency: "$",
    image: natureAdventureTour,
    highlights: [
      "Experience white-water rafting in Kitulgala",
      "Hike to World's End at Horton Plains",
      "Enjoy surfing at Arugam Bay"
    ],
    detailedItinerary: [
      ["Day 1", "Arrival in Colombo - Relax and explore the city's highlights: Galle Face Green, Colombo Lighthouse, and Arcade Independence Square."],
      ["Day 2", "Colombo to Kitulgala - Travel to Kitulgala, the adventure capital of Sri Lanka. Go white-water rafting and explore caves and waterfalls."],
      ["Day 3", "Kitulgala to Nuwara Eliya - Visit tea plantations and waterfalls on the way. Walk around Gregory Lake and enjoy the British colonial charm."],
      ["Day 4", "Horton Plains & Train to Ella - Hike to World's End and Baker's Falls. Take the scenic train from Nanu Oya to Ella."],
      ["Day 5", "Ella - Climb Little Adam's Peak, visit Nine Arches Bridge, and chill in cafes."],
      ["Day 6", "Ella to Arugam Bay - Drive east to Arugam Bay, a laid-back surfer's paradise."],
      ["Day 7", "Beach Day at Arugam Bay - Surf, swim, or just unwind by the beach."],
      ["Day 8", "Arugam Bay to Yala - Transfer to Yala and go on an afternoon safari."],
      ["Day 9", "Yala to Galle - Drive along the coast to Galle, explore the Galle Fort."],
      ["Day 10", "Galle to Colombo for Departure - Option to stop at a turtle hatchery in Kosgoda on the way back."]
    ],
    isPopular: true
  },
  {
    id: "11",
    name: "10-Day Cultural & Spiritual Tour",
    duration: "10 Days",
    rating: 4.9,
    reviewCount: 65,
    locations: "Negombo, Anuradhapura, Mihintale, Sigiriya, Kandy, Nuwara Eliya, Colombo",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 1599,
    currency: "$",
    image: culturalSpiritualTour,
    highlights: [
      "Explore ancient Buddhist sites in Anuradhapura",
      "Experience local village life in Hiriwadunna",
      "Visit the sacred Temple of the Tooth Relic in Kandy"
    ],
    detailedItinerary: [
      ["Day 1", "Arrival – Negombo - Rest and relax after the flight, explore Dutch canal and Negombo beach."],
      ["Day 2", "Negombo to Anuradhapura - Explore the ancient ruins and sacred Bodhi Tree."],
      ["Day 3", "Mihintale & Aukana Buddha Statue - Climb Mihintale for beautiful views and visit the impressive Aukana statue."],
      ["Day 4", "Sigiriya & Dambulla - Climb Sigiriya Rock Fortress and tour the Dambulla Cave Temple."],
      ["Day 5", "Hiriwadunna Village Tour - Enjoy a local village tour with bullock cart rides and cooking demos."],
      ["Day 6", "Matale & Kandy - Visit Aluvihare Rock Temple and a spice garden. In Kandy, see the Temple of the Tooth."],
      ["Day 7", "Peradeniya & Cultural Show - Stroll through the Royal Botanical Gardens and enjoy an evening dance performance."],
      ["Day 8", "Kandy to Nuwara Eliya - Stop by Ramboda Falls, enjoy tea tasting and the cool weather."],
      ["Day 9", "Colombo City Tour - Return to Colombo, visit the National Museum, Lotus Tower, and do last-minute shopping."],
      ["Day 10", "Departure - Drop off at Bandaranaike International Airport."]
    ]
  },
  {
    id: "12",
    name: "10-Day Comprehensive Sri Lanka Tour",
    duration: "10 Days",
    rating: 5,
    reviewCount: 78,
    locations: "Sigiriya, Dambulla, Polonnaruwa, Anuradhapura, Kandy, Nuwara Eliya, Ella, Yala, Mirissa",
    groupSize: "2-6 people",
    season: "Best from Nov to Apr",
    price: 1799,
    currency: "$",
    image: comprehensiveSriLankaTour,
    highlights: [
      "Explore the Cultural Triangle's UNESCO World Heritage sites",
      "Experience the scenic train journey to Ella",
      "Enjoy wildlife safari in Yala National Park"
    ],
    detailedItinerary: [
      ["Day 1", "Arrival – Colombo to Sigiriya - Transfer from Bandaranaike International Airport to Sigiriya."],
      ["Day 2", "Dambulla & Polonnaruwa - Visit the Dambulla Cave Temple, a UNESCO World Heritage Site."],
      ["Day 3", "Anuradhapura & Mihintale - Tour the sacred city of Anuradhapura and marvel at its dagobas and ancient tanks. Climb Mihintale."],
      ["Day 4", "Sigiriya Rock & Village Tour - Climb the iconic Sigiriya Rock Fortress."],
      ["Day 5", "Sigiriya to Kandy via Matale - Visit a spice garden in Matale and learn about Ayurveda."],
      ["Day 6", "Kandy to Nuwara Eliya - Travel through scenic hills to Nuwara Eliya."],
      ["Day 7", "Nuwara Eliya to Ella - Take the picturesque train journey to Ella. Visit Nine Arches Bridge and relax at Ella's cozy cafes."],
      ["Day 8", "Ella to Yala - Optional sunrise hike at Little Adam's Peak."],
      ["Day 9", "Yala to Mirissa - Travel along the southern coast to Mirissa."],
      ["Day 10", "Mirissa to Colombo – Departure - Stop at Galle Fort or a turtle hatchery on the way back."]
    ],
    isPopular: true
  }
];
