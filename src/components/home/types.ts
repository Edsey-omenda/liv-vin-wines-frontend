// types.ts - Type definitions
export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

export interface WineType {
  id: number;
  name: string;
  producer: string;
  price: string;
  image: string;
  rating: number;
  inStock: boolean;
}

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  colorClass: string;
  hoverColorClass: string;
}
