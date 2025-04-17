import { City } from './shared/types/city.interface.js';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const CITY_DATA: City[] = [
  { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499 } },
  { name: 'Cologne', location: { latitude: 50.938361, longitude: 6.959974 } },
  { name: 'Brussels', location: { latitude: 50.846557, longitude: 4.351697 } },
  { name: 'Amsterdam', location: { latitude: 52.370216, longitude: 4.895168 } },
  { name: 'Hamburg', location: { latitude: 53.550341, longitude: 10.000654 } },
  { name: 'Dusseldorf', location: { latitude: 51.225402, longitude: 6.776314 } },
];

export enum HousingType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}
