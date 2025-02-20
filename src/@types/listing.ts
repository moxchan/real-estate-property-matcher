export type PropertyType = "house" | "apartment" | "condo";

export interface Listing {
  id: string;
  title: string;
  location: [number, number]; // TODO mapbox stuff
  price: number;
  type: PropertyType;
}
