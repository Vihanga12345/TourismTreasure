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
}

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    name: "Cultural Triangle Tour",
    duration: "6 Days",
    rating: 4.5,
    reviewCount: 32,
    locations: "Anuradhapura, Sigiriya, Kandy",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 799,
    currency: "$",
    image: "https://images.unsplash.com/photo-1562253900-c432a0c4b2b3?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Visit ancient cities and UNESCO World Heritage sites",
      "Climb the iconic Sigiriya Rock Fortress",
      "Experience traditional cultural performances"
    ]
  },
  {
    id: "2",
    name: "Beach Paradise Tour",
    duration: "7 Days",
    rating: 5,
    reviewCount: 48,
    locations: "Bentota, Mirissa, Unawatuna",
    groupSize: "2-8 people",
    season: "Best from Nov to Apr",
    price: 899,
    currency: "$",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Relax on pristine white sandy beaches",
      "Optional water sports and whale watching",
      "Sunset beach dining experiences"
    ]
  },
  {
    id: "3",
    name: "Wildlife Safari Tour",
    duration: "5 Days",
    rating: 4,
    reviewCount: 27,
    locations: "Yala, Udawalawe, Wilpattu",
    groupSize: "2-6 people",
    season: "Available year-round",
    price: 749,
    currency: "$",
    image: "https://images.unsplash.com/photo-1609660546743-1f796d9c1ff6?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Spot leopards, elephants and hundreds of bird species",
      "Experienced wildlife guides with 4x4 jeeps",
      "Stay in eco-friendly lodges near national parks"
    ]
  },
  {
    id: "4",
    name: "Hill Country Expedition",
    duration: "8 Days",
    rating: 4.5,
    reviewCount: 36,
    locations: "Nuwara Eliya, Ella, Horton Plains",
    groupSize: "2-8 people",
    season: "Best from Jan to May",
    price: 999,
    currency: "$",
    image: "https://images.unsplash.com/photo-1592435318569-eec11bbe2be9?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Scenic train journeys through tea plantations",
      "Trek to World's End and Baker's Falls",
      "Visit colonial-era tea factories and sample Ceylon tea"
    ]
  },
  {
    id: "5",
    name: "Colombo City Explorer",
    duration: "3 Days",
    rating: 4,
    reviewCount: 21,
    locations: "Colombo, Negombo, Mount Lavinia",
    groupSize: "1-10 people",
    season: "Available year-round",
    price: 349,
    currency: "$",
    image: "https://images.unsplash.com/photo-1489493512598-d08130f49bea?q=80&w=2071&auto=format&fit=crop",
    highlights: [
      "Guided tours of historic colonial buildings",
      "Shopping expeditions to local markets",
      "Sri Lankan cuisine food tours and cooking classes"
    ]
  },
  {
    id: "6",
    name: "Complete Sri Lanka Tour",
    duration: "14 Days",
    rating: 5,
    reviewCount: 59,
    locations: "Island-wide comprehensive tour",
    groupSize: "2-6 people",
    season: "Best from Nov to Apr",
    price: 1899,
    currency: "$",
    image: "https://images.unsplash.com/photo-1580742314333-2f6be0516adc?q=80&w=2067&auto=format&fit=crop",
    highlights: [
      "Experience all highlights of Sri Lanka in one trip",
      "Balance of cultural, wildlife and beach experiences",
      "Luxury accommodations throughout the journey"
    ],
    isPopular: true
  }
];
