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
    description: 'January marks the beginning of the dry season in Sri Lanka\'s southwest. Celebrate the Tamil harvest festival Pongal and explore pristine beaches on the western and southern coasts.',
    weather: 'Temperatures around 27-30°C (80-86°F) with minimal rainfall on the west and south coasts. The northeast experiences more rainfall.',
    travelTips: 'Perfect for beaches, wildlife safaris, and cultural sites. Ideal time to visit Galle, Bentota, and Mirissa. Book accommodations early as it\'s peak season.',
    images: [
      '/Pics/pexels-malindabandaralk-16508228.jpg',
      '/Pics/pexels-sandra-mack-1233541-2365974.jpg'
    ],
    events: [
      {
        id: 'jan-1',
        name: 'Thai Pongal',
        description: 'An important Tamil harvest festival dedicated to the Sun God, celebrated with colorful kolam designs and special rice dishes.',
        date: 'Mid-January',
        location: 'Throughout the country, especially in Tamil communities',
        type: 'cultural'
      },
      {
        id: 'jan-2',
        name: 'Duruthu Perahera',
        description: 'A spectacular procession commemorating Buddha\'s first visit to Sri Lanka, featuring dancers, drummers, and decorated elephants.',
        date: 'January Full Moon',
        location: 'Kelaniya Temple near Colombo',
        type: 'religious'
      }
    ]
  },
  {
    id: 2,
    name: 'February',
    description: 'February continues the dry season along the south and west coasts. The month brings the grand National Day celebrations and perfect conditions for beach activities and wildlife watching.',
    weather: 'Warm and largely dry, with temperatures averaging 28-31°C (82-88°F) on the southern and western coasts. The Cultural Triangle remains pleasantly dry.',
    travelTips: 'Excellent time for beach holidays in the south and whale watching in Mirissa. Consider visiting the ancient cities of Anuradhapura and Polonnaruwa.',
    images: [
      '/Pics/pexels-eugene-dorosh-230277-739409.jpg',
      '/Pics/pexels-gihans-18199788.jpg'
    ],
    events: [
      {
        id: 'feb-1',
        name: 'Independence Day',
        description: 'Sri Lanka\'s National Day marking independence from British rule, celebrated with parades, cultural performances, and flag-hoisting ceremonies.',
        date: 'February 4',
        location: 'Nationwide, with main celebrations in Colombo',
        type: 'cultural'
      },
      {
        id: 'feb-2',
        name: 'Navam Perahera',
        description: 'A magnificent temple procession featuring dancers, musicians, and over 50 elegantly costumed elephants.',
        date: 'February Full Moon',
        location: 'Gangaramaya Temple, Colombo',
        type: 'religious'
      }
    ]
  },
  {
    id: 3,
    name: 'March',
    description: 'March represents the culmination of the dry season in most parts of Sri Lanka. The Sinhala and Tamil New Year is approaching, and the comfortable weather makes it ideal for exploring the entire island.',
    weather: 'Temperatures rise to 29-32°C (84-90°F), especially inland. Conditions remain dry with occasional brief showers as the month progresses.',
    travelTips: 'A great time to visit any part of the island. Consider beach destinations like Trincomalee and Arugam Bay on the east coast, which begin their best season.',
    images: [
      '/Pics/pexels-hirusha-12144831.jpg',
      '/Pics/pexels-akthar-595196.jpg'
    ],
    events: [
      {
        id: 'mar-1',
        name: 'Maha Sivarathri',
        description: 'An important Hindu festival dedicated to Lord Shiva, involving all-night vigils, fasting, and temple rituals.',
        date: 'March (date varies)',
        location: 'Hindu temples throughout the country',
        type: 'religious'
      },
      {
        id: 'mar-2',
        name: 'Elephant Gathering',
        description: 'One of the world\'s greatest wildlife spectacles begins as elephants start gathering at Minneriya and Kaudulla National Parks.',
        date: 'Late March to October',
        location: 'Minneriya and Kaudulla National Parks',
        type: 'seasonal'
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
      '/Pics/pexels-genine-alyssa-pedreno-andrada-1263127-2403209.jpg',
      '/Pics/pexels-roman-odintsov-4553621.jpg'
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
      '/Pics/pexels-tomas-malik-793526-1998439.jpg',
      '/Pics/pexels-malindabandaralk-16508228.jpg'
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
      '/Pics/pexels-gihans-18199788.jpg',
      '/Pics/pexels-sandra-mack-1233541-2365974.jpg'
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
      '/Pics/pexels-akthar-595196.jpg',
      '/Pics/pexels-hirusha-12144831.jpg'
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
      '/Pics/pexels-eugene-dorosh-230277-739409.jpg',
      '/Pics/pexels-roman-odintsov-4553621.jpg'
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
      '/Pics/pexels-genine-alyssa-pedreno-andrada-1263127-2403209.jpg',
      '/Pics/pexels-tomas-malik-793526-1998439.jpg'
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
      '/Pics/pexels-malindabandaralk-16508228.jpg',
      '/Pics/pexels-gihans-18199788.jpg'
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
      '/Pics/pexels-sandra-mack-1233541-2365974.jpg',
      '/Pics/pexels-hirusha-12144831.jpg'
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
      '/Pics/pexels-akthar-595196.jpg',
      '/Pics/pexels-eugene-dorosh-230277-739409.jpg'
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