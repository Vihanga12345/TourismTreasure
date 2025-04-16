import January1 from '../assets/Calander/January 1.jpg';
import January2 from '../assets/Calander/January 2.jpeg';
import February1 from '../assets/Calander/February 1.jpg';
import February2 from '../assets/Calander/February 2.jpg';
import March1 from '../assets/Calander/March 1.jpg';
import March2 from '../assets/Calander/March 2.jpg';
import April1 from '../assets/Calander/April 1.jpeg';
import April2 from '../assets/Calander/April 2.jpg';
import May1 from '../assets/Calander/May 1.jpeg';
import May2 from '../assets/Calander/May 2.jpg';
import June1 from '../assets/Calander/June 1.jpeg';
import June2 from '../assets/Calander/June 2.jpeg';
import July1 from '../assets/Calander/July 1.jpeg';
import July2 from '../assets/Calander/July 2.jpg';
import August1 from '../assets/Calander/August 1.jpg';
import August2 from '../assets/Calander/August 2.jpg';
import September1 from '../assets/Calander/September 1.jpg';
import September2 from '../assets/Calander/September 2.jpg';
import October1 from '../assets/Calander/Octomber 1.jpg';
import October2 from '../assets/Calander/Octomber 2.jpeg';
import November1 from '../assets/Calander/November 1.jpeg';
import November2 from '../assets/Calander/November 2.jpg';
import December1 from '../assets/Calander/December 1.jpg';
import December2 from '../assets/Calander/December 2.jpeg';

export interface MonthlyEvent {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  type: 'cultural' | 'religious' | 'festival' | 'seasonal';
}

export interface MonthData {
  id: number;
  name: string;
  description: string;
  weather: string;
  travelTips: string;
  images: string[];
  events: MonthlyEvent[];
}

export const monthlyData: MonthData[] = [
  {
    id: 1,
    name: 'January',
    description: 'January is perfect for beach holidays in Sri Lanka, with sunny skies along the southern and western coasts. Cultural festivals begin the new year, while wildlife and whale watching opportunities are abundant.',
    weather: 'Dry and sunny in the south and west with temperatures around 30°C (86°F). Occasional rainfall in the northeast.',
    travelTips: 'Perfect time for beach holidays in Bentota, Unawatuna, and Mirissa. Prime season for whale watching off the southern coast. Book accommodations in advance as this is peak tourist season.',
    images: [
      January1,
      January2
    ],
    events: [
      {
        id: 'jan-1',
        name: 'Duruthu Perahera Festival',
        description: 'Vibrant processions at Kelaniya Temple near Colombo celebrating Buddha\'s first visit to Sri Lanka.',
        date: 'January Full Moon',
        location: 'Kelaniya Temple near Colombo',
        type: 'religious'
      },
      {
        id: 'jan-2',
        name: 'Thai Pongal',
        description: 'Colorful Hindu harvest festival celebrated by Tamil communities with beautiful kolam art and special rice dishes.',
        date: 'Mid-January',
        location: 'Tamil communities throughout Sri Lanka',
        type: 'cultural'
      },
      {
        id: 'jan-3',
        name: 'Galle Literary Festival',
        description: 'International literary event featuring renowned authors, held in the historic UNESCO World Heritage Galle Fort.',
        date: 'Late January',
        location: 'Galle Fort',
        type: 'cultural'
      }
    ]
  },
  {
    id: 2,
    name: 'February',
    description: 'February offers the driest weather across Sri Lanka, making it ideal for exploring both cultural sites and wildlife areas. The spectacular Nawam Perahera in Colombo is a highlight of this month.',
    weather: 'The driest month nationwide with abundant sunshine and temperatures averaging 28-32°C (82-90°F).',
    travelTips: 'Excellent time to visit the Cultural Triangle (Anuradhapura, Polonnaruwa, Sigiriya). Peak season for whale watching continues in Mirissa. Book accommodations well in advance due to high demand.',
    images: [
      February1,
      February2
    ],
    events: [
      {
        id: 'feb-1',
        name: 'Independence Day',
        description: 'National celebrations with military parades and cultural performances, particularly in Colombo.',
        date: 'February 4',
        location: 'Nationwide, with main celebrations in Colombo',
        type: 'cultural'
      },
      {
        id: 'feb-2',
        name: 'Nawam Maha Perahera',
        description: 'Grand procession at Gangaramaya Temple in Colombo featuring decorated elephants, dancers, and drummers.',
        date: 'February Full Moon',
        location: 'Gangaramaya Temple, Colombo',
        type: 'religious'
      },
      {
        id: 'feb-3',
        name: 'Navam Full Moon Poya',
        description: 'Religious observances at Buddhist temples nationwide with special illuminations and ceremonies.',
        date: 'February Full Moon',
        location: 'Buddhist temples throughout Sri Lanka',
        type: 'religious'
      }
    ]
  },
  {
    id: 3,
    name: 'March',
    description: 'March offers warm, dry weather throughout most of Sri Lanka, making it perfect for both cultural exploration and wildlife viewing. Water levels in reservoirs are low, making wildlife more visible at national parks.',
    weather: 'Continues to be warm and dry throughout most of the country with temperatures averaging 29-33°C (84-91°F).',
    travelTips: 'Excellent time for wildlife viewing at Wilpattu National Park as animals gather around water holes. The surfing season begins at Arugam Bay on the east coast. Visit Dambulla Cave Temples before the April crowds.',
    images: [
      March1,
      March2
    ],
    events: [
      {
        id: 'mar-1',
        name: 'Maha Shivaratri',
        description: 'Important Hindu festival dedicated to Lord Shiva with all-night vigils and rituals at temples nationwide.',
        date: 'March (date varies)',
        location: 'Hindu temples throughout the country',
        type: 'religious'
      },
      {
        id: 'mar-2',
        name: 'Medin Full Moon Poya',
        description: 'Buddhist religious observances with temple visits and almsgiving.',
        date: 'March Full Moon',
        location: 'Buddhist temples nationwide',
        type: 'religious'
      },
      {
        id: 'mar-3',
        name: 'International Cricket Matches',
        description: 'Often hosted in Colombo, Galle, or Kandy, drawing cricket enthusiasts from around the world.',
        date: 'Throughout March (varies)',
        location: 'Major cricket stadiums',
        type: 'cultural'
      }
    ]
  },
  {
    id: 4,
    name: 'April',
    description: 'April marks the Sinhala and Tamil New Year, the most important cultural celebration in Sri Lanka. It\'s a month of festivities, family gatherings, and traditional customs nationwide.',
    weather: 'Hot and humid with temperatures of 30-33°C (86-91°F). The southwest monsoon approaches, bringing some afternoon showers. The east coast remains relatively dry.',
    travelTips: 'Experience the authentic culture during New Year celebrations. Beach conditions are still good early in the month. Cultural sites might be crowded during holiday periods.',
    images: [
      April1,
      April2
    ],
    events: [
      {
        id: 'apr-1',
        name: 'Sinhala & Tamil New Year (Aluth Avurudda)',
        description: 'The most important traditional event in Sri Lanka, marked by elaborate customs, special meals, family gatherings, and cultural activities.',
        date: 'April 13-14',
        location: 'Nationwide',
        type: 'cultural'
      },
      {
        id: 'apr-2',
        name: 'Bak Full Moon Poya Day',
        description: 'A significant Buddhist holiday commemorating Buddha\'s second visit to Sri Lanka, celebrated with temple visits and religious ceremonies.',
        date: 'April Full Moon',
        location: 'Buddhist temples throughout the country',
        type: 'religious'
      }
    ]
  },
  {
    id: 5,
    name: 'May',
    description: 'May brings the beginning of the southwest monsoon to the west and south coasts, while the east coast enters its dry season. Important Buddhist celebrations coincide with scenic changes across the island.',
    weather: 'Increasing rainfall in the southwest with temperatures around 29-32°C (84-90°F). The east coast becomes sunny and dry, making it ideal for beach activities.',
    travelTips: 'Consider shifting to the east coast beaches like Passikudah and Trincomalee. Hillcountry remains pleasant, and cultural sites are less crowded as peak season ends.',
    images: [
      May1,
      May2
    ],
    events: [
      {
        id: 'may-1',
        name: 'Vesak Poya (Buddha\'s Birthday)',
        description: 'The most important Buddhist festival celebrating Buddha\'s birth, enlightenment, and passing. Sri Lanka transforms with lanterns, lights, and free food stalls (dansalas).',
        date: 'May Full Moon',
        location: 'Nationwide, particularly dramatic in Colombo',
        type: 'religious'
      },
      {
        id: 'may-2',
        name: 'Surfing Season Begins',
        description: 'The start of prime surfing conditions on the east coast, drawing surf enthusiasts from around the world.',
        date: 'May to September',
        location: 'Arugam Bay and east coast beaches',
        type: 'seasonal'
      }
    ]
  },
  {
    id: 6,
    name: 'June',
    description: 'June offers a different face of Sri Lanka as the southwest experiences monsoon while the east coast shines with perfect beach weather. Cultural events and wildlife watching opportunities abound.',
    weather: 'Southwest coast sees regular rainfall. Temperatures hover around 28-30°C (82-86°F). The east coast and Cultural Triangle remain dry and sunny.',
    travelTips: 'The ideal time to visit Arugam Bay for surfing, Trincomalee for beaches, and Yala National Park for wildlife. Lower hotel rates in the south and west provide good value.',
    images: [
      June1,
      June2
    ],
    events: [
      {
        id: 'jun-1',
        name: 'Poson Poya',
        description: 'The second most important Buddhist festival celebrating the introduction of Buddhism to Sri Lanka. Mihintale, where this occurred, becomes a place of pilgrimage.',
        date: 'June Full Moon',
        location: 'Nationwide, especially in Mihintale and Anuradhapura',
        type: 'religious'
      },
      {
        id: 'jun-2',
        name: 'Deyata Kirula',
        description: 'A national exhibition showcasing Sri Lanka\'s development, culture, and heritage through various displays and performances.',
        date: 'Early June (varies)',
        location: 'Rotating between different cities',
        type: 'cultural'
      }
    ]
  },
  {
    id: 7,
    name: 'July',
    description: 'July is one of Sri Lanka\'s most captivating months, featuring the spectacular Esala Perahera in Kandy. The east coast is in its prime, and wildlife encounters are at their best.',
    weather: 'The southwest monsoon continues on the western and southern coasts. Temperatures average 27-30°C (80-86°F). The east remains dry and ideal for beach activities.',
    travelTips: 'Book well in advance for the Kandy Esala Perahera. The east coast beaches are at their best, while the famous elephant gathering at Minneriya offers incredible wildlife viewing.',
    images: [
      July1,
      July2
    ],
    events: [
      {
        id: 'jul-1',
        name: 'Kandy Esala Perahera (begins)',
        description: 'One of the world\'s most magnificent processions, featuring fire dancers, whip crackers, musicians, and dozens of elaborately decorated elephants. Honors the Sacred Tooth Relic of Buddha.',
        date: 'Late July to Early August',
        location: 'Kandy',
        type: 'religious'
      },
      {
        id: 'jul-2',
        name: 'Elephant Gathering Peak',
        description: 'The famous congregation of wild elephants reaches its peak, with hundreds gathering around the receding waters of Minneriya tank.',
        date: 'July to September',
        location: 'Minneriya National Park',
        type: 'seasonal'
      }
    ]
  },
  {
    id: 8,
    name: 'August',
    description: 'August is festival month in Sri Lanka, with the grand finale of the Kandy Esala Perahera and numerous other cultural celebrations. Wildlife watching opportunities continue to be exceptional.',
    weather: 'Similar to July with monsoon rains affecting the southwest. Temperatures remain around 28-30°C (82-86°F). The east coast and Cultural Triangle stay sunny and dry.',
    travelTips: 'The best month to experience Sri Lanka\'s cultural heritage through festivals. Continue to focus on the east coast for beaches and the central and northern regions for cultural exploration.',
    images: [
      August1,
      August2
    ],
    events: [
      {
        id: 'aug-1',
        name: 'Kandy Esala Perahera (climax)',
        description: 'The grand finale of this ten-day festival features the most elaborate processions and attracts visitors from around the world.',
        date: 'Early August (on the August full moon)',
        location: 'Kandy',
        type: 'religious'
      },
      {
        id: 'aug-2',
        name: 'Nallur Festival',
        description: 'A 25-day Hindu festival featuring daily processions, drumming, dancing, and religious rituals at one of Sri Lanka\'s most important Hindu temples.',
        date: 'August to September (varies)',
        location: 'Nallur Kandaswamy Temple, Jaffna',
        type: 'religious'
      }
    ]
  },
  {
    id: 9,
    name: 'September',
    description: 'September brings slightly improved weather to the southwest while maintaining excellent conditions in the east. Wildlife watching reaches its peak at several national parks.',
    weather: 'The southwest monsoon begins to weaken with reduced rainfall. Temperatures average 28-31°C (82-88°F). The east coast remains dry but will soon transition to its monsoon season.',
    travelTips: 'Last chance to enjoy the east coast beaches before their monsoon begins. Ideal conditions for wildlife viewing across most national parks. Slightly lower tourist numbers make for a more peaceful experience.',
    images: [
      September1,
      September2
    ],
    events: [
      {
        id: 'sep-1',
        name: 'Binara Full Moon Poya Day',
        description: 'A significant Buddhist holiday commemorating the establishment of the Buddhist nuns\' order. Temples across the country host special ceremonies.',
        date: 'September Full Moon',
        location: 'Buddhist temples throughout Sri Lanka',
        type: 'religious'
      },
      {
        id: 'sep-2',
        name: 'Madhu Festival',
        description: 'An important Catholic festival centered around the Shrine of Our Lady of Madhu, drawing thousands of pilgrims of all faiths.',
        date: 'Early September',
        location: 'Madhu Church, Mannar',
        type: 'religious'
      }
    ]
  },
  {
    id: 10,
    name: 'October',
    description: 'October represents a transitional period in Sri Lanka\'s climate patterns. The southwest emerges from its monsoon while the northeast prepares for rainfall. Cultural events continue to enrich the visitor experience.',
    weather: 'The southwest sees decreasing rainfall as the monsoon ends. Temperatures average 28-30°C (82-86°F). The northeast starts to experience increasing showers toward the end of the month.',
    travelTips: 'A good time to visit cultural sites and the hill country. The western and southern beaches begin to become appealing again. Wildlife parks continue to offer excellent viewing opportunities.',
    images: [
      October1,
      October2
    ],
    events: [
      {
        id: 'oct-1',
        name: 'Vap Full Moon Poya Day',
        description: 'A Buddhist celebration marking the end of the rainy retreat period for monks and commemorating Buddha\'s return from the divine world.',
        date: 'October Full Moon',
        location: 'Buddhist temples throughout Sri Lanka',
        type: 'religious'
      },
      {
        id: 'oct-2',
        name: 'Diwali / Deepavali',
        description: 'The Hindu festival of lights, celebrated with oil lamps, colorful decorations, special sweets, and family gatherings.',
        date: 'Late October or early November (varies)',
        location: 'Hindu communities throughout the country',
        type: 'religious'
      }
    ]
  },
  {
    id: 11,
    name: 'November',
    description: 'November marks the start of the peak tourist season in the south and west. The weather improves significantly in these regions while the northeast monsoon begins to affect the east coast.',
    weather: 'The southwest enjoys increasingly dry conditions with temperatures around 27-30°C (80-86°F). The northeast experiences regular rainfall. Short, heavy downpours can occur throughout the island.',
    travelTips: 'Begin exploring the southern and western beaches. The hill country is lush and scenic after the rains. Book accommodations in advance as peak season approaches.',
    images: [
      November1,
      November2
    ],
    events: [
      {
        id: 'nov-1',
        name: 'Il Full Moon Poya Day',
        description: 'A significant Buddhist observation commemorating Buddha\'s ordination of sixty disciples as the first Buddhist missionaries.',
        date: 'November Full Moon',
        location: 'Buddhist temples throughout Sri Lanka',
        type: 'religious'
      },
      {
        id: 'nov-2',
        name: 'Colombo International Film Festival',
        description: 'A celebration of international and local cinema, featuring screenings, workshops, and gatherings of filmmakers and enthusiasts.',
        date: 'Mid to Late November',
        location: 'Colombo',
        type: 'cultural'
      }
    ]
  },
  {
    id: 12,
    name: 'December',
    description: 'December is one of the most popular months to visit Sri Lanka, especially the southern and western regions. The festive season brings celebrations and perfect beach weather to much of the island.',
    weather: 'The southwest enjoys dry, sunny conditions with temperatures around 27-30°C (80-86°F). The northeast monsoon continues to bring rainfall to the east coast.',
    travelTips: 'Perfect for beach holidays in the south and west, with excellent conditions for water sports. Book well in advance as this is peak tourist season, especially around Christmas and New Year.',
    images: [
      December1,
      December2
    ],
    events: [
      {
        id: 'dec-1',
        name: 'Unduvap Full Moon Poya Day',
        description: 'Commemorates the arrival of the sacred Bo sapling in Sri Lanka, which grew from the tree under which Buddha attained enlightenment.',
        date: 'December Full Moon',
        location: 'Buddhist temples throughout Sri Lanka, especially in Anuradhapura',
        type: 'religious'
      },
      {
        id: 'dec-2',
        name: 'Christmas Celebrations',
        description: 'While Sri Lanka is predominantly Buddhist, Christmas is widely celebrated, especially in urban areas, with decorations, special markets, and cultural performances.',
        date: 'December 25 and surrounding weeks',
        location: 'Throughout the country, especially in Colombo, Negombo, and Galle',
        type: 'cultural'
      }
    ]
  }
];