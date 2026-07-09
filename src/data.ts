import { MenuItem, Review } from './types';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Coffee & Espresso (La Colombe)
  {
    id: 'c1',
    name: 'Drip Coffee',
    description: 'Classic brewed La Colombe coffee, smooth and full-bodied.',
    price: 3.50,
    category: 'coffee',
    tags: ['Best Seller', 'Classic'],
  },
  {
    id: 'c2',
    name: 'Oat Milk Latte',
    description: 'Espresso and steamed oat milk — a customer favorite.',
    price: 5.50,
    category: 'coffee',
    tags: ['Dairy-Free', 'Popular'],
  },
  {
    id: 'c3',
    name: 'Cappuccino',
    description: 'Espresso topped with rich, velvety steamed milk foam.',
    price: 5.00,
    category: 'coffee',
    tags: ['Classic'],
  },
  {
    id: 'c4',
    name: 'Chai Latte',
    description: 'Spiced chai blended with steamed milk — a must-try favorite.',
    price: 5.25,
    category: 'coffee',
    tags: ['Fan Favorite', 'Warm'],
  },

  // Iced & Cold Brew
  {
    id: 'i1',
    name: 'Iced Latte',
    description: 'Chilled espresso and milk over ice, with a splash of simple syrup on request.',
    price: 5.50,
    category: 'iced',
    tags: ['Refreshing'],
  },
  {
    id: 'i2',
    name: 'Cold Brew',
    description: 'Smooth, slow-steeped cold brew coffee served over ice.',
    price: 5.00,
    category: 'iced',
    tags: ['High Caffeine'],
  },
  {
    id: 'i3',
    name: 'Fresh Juice',
    description: 'Rotating selection of fresh-pressed juices, made daily.',
    price: 6.00,
    category: 'iced',
    tags: ['Fresh', 'Healthy'],
  },

  // Bagel Sandwiches (from Bullfrog Bagels)
  {
    id: 'p1',
    name: 'Lox Sandwich',
    description: 'Everything bagel with lox, cream cheese, dill, and capers — a fan favorite.',
    price: 11.00,
    category: 'pastry',
    tags: ['Best Seller', 'Bullfrog Bagels'],
  },
  {
    id: 'p2',
    name: 'Humpty Hump Sandwich',
    description: 'A signature bagel sandwich with egg, cheese, and your choice of add-ons.',
    price: 9.50,
    category: 'pastry',
    tags: ['Popular', 'Breakfast'],
  },
  {
    id: 'p3',
    name: 'Banana Bread',
    description: 'Moist, homestyle banana bread from Sweets by Sam DC — a must-try.',
    price: 4.50,
    category: 'pastry',
    tags: ['Sweets by Sam DC', 'Sweet'],
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Kenneth P.',
    rating: 5,
    comment: 'Great coffee, wonderful ambiance, and even better music. This tiny spot on U Street feels like a home away from home.',
    date: 'June 2026',
    location: 'Washington, DC (Local)',
  },
  {
    id: 'r2',
    author: 'Stephanie C.',
    rating: 5,
    comment: 'Lived around the corner for over a year and finally tried it — what a hidden gem. The lox bagel and chai latte were both fantastic.',
    date: 'May 2026',
    location: 'U Street Corridor, DC',
  },
  {
    id: 'r3',
    author: 'Greg M.',
    rating: 5,
    comment: 'Small but mighty coffee shop — the service is incredible for how tiny the space is. My go-to spot to catch up with friends.',
    date: 'May 2026',
    location: 'Washington, DC',
  }
];
