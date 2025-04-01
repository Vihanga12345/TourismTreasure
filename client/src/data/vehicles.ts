export interface Vehicle {
  id: string;
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  transmission: string;
  hasAC: boolean;
  pricePerDay: number;
  currency: string;
  type: string;
  tag?: {
    text: string;
    type: 'popular' | 'economy' | 'premium';
  };
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Toyota Corolla",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=2069&auto=format&fit=crop",
    passengers: "4 Passengers",
    luggage: "2 Large Bags",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 35,
    currency: "$",
    type: "sedan",
    tag: {
      text: "Most Popular",
      type: "popular"
    }
  },
  {
    id: "2",
    name: "Toyota Hiace Van",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1970&auto=format&fit=crop",
    passengers: "8-10 Passengers",
    luggage: "5+ Large Bags",
    transmission: "Manual",
    hasAC: true,
    pricePerDay: 75,
    currency: "$",
    type: "van"
  },
  {
    id: "3",
    name: "Honda CR-V",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop",
    passengers: "5 Passengers",
    luggage: "3 Large Bags",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 55,
    currency: "$",
    type: "suv"
  },
  {
    id: "4",
    name: "Suzuki Swift",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop",
    passengers: "4 Passengers",
    luggage: "1 Large Bag",
    transmission: "Manual",
    hasAC: true,
    pricePerDay: 25,
    currency: "$",
    type: "economy",
    tag: {
      text: "Economy",
      type: "economy"
    }
  },
  {
    id: "5",
    name: "Toyota Land Cruiser",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2067&auto=format&fit=crop",
    passengers: "7 Passengers",
    luggage: "4 Large Bags",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 120,
    currency: "$",
    type: "suv",
    tag: {
      text: "Premium",
      type: "premium"
    }
  },
  {
    id: "6",
    name: "Nissan Sunny",
    image: "https://images.unsplash.com/photo-1617624085810-3df2165bd11b?q=80&w=2070&auto=format&fit=crop",
    passengers: "4 Passengers",
    luggage: "2 Large Bags",
    transmission: "Manual",
    hasAC: true,
    pricePerDay: 30,
    currency: "$",
    type: "sedan"
  }
];
