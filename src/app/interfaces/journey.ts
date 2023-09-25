import { Flight } from './flight';

export interface Journey {
  fligths: Flight[];
  origin: string;
  destination: string;
  price: number;
}
