import { Garden } from './garden';

type ActionTypeOld = 'watering' | 'water-refill';

export enum ActionTypes {
  WATERING,
  LOW_WATER,
  HIGH_TEMPERTURE,
  LOW_TEMPERTURE,
  HIGH_SUN,
  LOW_SUN,
  HIGH_HUMIDITY,
  LOW_HUMIDITY,
};

export interface ActionOld {
  description: string;
  lastTime: string;
  type: ActionTypeOld; 
  garden: Garden;
};

export interface Action {
    id:         number;
    payload:    string;
    garden:     Garden;
    created_at: Date;
    updated_at: Date;
    actionType: ActionType;
}

export interface ActionType {
    id:          number;
    type:        ActionTypes;
    description: string;
    created_at:  Date;
    updated_at:  Date;
}
