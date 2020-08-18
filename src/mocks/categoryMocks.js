import { v4 as uuidv4 } from 'uuid';

export const categoryMocks = [
  {
    id: uuidv4(),
    name: 'Uncategorized'
  },
  {
    id: uuidv4(),
    name: 'Meat'
  },
  {
    id: uuidv4(),
    name: 'Milk'
  },
  {
    id: uuidv4(),
    name: 'Vegetables'
  },
  {
    id: uuidv4(),
    name: 'Fruits'
  },
  {
    id: uuidv4(),
    name: 'Alcohol'
  },
  {
    id: uuidv4(),
    name: 'Soft drinks'
  }
];

export const defaultCategory = categoryMocks[0].name;

