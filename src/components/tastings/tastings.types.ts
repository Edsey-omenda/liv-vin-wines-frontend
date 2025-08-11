export interface TastingPackage {
  name: string;
  price: number;
  duration: string;
  wines: string;
  description: string;
  includes: string[];
  maxGuests: number;
  color: string;
}

export interface TastingEvent {
  date: string;
  title: string;
  description: string;
  spotsLeft: number;
}
