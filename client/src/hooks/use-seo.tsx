import { useEffect, useState } from 'react';
import Meta from '../components/SEO/Meta';
import { createOrganizationSchema, createWebsiteSchema } from '../components/SEO/structuredData';

// SEO configurations for different sections
const seoConfigs = {
  home: {
    title: 'Exclusive Travels',
    description: 'Experience the beauty of Sri Lanka with our premium tour packages and car rental services. Discover breathtaking landscapes, rich cultural heritage, and unforgettable adventures.',
    keywords: 'Sri Lanka tours, car rentals, travel packages, Sri Lankan adventures, cultural tours, wildlife safaris',
    structuredData: {
      ...createOrganizationSchema(),
      ...createWebsiteSchema()
    }
  },
  tours: {
    title: 'Tour Packages',
    description: 'Explore our curated tour packages for Sri Lanka. Choose from cultural tours, wildlife safaris, beach getaways, and adventure experiences.',
    keywords: 'Sri Lanka tour packages, cultural tours, wildlife safaris, beach holidays, adventure tours, travel packages',
    structuredData: createOrganizationSchema()
  },
  carRentals: {
    title: 'Car Rentals',
    description: 'Rent reliable vehicles for your Sri Lankan journey. Choose from our fleet of cars with or without drivers, all maintained to the highest standards.',
    keywords: 'car rental Sri Lanka, vehicle hire, driver services, transportation Sri Lanka, tourist transport',
    structuredData: createOrganizationSchema()
  },
  aboutUs: {
    title: 'About Us',
    description: 'Founded in 2010, Exclusive Travels is your trusted partner for Sri Lankan travel experiences with a focus on quality service and authentic experiences.',
    keywords: 'travel agency Sri Lanka, Sri Lankan tour company, experienced guides, local travel experts',
    structuredData: createOrganizationSchema()
  },
  gallery: {
    title: 'Gallery',
    description: 'Browse our gallery of breathtaking images from across Sri Lanka, showcasing beaches, wildlife, temples, and landscapes.',
    keywords: 'Sri Lanka photos, travel images, Sri Lanka gallery, tourist attractions, scenic views',
    structuredData: createOrganizationSchema()
  },
  monthlyEvents: {
    title: 'Events Calendar',
    description: 'Plan your trip with our comprehensive guide to Sri Lanka\'s monthly events, festivals, weather conditions, and travel tips.',
    keywords: 'Sri Lanka festivals, cultural events, best time to travel, Sri Lanka weather, monthly travel guide',
    structuredData: createOrganizationSchema()
  },
};

type SectionType = keyof typeof seoConfigs;

interface UseSeoProps {
  defaultSection?: SectionType;
}

const useSeo = ({ defaultSection = 'home' }: UseSeoProps = {}) => {
  const [activeSection, setActiveSection] = useState<SectionType>(defaultSection);

  // Function to update the active section
  const updateSection = (section: SectionType) => {
    setActiveSection(section);
  };

  // Function to check which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        home: document.getElementById('home'),
        tours: document.getElementById('tours'),
        carRentals: document.getElementById('cars'),
        aboutUs: document.getElementById('about'),
        gallery: document.getElementById('gallery'),
        monthlyEvents: document.getElementById('monthly-events'),
      };

      // Get current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the section that is currently in view
      for (const [sectionKey, sectionElement] of Object.entries(sections)) {
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionKey as SectionType);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Return the Meta component with the appropriate props
  const SeoComponent = () => {
    const config = seoConfigs[activeSection];
    
    return (
      <Meta
        title={config.title}
        description={config.description}
        keywords={config.keywords}
        ogImage="/og-default.jpg"
        ogType="website"
        structuredData={config.structuredData}
      />
    );
  };

  return {
    SeoComponent,
    activeSection,
    updateSection,
  };
};

export default useSeo; 