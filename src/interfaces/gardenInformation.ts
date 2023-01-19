import { Garden } from './garden';

export interface GardenInformation {
    id:          number;
    name:        string;
    temperature: number;
    humidity:    number;
    sun_level:   number;
    created_at:  Date;
    garden:      Garden;
}
