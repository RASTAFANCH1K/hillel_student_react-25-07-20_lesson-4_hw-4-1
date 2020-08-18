import { v4 as uuidv4 } from 'uuid';

export const productMocks = [
  {
    id: uuidv4(),
    name: 'Sausages',
    description: 'KMK',
    category: 'Meat',
    price: '100.5'
  },
  {
    id: uuidv4(),
    name: 'Cheese',
    description: 'Gouda',
    category: 'Milk',
    price: '50.5'
  },
  {
    id: uuidv4(),
    name: 'Butter',
    description: 'President',
    category: 'Milk',
    price: '25.5'
  }
];