export interface Vehicle {
  id: string;
  name: string;
  description: string;
  category: 'luxury' | 'executive' | 'economy' | 'group';
  availability: string;
  image: string;
}

export const fleetData: Vehicle[] = [
  // Luxury SUVs
  {
    id: 'land-cruiser-v8',
    name: 'Toyota Land Cruiser V8',
    description: 'Ultimate luxury SUV with unmatched power and comfort',
    category: 'luxury',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-land-cruiser-v8.dim_1200x800.jpg',
  },
  {
    id: 'lc300',
    name: 'Land Cruiser LC 300',
    description: 'Latest generation luxury SUV with cutting-edge technology',
    category: 'luxury',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-lc300.dim_1200x800.jpg',
  },
  {
    id: 'prado-txl',
    name: 'Toyota Prado TXL',
    description: 'Premium SUV perfect for family trips and business travel',
    category: 'luxury',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-prado-txl.dim_1200x800.jpg',
  },
  {
    id: 'range-rover',
    name: 'Range Rover',
    description: 'Iconic British luxury SUV with exceptional refinement',
    category: 'luxury',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-range-rover.dim_1200x800.jpg',
  },
  // Executive Sedans
  {
    id: 'audi-a4',
    name: 'Audi A4',
    description: 'Sophisticated German sedan with premium features',
    category: 'executive',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-audi-a4.dim_1200x800.jpg',
  },
  {
    id: 'audi-a5',
    name: 'Audi A5',
    description: 'Elegant sportback combining style and performance',
    category: 'executive',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-audi-a5.dim_1200x800.jpg',
  },
  {
    id: 'audi-a6',
    name: 'Audi A6',
    description: 'Executive flagship sedan with advanced technology',
    category: 'executive',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-audi-a6.dim_1200x800.jpg',
  },
  {
    id: 'altis-grande',
    name: 'Toyota Altis Grande',
    description: 'Premium sedan with exceptional comfort and reliability',
    category: 'executive',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-altis-grande.dim_1200x800.jpg',
  },
  {
    id: 'toyota-gli',
    name: 'Toyota GLI',
    description: 'Reliable and comfortable sedan for business travel',
    category: 'executive',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-toyota-gli.dim_1200x800.jpg',
  },
  {
    id: 'honda-civic',
    name: 'Honda Civic',
    description: 'Modern sedan with sporty design and efficiency',
    category: 'executive',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-honda-civic.dim_1200x800.jpg',
  },
  // Economy & Utility
  {
    id: 'suzuki-alto',
    name: 'Suzuki Alto',
    description: 'Compact and economical car ideal for city driving',
    category: 'economy',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-suzuki-alto.dim_1200x800.jpg',
  },
  {
    id: 'toyota-revo',
    name: 'Toyota Revo',
    description: 'Versatile pickup truck perfect for adventures',
    category: 'economy',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-toyota-revo.dim_1200x800.jpg',
  },
  {
    id: 'honda-brv',
    name: 'Honda BR-V',
    description: 'Spacious family SUV with excellent fuel economy',
    category: 'economy',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-honda-brv.dim_1200x800.jpg',
  },
  // Group & Commercial Transport
  {
    id: 'toyota-grand-cabin',
    name: 'Toyota Grand Cabin',
    description: 'Ideal for corporate groups, weddings, airport transfers, and tourism groups',
    category: 'group',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-toyota-grand-cabin.dim_1200x800.jpg',
  },
  {
    id: 'coaster-4c',
    name: 'Toyota Coaster Saloon 4C',
    description: 'Perfect for corporate groups, weddings, airport transfers, and tourism groups',
    category: 'group',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-coaster-saloon-4c.dim_1200x800.jpg',
  },
  {
    id: 'coaster-5c',
    name: 'Toyota Coaster 5C',
    description: 'Premium transport for corporate groups, weddings, airport transfers, and tourism groups',
    category: 'group',
    availability: 'Daily / Weekly / Monthly',
    image: '/assets/generated/car-coaster-5c.dim_1200x800.jpg',
  },
];

export const categories = {
  luxury: {
    title: 'Luxury SUVs',
    icon: '🔶',
    description: 'Experience ultimate comfort and prestige',
  },
  executive: {
    title: 'Executive Sedans',
    icon: '🔷',
    description: 'Professional elegance for business and leisure',
  },
  economy: {
    title: 'Economy & Utility',
    icon: '🔹',
    description: 'Affordable and practical transportation',
  },
  group: {
    title: 'Group & Commercial Transport',
    icon: '🔸',
    description: 'Spacious vehicles for groups and events',
  },
};
