import { Garden } from './garden';

type ActionType = 'watering' | 'water-refill';

export interface Action {
  description: string;
  lastTime: string;
  type: ActionType; 
  garden: Garden;
};
