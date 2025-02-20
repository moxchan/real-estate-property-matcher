export type PropertyType = "house" | "apartment" | "condo";

export interface Listing {
  id: string;
  title: string;
  location: string; //[number, number]; // TODO mapbox stuff
  price: number;
  type: PropertyType;
  poster?: string; // yeah yeah IDing via a string username i know.
}
