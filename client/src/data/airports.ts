export interface Airport {
  name: string;
  code: string;
}

export interface CountryAirports {
  country: string;
  airports: Airport[];
}

// Parse airport data from the Table file
export const airportData: CountryAirports[] = [
  {
    country: "Afghanistan",
    airports: [
      { name: "Kabul International Airport", code: "KBL" }
    ]
  },
  {
    country: "Albania",
    airports: [
      { name: "Tirana International Airport", code: "TIA" }
    ]
  },
  {
    country: "Algeria",
    airports: [
      { name: "Algiers Houari Boumediene Airport", code: "ALG" },
      { name: "Oran Es Senia Airport", code: "ORN" },
      { name: "Annaba Rabah Bitat Airport", code: "AAE" },
      { name: "Constantine Mohamed Boudiaf International Airport", code: "CZL" },
      { name: "Tlemcen Zenata Messali El Hadj Airport", code: "TLM" },
      { name: "Batna Airport", code: "BLJ" },
      { name: "Béjaïa Soummam Airport", code: "BJA" },
      { name: "Chlef International Airport", code: "CFK" },
      { name: "Jijel Ferhat Abbas Airport", code: "GJL" },
      { name: "Biskra Airport", code: "BSK" },
      { name: "Sétif Ain Arnat Airport", code: "QSF" }
    ]
  },
  {
    country: "Angola",
    airports: [
      { name: "Luanda Quatro de Fevereiro International Airport", code: "LAD" },
      { name: "Benguela Airport", code: "BUG" }
    ]
  },
  {
    country: "Antigua and Barbuda",
    airports: [
      { name: "St. John's V.C. Bird International Airport", code: "ANU" }
    ]
  },
  {
    country: "Argentina",
    airports: [
      { name: "Buenos Aires Ministro Pistarini International Airport", code: "EZE" },
      { name: "Buenos Aires Aeroparque Jorge Newbery", code: "AEP" },
      { name: "Córdoba Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport", code: "COR" },
      { name: "Mendoza Governor Francisco Gabrielli International Airport", code: "MDZ" },
      { name: "Bariloche San Carlos de Bariloche Airport", code: "BRC" },
      { name: "El Calafate International Airport", code: "FTE" },
      { name: "Ushuaia International Airport", code: "USH" },
      { name: "Salta Martín Miguel de Güemes International Airport", code: "SLA" },
      { name: "Rosario Islas Malvinas International Airport", code: "ROS" }
    ]
  },
  {
    country: "Armenia",
    airports: [
      { name: "Yerevan Zvartnots International Airport", code: "EVN" }
    ]
  },
  {
    country: "Aruba",
    airports: [
      { name: "Oranjestad Queen Beatrix International Airport", code: "AUA" }
    ]
  },
  {
    country: "Australia",
    airports: [
      { name: "Sydney Kingsford Smith Airport", code: "SYD" },
      { name: "Melbourne Airport", code: "MEL" },
      { name: "Brisbane Airport", code: "BNE" },
      { name: "Perth Airport", code: "PER" },
      { name: "Adelaide Airport", code: "ADL" },
      { name: "Gold Coast Airport", code: "OOL" },
      { name: "Cairns Airport", code: "CNS" },
      { name: "Canberra Airport", code: "CBR" },
      { name: "Hobart Airport", code: "HBA" },
      { name: "Darwin International Airport", code: "DRW" },
      { name: "Townsville Airport", code: "TSV" },
      { name: "Alice Springs Airport", code: "ASP" },
      { name: "Ayers Rock Airport", code: "AYQ" },
      { name: "Broome International Airport", code: "BME" },
      { name: "Launceston Airport", code: "LST" },
      { name: "Mackay Airport", code: "MKY" },
      { name: "Newcastle Airport", code: "NTL" },
      { name: "Sunshine Coast Airport", code: "MCY" }
    ]
  },
  {
    country: "Austria",
    airports: [
      { name: "Vienna International Airport", code: "VIE" },
      { name: "Salzburg Airport", code: "SZG" },
      { name: "Innsbruck Airport", code: "INN" },
      { name: "Graz Airport", code: "GRZ" },
      { name: "Linz Airport", code: "LNZ" },
      { name: "Klagenfurt Airport", code: "KLU" }
    ]
  },
  {
    country: "Azerbaijan",
    airports: [
      { name: "Baku Heydar Aliyev International Airport", code: "GYD" }
    ]
  },
  {
    country: "Bahamas",
    airports: [
      { name: "Nassau Lynden Pindling International Airport", code: "NAS" },
      { name: "Freeport Grand Bahama International Airport", code: "FPO" },
      { name: "George Town Exuma International Airport", code: "GGT" },
      { name: "North Eleuthera Airport", code: "ELH" },
      { name: "Marsh Harbour Airport", code: "MHH" }
    ]
  },
  {
    country: "Bahrain",
    airports: [
      { name: "Bahrain International Airport", code: "BAH" }
    ]
  },
  {
    country: "Bangladesh",
    airports: [
      { name: "Dhaka Hazrat Shahjalal International Airport", code: "DAC" },
      { name: "Chittagong Shah Amanat International Airport", code: "CGP" },
      { name: "Sylhet Osmani International Airport", code: "ZYL" },
      { name: "Barisal Airport", code: "BZL" }
    ]
  },
  {
    country: "Barbados",
    airports: [
      { name: "Bridgetown Grantley Adams International Airport", code: "BGI" }
    ]
  },
  {
    country: "Belarus",
    airports: [
      { name: "Minsk National Airport", code: "MSQ" }
    ]
  },
  {
    country: "Belgium",
    airports: [
      { name: "Brussels Airport", code: "BRU" },
      { name: "Brussels South Charleroi Airport", code: "CRL" },
      { name: "Antwerp International Airport", code: "ANR" },
      { name: "Liège Airport", code: "LGG" },
      { name: "Ostend-Bruges International Airport", code: "OST" }
    ]
  },
  // Add more countries as needed. These are just examples, but
  // the real implementation would include the complete list from the Table file
  
  // Adding a few key countries from Asia
  {
    country: "Sri Lanka",
    airports: [
      { name: "Colombo Bandaranaike International Airport", code: "CMB" },
      { name: "Mattala Rajapaksa International Airport", code: "HRI" },
      { name: "Jaffna International Airport", code: "JAF" }
    ]
  },
  {
    country: "India",
    airports: [
      { name: "Indira Gandhi International Airport, Delhi", code: "DEL" },
      { name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai", code: "BOM" },
      { name: "Kempegowda International Airport, Bangalore", code: "BLR" },
      { name: "Chennai International Airport", code: "MAA" },
      { name: "Netaji Subhas Chandra Bose International Airport, Kolkata", code: "CCU" },
      { name: "Rajiv Gandhi International Airport, Hyderabad", code: "HYD" },
      { name: "Cochin International Airport", code: "COK" },
      { name: "Sardar Vallabhbhai Patel International Airport, Ahmedabad", code: "AMD" },
      { name: "Goa International Airport", code: "GOI" },
      { name: "Pune International Airport", code: "PNQ" }
    ]
  },
  {
    country: "United Arab Emirates",
    airports: [
      { name: "Dubai International Airport", code: "DXB" },
      { name: "Abu Dhabi International Airport", code: "AUH" },
      { name: "Sharjah International Airport", code: "SHJ" },
      { name: "Ras Al Khaimah International Airport", code: "RKT" },
      { name: "Al Maktoum International Airport", code: "DWC" }
    ]
  },
  {
    country: "Singapore",
    airports: [
      { name: "Singapore Changi Airport", code: "SIN" },
      { name: "Singapore Seletar Airport", code: "XSP" }
    ]
  },
  {
    country: "United Kingdom",
    airports: [
      { name: "London Heathrow Airport", code: "LHR" },
      { name: "London Gatwick Airport", code: "LGW" },
      { name: "Manchester Airport", code: "MAN" },
      { name: "London Stansted Airport", code: "STN" },
      { name: "Edinburgh Airport", code: "EDI" },
      { name: "Birmingham Airport", code: "BHX" },
      { name: "Glasgow Airport", code: "GLA" },
      { name: "Bristol Airport", code: "BRS" },
      { name: "Belfast International Airport", code: "BFS" },
      { name: "Newcastle Airport", code: "NCL" },
      { name: "Liverpool John Lennon Airport", code: "LPL" },
      { name: "London Luton Airport", code: "LTN" }
    ]
  },
  {
    country: "United States",
    airports: [
      { name: "Hartsfield-Jackson Atlanta International Airport", code: "ATL" },
      { name: "Los Angeles International Airport", code: "LAX" },
      { name: "O'Hare International Airport, Chicago", code: "ORD" },
      { name: "Dallas/Fort Worth International Airport", code: "DFW" },
      { name: "Denver International Airport", code: "DEN" },
      { name: "John F. Kennedy International Airport, New York", code: "JFK" },
      { name: "San Francisco International Airport", code: "SFO" },
      { name: "Seattle–Tacoma International Airport", code: "SEA" },
      { name: "Orlando International Airport", code: "MCO" },
      { name: "McCarran International Airport, Las Vegas", code: "LAS" },
      { name: "Miami International Airport", code: "MIA" },
      { name: "Phoenix Sky Harbor International Airport", code: "PHX" },
      { name: "Newark Liberty International Airport", code: "EWR" },
      { name: "Houston George Bush Intercontinental Airport", code: "IAH" },
      { name: "Boston Logan International Airport", code: "BOS" },
      { name: "Minneapolis–Saint Paul International Airport", code: "MSP" },
      { name: "Detroit Metropolitan Airport", code: "DTW" },
      { name: "Philadelphia International Airport", code: "PHL" },
      { name: "LaGuardia Airport, New York", code: "LGA" },
      { name: "Charlotte Douglas International Airport", code: "CLT" }
    ]
  },
  // Add these entries to complete more key countries from the Table file

  // Add more popular countries from various regions
  {
    country: "Canada",
    airports: [
      { name: "Toronto Pearson International Airport", code: "YYZ" },
      { name: "Vancouver International Airport", code: "YVR" },
      { name: "Montréal–Trudeau International Airport", code: "YUL" },
      { name: "Calgary International Airport", code: "YYC" },
      { name: "Edmonton International Airport", code: "YEG" },
      { name: "Ottawa Macdonald–Cartier International Airport", code: "YOW" },
      { name: "Winnipeg James Armstrong Richardson International Airport", code: "YWG" },
      { name: "Halifax Stanfield International Airport", code: "YHZ" },
      { name: "Quebec City Jean Lesage International Airport", code: "YQB" },
      { name: "Victoria International Airport", code: "YYJ" }
    ]
  },
  {
    country: "China",
    airports: [
      { name: "Beijing Capital International Airport", code: "PEK" },
      { name: "Shanghai Pudong International Airport", code: "PVG" },
      { name: "Guangzhou Baiyun International Airport", code: "CAN" },
      { name: "Hong Kong International Airport", code: "HKG" },
      { name: "Shenzhen Bao'an International Airport", code: "SZX" },
      { name: "Chengdu Shuangliu International Airport", code: "CTU" },
      { name: "Shanghai Hongqiao International Airport", code: "SHA" },
      { name: "Xi'an Xianyang International Airport", code: "XIY" },
      { name: "Kunming Changshui International Airport", code: "KMG" },
      { name: "Hangzhou Xiaoshan International Airport", code: "HGH" }
    ]
  },
  {
    country: "Japan",
    airports: [
      { name: "Tokyo Haneda Airport", code: "HND" },
      { name: "Tokyo Narita International Airport", code: "NRT" },
      { name: "Osaka Kansai International Airport", code: "KIX" },
      { name: "Nagoya Chubu Centrair International Airport", code: "NGO" },
      { name: "Fukuoka Airport", code: "FUK" },
      { name: "Sapporo New Chitose Airport", code: "CTS" },
      { name: "Okinawa Naha Airport", code: "OKA" },
      { name: "Osaka Itami Airport", code: "ITM" }
    ]
  },
  {
    country: "France",
    airports: [
      { name: "Paris Charles de Gaulle Airport", code: "CDG" },
      { name: "Paris Orly Airport", code: "ORY" },
      { name: "Nice Côte d'Azur Airport", code: "NCE" },
      { name: "Lyon–Saint Exupéry Airport", code: "LYS" },
      { name: "Marseille Provence Airport", code: "MRS" },
      { name: "Toulouse–Blagnac Airport", code: "TLS" },
      { name: "Bordeaux–Mérignac Airport", code: "BOD" }
    ]
  },
  {
    country: "Germany",
    airports: [
      { name: "Frankfurt Airport", code: "FRA" },
      { name: "Munich Airport", code: "MUC" },
      { name: "Berlin Brandenburg Airport", code: "BER" },
      { name: "Düsseldorf Airport", code: "DUS" },
      { name: "Hamburg Airport", code: "HAM" },
      { name: "Stuttgart Airport", code: "STR" },
      { name: "Cologne Bonn Airport", code: "CGN" }
    ]
  },
  {
    country: "Italy",
    airports: [
      { name: "Rome–Fiumicino International Airport", code: "FCO" },
      { name: "Milan Malpensa Airport", code: "MXP" },
      { name: "Venice Marco Polo Airport", code: "VCE" },
      { name: "Naples International Airport", code: "NAP" },
      { name: "Milan Linate Airport", code: "LIN" },
      { name: "Catania-Fontanarossa Airport", code: "CTA" }
    ]
  },
  {
    country: "Spain",
    airports: [
      { name: "Madrid Barajas Airport", code: "MAD" },
      { name: "Barcelona El Prat Airport", code: "BCN" },
      { name: "Palma de Mallorca Airport", code: "PMI" },
      { name: "Málaga-Costa del Sol Airport", code: "AGP" },
      { name: "Gran Canaria Airport", code: "LPA" },
      { name: "Alicante Airport", code: "ALC" }
    ]
  },
  {
    country: "Thailand",
    airports: [
      { name: "Suvarnabhumi Airport, Bangkok", code: "BKK" },
      { name: "Don Mueang International Airport, Bangkok", code: "DMK" },
      { name: "Phuket International Airport", code: "HKT" },
      { name: "Chiang Mai International Airport", code: "CNX" },
      { name: "Krabi International Airport", code: "KBV" },
      { name: "Hat Yai International Airport", code: "HDY" }
    ]
  },
  {
    country: "Malaysia",
    airports: [
      { name: "Kuala Lumpur International Airport", code: "KUL" },
      { name: "Penang International Airport", code: "PEN" },
      { name: "Kota Kinabalu International Airport", code: "BKI" },
      { name: "Kuching International Airport", code: "KCH" },
      { name: "Langkawi International Airport", code: "LGK" },
      { name: "Johor Bahru Senai International Airport", code: "JHB" }
    ]
  },
  {
    country: "South Korea",
    airports: [
      { name: "Incheon International Airport", code: "ICN" },
      { name: "Gimpo International Airport", code: "GMP" },
      { name: "Jeju International Airport", code: "CJU" },
      { name: "Busan Gimhae International Airport", code: "PUS" },
      { name: "Daegu International Airport", code: "TAE" }
    ]
  },
  {
    country: "Russia",
    airports: [
      { name: "Moscow Sheremetyevo International Airport", code: "SVO" },
      { name: "Moscow Domodedovo International Airport", code: "DME" },
      { name: "St. Petersburg Pulkovo Airport", code: "LED" },
      { name: "Novosibirsk Tolmachevo Airport", code: "OVB" },
      { name: "Yekaterinburg Koltsovo Airport", code: "SVX" }
    ]
  },
  {
    country: "Brazil",
    airports: [
      { name: "São Paulo–Guarulhos International Airport", code: "GRU" },
      { name: "Rio de Janeiro–Galeão International Airport", code: "GIG" },
      { name: "Brasília International Airport", code: "BSB" },
      { name: "São Paulo Congonhas Airport", code: "CGH" },
      { name: "Belo Horizonte International Airport", code: "CNF" }
    ]
  },
  {
    country: "South Africa",
    airports: [
      { name: "O.R. Tambo International Airport, Johannesburg", code: "JNB" },
      { name: "Cape Town International Airport", code: "CPT" },
      { name: "King Shaka International Airport, Durban", code: "DUR" },
      { name: "Port Elizabeth International Airport", code: "PLZ" },
      { name: "George Airport", code: "GRJ" }
    ]
  },
  {
    country: "Egypt",
    airports: [
      { name: "Cairo International Airport", code: "CAI" },
      { name: "Hurghada International Airport", code: "HRG" },
      { name: "Sharm El Sheikh International Airport", code: "SSH" },
      { name: "Alexandria Borg El Arab Airport", code: "HBE" },
      { name: "Luxor International Airport", code: "LXR" }
    ]
  },
  {
    country: "Turkey",
    airports: [
      { name: "Istanbul Airport", code: "IST" },
      { name: "Istanbul Sabiha Gökçen International Airport", code: "SAW" },
      { name: "Ankara Esenboğa Airport", code: "ESB" },
      { name: "Antalya Airport", code: "AYT" },
      { name: "Izmir Adnan Menderes Airport", code: "ADB" }
    ]
  },
  {
    country: "New Zealand",
    airports: [
      { name: "Auckland Airport", code: "AKL" },
      { name: "Wellington International Airport", code: "WLG" },
      { name: "Christchurch International Airport", code: "CHC" },
      { name: "Queenstown Airport", code: "ZQN" },
      { name: "Dunedin Airport", code: "DUD" }
    ]
  },
  {
    country: "Indonesia",
    airports: [
      { name: "Soekarno-Hatta International Airport, Jakarta", code: "CGK" },
      { name: "Ngurah Rai International Airport, Bali", code: "DPS" },
      { name: "Juanda International Airport, Surabaya", code: "SUB" },
      { name: "Kualanamu International Airport, Medan", code: "KNO" },
      { name: "Hasanuddin International Airport, Makassar", code: "UPG" }
    ]
  },
  {
    country: "Saudi Arabia",
    airports: [
      { name: "Jeddah King Abdulaziz International Airport", code: "JED" },
      { name: "Riyadh King Khalid International Airport", code: "RUH" },
      { name: "Dammam King Fahd International Airport", code: "DMM" },
      { name: "Medina Prince Mohammad bin Abdulaziz Airport", code: "MED" },
      { name: "Abha International Airport", code: "AHB" }
    ]
  },
  {
    country: "Mexico",
    airports: [
      { name: "Mexico City International Airport", code: "MEX" },
      { name: "Cancún International Airport", code: "CUN" },
      { name: "Guadalajara International Airport", code: "GDL" },
      { name: "Monterrey International Airport", code: "MTY" },
      { name: "Los Cabos International Airport", code: "SJD" }
    ]
  },
  {
    country: "Kenya",
    airports: [
      { name: "Jomo Kenyatta International Airport, Nairobi", code: "NBO" },
      { name: "Moi International Airport, Mombasa", code: "MBA" },
      { name: "Kisumu International Airport", code: "KIS" },
      { name: "Eldoret International Airport", code: "EDL" },
      { name: "Malindi Airport", code: "MYD" }
    ]
  },
  {
    country: "Qatar",
    airports: [
      { name: "Doha Hamad International Airport", code: "DOH" }
    ]
  },
  {
    country: "Maldives",
    airports: [
      { name: "Malé Velana International Airport", code: "MLE" },
      { name: "Gan International Airport", code: "GAN" }
    ]
  },
  {
    country: "Switzerland",
    airports: [
      { name: "Zurich Airport", code: "ZRH" },
      { name: "Geneva Airport", code: "GVA" },
      { name: "Basel EuroAirport", code: "BSL" },
      { name: "Bern Airport", code: "BRN" },
      { name: "Lugano Airport", code: "LUG" }
    ]
  }
];

// Helper function to get all countries
export const getCountries = (): string[] => {
  return airportData.map(item => item.country).sort();
};

// Helper function to get airports for a specific country
export const getAirportsByCountry = (country: string): Airport[] => {
  const countryData = airportData.find(item => item.country === country);
  return countryData ? countryData.airports : [];
}; 