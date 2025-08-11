export interface ReservationData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface WineCategory {
  category: string;
  count: number;
  starting: string;
}

export interface Amenity {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
