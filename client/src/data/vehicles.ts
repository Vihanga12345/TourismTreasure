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
  mileage: string;
  fuelPolicy: string;
  driverOnly?: boolean;
  rates: {
    days: string;
    price: number;
  }[];
  tag?: {
    text: string;
    type: 'popular' | 'economy' | 'premium';
  };
}

// Import all vehicle images
import suzukiHustlerImage from '../assets/Fleet/suzuki_hustler.jpg';
import suzukiAltoImage from '../assets/Fleet/Suzuki-Alto.jpg';
import toyotaAquaImage from '../assets/Fleet/Toyota Aqua.jpg';
import peruduaAxiaImage from '../assets/Fleet/Perudua axia.jpeg';
import suzukiSwiftImage from '../assets/Fleet/Suzuki swift.jpeg';
import suzukiWagonRImage from '../assets/Fleet/Suzuki wagon R.jpg';
import peruduaBezzaImage from '../assets/Fleet/Perudua Bezza.jpeg';
import hondaInsightImage from '../assets/Fleet/Honda Insight.jpg';
import kiaRioImage from '../assets/Fleet/Kia Rio.jpeg';
import nissanSunnyImage from '../assets/Fleet/Nissan Sunny.jpeg';
import toyotaCorollaImage from '../assets/Fleet/Toyota Corolla.jpeg';
import toyotaBeltaImage from '../assets/Fleet/Toyota Belta.jpeg';
import hondaGraceImage from '../assets/Fleet/Honda Grace.jpeg';
import toyotaPriusImage from '../assets/Fleet/Toyota Prius.jpg';
import toyotaAllionImage from '../assets/Fleet/Toyota Allion.jpg';
import toyotaAxioImage from '../assets/Fleet/Toyota Axio.jpg';
import mercedesBenzImage from '../assets/Fleet/Mercedes benz.jpg';
import bmw520dImage from '../assets/Fleet/BMW 520D.jpeg';
import jaguarRXFImage from '../assets/Fleet/Jaguar RXF.jpg';
import kiaSorentoImage from '../assets/Fleet/Kia Sorento.jpeg';
import hyundaiTucsonImage from '../assets/Fleet/Hyundai Tucson.jpeg';
import nissanXTrailImage from '../assets/Fleet/Nissan X-Trail.jpg';
import toyotaLandCruiserV8Image from '../assets/Fleet/Toyota Land Cruiser V8.jpg';
import toyotaLandCruiserV150Image from '../assets/Fleet/Toyota Land Cruiser V150.jpeg';
import mitsubishiMonteroImage from '../assets/Fleet/Mitsubishi Montero.jpg';
import nissanCaravanImage from '../assets/Fleet/Nissan Caravan.jpeg';
import nissanVanetteImage from '../assets/Fleet/Nissan Vanette.jpg';
import nissanHiaceKDHImage from '../assets/Fleet/Nissan Hiace KDH.jpg';
import microTourerImage from '../assets/Fleet/Micro Tourer.jpeg';
import toyotaCoasterImage from '../assets/Fleet/Toyota Coaster.jpeg';
import kingLongImage from '../assets/Fleet/King Long.jpeg';

export const vehicles: Vehicle[] = [
  // Mini Cars
  {
    id: "1",
    name: "SUZUKI HUSTLER",
    image: suzukiHustlerImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 50,
    currency: "€",
    type: "mini",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 50 },
      { days: "04-06 Days", price: 45 },
      { days: "07 Days", price: 42 },
      { days: "08-13 Days", price: 40 },
      { days: "14 Days", price: 35 },
      { days: "15 or more Days", price: 30 }
    ],
    tag: {
      text: "Mini Cars",
      type: "economy"
    }
  },
  {
    id: "2",
    name: "SUZUKI ALTO (JAPAN)",
    image: suzukiAltoImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 48,
    currency: "€",
    type: "mini",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 48 },
      { days: "04-06 Days", price: 43 },
      { days: "07 Days", price: 40 },
      { days: "08-13 Days", price: 38 },
      { days: "14 Days", price: 33 },
      { days: "15 or more Days", price: 28 }
    ],
    tag: {
      text: "Mini Cars",
      type: "economy"
    }
  },
  // Economy Cars
  {
    id: "3",
    name: "TOYOTA AQUA",
    image: toyotaAquaImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 78,
    currency: "€",
    type: "economy",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 78 },
      { days: "04-06 Days", price: 73 },
      { days: "07 Days", price: 40 },
      { days: "08-13 Days", price: 38 },
      { days: "14 Days", price: 33 },
      { days: "15 or more Days", price: 28 }
    ],
    tag: {
      text: "Economy Cars",
      type: "economy"
    }
  },
  {
    id: "4",
    name: "PERUDUA AXIA",
    image: peruduaAxiaImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 78,
    currency: "€",
    type: "economy",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 78 },
      { days: "04-06 Days", price: 73 },
      { days: "07 Days", price: 40 },
      { days: "08-13 Days", price: 38 },
      { days: "14 Days", price: 33 },
      { days: "15 or more Days", price: 28 }
    ],
    tag: {
      text: "Economy Cars",
      type: "economy"
    }
  },
  {
    id: "5",
    name: "SUZUKI SWIFT",
    image: suzukiSwiftImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 53,
    currency: "€",
    type: "economy",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 53 },
      { days: "04-06 Days", price: 48 },
      { days: "07 Days", price: 45 },
      { days: "08-13 Days", price: 42 },
      { days: "14 Days", price: 37 },
      { days: "15 or more Days", price: 32 }
    ],
    tag: {
      text: "Economy Cars",
      type: "economy"
    }
  },
  {
    id: "6",
    name: "SUZUKI WAGON R",
    image: suzukiWagonRImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 53,
    currency: "€",
    type: "economy",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 53 },
      { days: "04-06 Days", price: 48 },
      { days: "07 Days", price: 45 },
      { days: "08-13 Days", price: 42 },
      { days: "14 Days", price: 37 },
      { days: "15 or more Days", price: 32 }
    ],
    tag: {
      text: "Economy Cars",
      type: "economy"
    }
  },
  // Standard Cars
  {
    id: "7",
    name: "PERUDUA BEZZA",
    image: peruduaBezzaImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 68,
    currency: "€",
    type: "standard",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 68 },
      { days: "04-06 Days", price: 58 },
      { days: "07 Days", price: 53 },
      { days: "08-13 Days", price: 48 },
      { days: "14 Days", price: 45 },
      { days: "15 or more Days", price: 43 }
    ],
    tag: {
      text: "Standard Cars",
      type: "economy"
    }
  },
  {
    id: "8",
    name: "HONDA INSIGHT",
    image: hondaInsightImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 83,
    currency: "€",
    type: "standard",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 83 },
      { days: "04-06 Days", price: 78 },
      { days: "07 Days", price: 73 },
      { days: "08-13 Days", price: 68 },
      { days: "14 Days", price: 63 },
      { days: "15 or more Days", price: 78 }
    ],
    tag: {
      text: "Standard Cars",
      type: "economy"
    }
  },
  {
    id: "9",
    name: "KIA RIO",
    image: kiaRioImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 68,
    currency: "€",
    type: "standard",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 68 },
      { days: "04-06 Days", price: 58 },
      { days: "07 Days", price: 53 },
      { days: "08-13 Days", price: 48 },
      { days: "14 Days", price: 45 },
      { days: "15 or more Days", price: 43 }
    ],
    tag: {
      text: "Standard Cars",
      type: "economy"
    }
  },
  {
    id: "10",
    name: "NISSAN SUNNY",
    image: nissanSunnyImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 68,
    currency: "€",
    type: "standard",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 68 },
      { days: "04-06 Days", price: 58 },
      { days: "07 Days", price: 53 },
      { days: "08-13 Days", price: 48 },
      { days: "14 Days", price: 45 },
      { days: "15 or more Days", price: 43 }
    ],
    tag: {
      text: "Standard Cars",
      type: "economy"
    }
  },
  // Semi Executive Cars
  {
    id: "11",
    name: "TOYOTA COROLLA",
    image: toyotaCorollaImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 80,
    currency: "€",
    type: "semi-executive",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 80 },
      { days: "04-06 Days", price: 76 },
      { days: "07 Days", price: 70 },
      { days: "08-13 Days", price: 66 },
      { days: "14 Days", price: 60 },
      { days: "15 or more Days", price: 56 }
    ],
    tag: {
      text: "Semi Executive Cars",
      type: "economy"
    }
  },
  {
    id: "12",
    name: "TOYOTA BELTA",
    image: toyotaBeltaImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 80,
    currency: "€",
    type: "semi-executive",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 80 },
      { days: "04-06 Days", price: 76 },
      { days: "07 Days", price: 70 },
      { days: "08-13 Days", price: 66 },
      { days: "14 Days", price: 60 },
      { days: "15 or more Days", price: 56 }
    ],
    tag: {
      text: "Semi Executive Cars",
      type: "economy"
    }
  },
  {
    id: "13",
    name: "HONDA GRACE",
    image: hondaGraceImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 83,
    currency: "€",
    type: "semi-executive",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 83 },
      { days: "04-06 Days", price: 78 },
      { days: "07 Days", price: 73 },
      { days: "08-13 Days", price: 68 },
      { days: "14 Days", price: 63 },
      { days: "15 or more Days", price: 58 }
    ],
    tag: {
      text: "Semi Executive Cars",
      type: "economy"
    }
  },
  {
    id: "14",
    name: "TOYOTA PRIUS",
    image: toyotaPriusImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 83,
    currency: "€",
    type: "semi-executive",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 83 },
      { days: "04-06 Days", price: 78 },
      { days: "07 Days", price: 73 },
      { days: "08-13 Days", price: 68 },
      { days: "14 Days", price: 63 },
      { days: "15 or more Days", price: 58 }
    ],
    tag: {
      text: "Semi Executive Cars",
      type: "economy"
    }
  },
  // Executive Cars
  {
    id: "15",
    name: "TOYOTA ALLION",
    image: toyotaAllionImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 86,
    currency: "€",
    type: "executive",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 86 },
      { days: "04-06 Days", price: 80 },
      { days: "07 Days", price: 76 },
      { days: "08-13 Days", price: 70 },
      { days: "14 Days", price: 66 },
      { days: "15 or more Days", price: 60 }
    ],
    tag: {
      text: "Executive Cars",
      type: "premium"
    }
  },
  {
    id: "16",
    name: "TOYOTA AXIO",
    image: toyotaAxioImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 86,
    currency: "€",
    type: "executive",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 86 },
      { days: "04-06 Days", price: 80 },
      { days: "07 Days", price: 76 },
      { days: "08-13 Days", price: 70 },
      { days: "14 Days", price: 66 },
      { days: "15 or more Days", price: 60 }
    ],
    tag: {
      text: "Executive Cars",
      type: "premium"
    }
  },
  // Luxury Cars
  {
    id: "17",
    name: "MERCEDES BENZ",
    image: mercedesBenzImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 448,
    currency: "€",
    type: "luxury",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 448 },
      { days: "04-06 Days", price: 398 },
      { days: "07 Days", price: 348 },
      { days: "08-13 Days", price: 298 },
      { days: "14 Days", price: 278 },
      { days: "15 or more Days", price: 258 }
    ],
    tag: {
      text: "Luxury Cars",
      type: "premium"
    }
  },
  {
    id: "18",
    name: "BMW 520D",
    image: bmw520dImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 478,
    currency: "€",
    type: "luxury",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 478 },
      { days: "04-06 Days", price: 418 },
      { days: "07 Days", price: 378 },
      { days: "08-13 Days", price: 318 },
      { days: "14 Days", price: 298 },
      { days: "15 or more Days", price: 278 }
    ],
    tag: {
      text: "Luxury Cars",
      type: "premium"
    }
  },
  {
    id: "19",
    name: "JAGUAR RXF",
    image: jaguarRXFImage,
    passengers: "04 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 478,
    currency: "€",
    type: "luxury",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 478 },
      { days: "04-06 Days", price: 418 },
      { days: "07 Days", price: 378 },
      { days: "08-13 Days", price: 318 },
      { days: "14 Days", price: 298 },
      { days: "15 or more Days", price: 278 }
    ],
    tag: {
      text: "Luxury Cars",
      type: "premium"
    }
  },
  // Mini SUVs
  {
    id: "20",
    name: "KIA SORENTO",
    image: kiaSorentoImage,
    passengers: "06 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 243,
    currency: "€",
    type: "mini-suv",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 243 },
      { days: "04-06 Days", price: 168 },
      { days: "07 Days", price: 148 },
      { days: "08-13 Days", price: 143 },
      { days: "14 Days", price: 138 },
      { days: "15 or more Days", price: 133 }
    ],
    tag: {
      text: "Mini SUVs",
      type: "premium"
    }
  },
  {
    id: "21",
    name: "HYUNDAI TUCSON",
    image: hyundaiTucsonImage,
    passengers: "06 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 240,
    currency: "€",
    type: "mini-suv",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 240 },
      { days: "04-06 Days", price: 163 },
      { days: "07 Days", price: 143 },
      { days: "08-13 Days", price: 138 },
      { days: "14 Days", price: 133 },
      { days: "15 or more Days", price: 128 }
    ],
    tag: {
      text: "Mini SUVs",
      type: "premium"
    }
  },
  {
    id: "22",
    name: "NISSAN X-TRAIL",
    image: nissanXTrailImage,
    passengers: "06 Max",
    luggage: "04 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 248,
    currency: "€",
    type: "mini-suv",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 248 },
      { days: "04-06 Days", price: 178 },
      { days: "07 Days", price: 158 },
      { days: "08-13 Days", price: 148 },
      { days: "14 Days", price: 143 },
      { days: "15 or more Days", price: 138 }
    ],
    tag: {
      text: "Mini SUVs",
      type: "premium"
    }
  },
  // Large SUVs
  {
    id: "23",
    name: "TOYOTA LAND CRUISER V8",
    image: toyotaLandCruiserV8Image,
    passengers: "07 Max",
    luggage: "06 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 298,
    currency: "€",
    type: "large-suv",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 298 },
      { days: "04-06 Days", price: 278 },
      { days: "07 Days", price: 248 },
      { days: "08-13 Days", price: 218 },
      { days: "14 Days", price: 198 },
      { days: "15 or more Days", price: 178 }
    ],
    tag: {
      text: "Large SUVs",
      type: "premium"
    }
  },
  {
    id: "24",
    name: "TOYOTA LAND CRUISER V150",
    image: toyotaLandCruiserV150Image,
    passengers: "07 Max",
    luggage: "06 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 298,
    currency: "€",
    type: "large-suv",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 298 },
      { days: "04-06 Days", price: 278 },
      { days: "07 Days", price: 248 },
      { days: "08-13 Days", price: 218 },
      { days: "14 Days", price: 198 },
      { days: "15 or more Days", price: 178 }
    ],
    tag: {
      text: "Large SUVs",
      type: "premium"
    }
  },
  {
    id: "25",
    name: "MITSUBISHI MONTERO",
    image: mitsubishiMonteroImage,
    passengers: "07 Max",
    luggage: "06 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 308,
    currency: "€",
    type: "large-suv",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 308 },
      { days: "04-06 Days", price: 288 },
      { days: "07 Days", price: 258 },
      { days: "08-13 Days", price: 228 },
      { days: "14 Days", price: 208 },
      { days: "15 or more Days", price: 188 }
    ],
    tag: {
      text: "Large SUVs",
      type: "premium"
    }
  },
  // Mini Van
  {
    id: "26",
    name: "NISSAN CARAVAN",
    image: nissanCaravanImage,
    passengers: "09 Max",
    luggage: "06 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 138,
    currency: "€",
    type: "mini-van",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 138 },
      { days: "04-06 Days", price: 118 },
      { days: "07 Days", price: 108 },
      { days: "08-13 Days", price: 98 },
      { days: "14 Days", price: 93 },
      { days: "15 or more Days", price: 88 }
    ],
    tag: {
      text: "Mini Van",
      type: "economy"
    }
  },
  {
    id: "27",
    name: "NISSAN VANETTE",
    image: nissanVanetteImage,
    passengers: "09 Max",
    luggage: "06 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 138,
    currency: "€",
    type: "mini-van",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    rates: [
      { days: "01-03 Days", price: 138 },
      { days: "04-06 Days", price: 118 },
      { days: "07 Days", price: 108 },
      { days: "08-13 Days", price: 98 },
      { days: "14 Days", price: 93 },
      { days: "15 or more Days", price: 88 }
    ],
    tag: {
      text: "Mini Van",
      type: "economy"
    }
  },
  // Van
  {
    id: "28",
    name: "NISSAN HIACE KDH",
    image: nissanHiaceKDHImage,
    passengers: "14 Max",
    luggage: "08 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 158,
    currency: "€",
    type: "van",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    driverOnly: true,
    rates: [
      { days: "01-03 Days", price: 158 },
      { days: "04-06 Days", price: 128 },
      { days: "07 Days", price: 118 },
      { days: "08-13 Days", price: 113 },
      { days: "14 Days", price: 103 },
      { days: "15 or more Days", price: 98 }
    ],
    tag: {
      text: "Van",
      type: "economy"
    }
  },
  {
    id: "29",
    name: "MICRO TOURER",
    image: microTourerImage,
    passengers: "14 Max",
    luggage: "08 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 158,
    currency: "€",
    type: "van",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    driverOnly: true,
    rates: [
      { days: "01-03 Days", price: 158 },
      { days: "04-06 Days", price: 128 },
      { days: "07 Days", price: 118 },
      { days: "08-13 Days", price: 113 },
      { days: "14 Days", price: 103 },
      { days: "15 or more Days", price: 98 }
    ],
    tag: {
      text: "Van",
      type: "economy"
    }
  },
  // Luxury Coach
  {
    id: "30",
    name: "TOYOTA COASTER",
    image: toyotaCoasterImage,
    passengers: "29 Max",
    luggage: "14 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 500,
    currency: "€",
    type: "luxury-coach",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    driverOnly: true,
    rates: [
      { days: "01-03 Days", price: 500 },
      { days: "04-06 Days", price: 500 },
      { days: "07 Days", price: 500 },
      { days: "08-13 Days", price: 500 },
      { days: "14 Days", price: 500 },
      { days: "15 or more Days", price: 500 }
    ],
    tag: {
      text: "Luxury Coach",
      type: "premium"
    }
  },
  {
    id: "31",
    name: "KING LONG",
    image: kingLongImage,
    passengers: "40 Max",
    luggage: "20 Max",
    transmission: "Automatic",
    hasAC: true,
    pricePerDay: 600,
    currency: "€",
    type: "luxury-coach",
    mileage: "150 KM per Day",
    fuelPolicy: "Full to Full",
    driverOnly: true,
    rates: [
      { days: "01-03 Days", price: 600 },
      { days: "04-06 Days", price: 600 },
      { days: "07 Days", price: 600 },
      { days: "08-13 Days", price: 600 },
      { days: "14 Days", price: 600 },
      { days: "15 or more Days", price: 600 }
    ],
    tag: {
      text: "Luxury Coach",
      type: "premium"
    }
  }
];
