export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    country: "Australia",
    rating: 5,
    text: "Our family tour of Sri Lanka was absolutely perfect. The guides were knowledgeable, the accommodations were excellent, and the itinerary allowed us to experience the island's diversity. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "David Chen",
    country: "Singapore",
    rating: 5,
    text: "The car rental service was exceptional. The vehicle was in perfect condition, and having a local driver who knew all the shortcuts and hidden spots made our trip so much more authentic and enjoyable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Emma & James Smith",
    country: "United Kingdom",
    rating: 4.5,
    text: "We opted for a custom tour package and were amazed at how well they understood our preferences. The wildlife safaris, beach time, and cultural experiences were perfectly balanced. Ceylon Explorer made our honeymoon unforgettable!",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1950&auto=format&fit=crop"
  }
];
