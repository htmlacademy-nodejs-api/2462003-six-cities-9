import { CITIES } from '../../const.js';

export interface Location {
  latitude: number;
  longitude: number;
}

export type CityName = typeof CITIES[number] | string;

export interface City {
  location: Location;
  name: CityName;
}
