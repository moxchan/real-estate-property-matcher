export interface User {
  name: string;
  savedItems: TrackedItem[];
}

export interface TrackedItem {
  id: string;
}
