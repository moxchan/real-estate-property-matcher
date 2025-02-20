import { Listing } from "./listing";

export interface User {
  name: string;
  savedItems: TrackedItem[];
}

export interface TrackedItem extends Listing {}
// extensible for other kinds of tracked items for "Recent Items" or "Favourite Items", e.g. Locations, Property Types, etc etc.
