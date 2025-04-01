export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Raj Perera",
    position: "Founder & CEO",
    bio: "25+ years of experience in tourism with a passion for showcasing Sri Lanka's hidden treasures.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: "2",
    name: "Nilmini Silva",
    position: "Tour Manager",
    bio: "Expert in creating personalized itineraries that blend cultural experiences with adventure.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: "3",
    name: "Ashan Fernando",
    position: "Head Guide",
    bio: "Passionate storyteller with extensive knowledge of Sri Lankan history and wildlife.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: "4",
    name: "Dinesh Mendis",
    position: "Fleet Manager",
    bio: "Ensures our vehicles are maintained to the highest standards for your comfort and safety.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];
