export const MAX_PRICE = 9999999999; // 10b

export type PropertyType = "house" | "apartment" | "condo";

export interface Listing {
  id: string;
  title: string;
  location: string; //[number, number]; // TODO mapbox stuff
  price: number;
  beds?: number;
  baths?: number;
  carparks?: number;
  type: PropertyType;
  poster?: string; // yeah yeah IDing via a string username i know.
}
