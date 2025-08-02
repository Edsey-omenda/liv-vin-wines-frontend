import { Wine, Users, Award } from "lucide-react";
import type {
  HeroSlide,
  ServiceItem,
  WineType,
} from "../../components/home/types";

//Data
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Discover Exceptional Wines",
    subtitle: "Curated collection of premium wines from around the world",
    cta: "Shop Wines Now",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Wine Tasting Experience",
    subtitle: "Join our expert-led tastings and discover your perfect wine",
    cta: "Book a Tasting",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "LIV VIN Wine Club",
    subtitle: "Monthly curated selections delivered to your doorstep",
    cta: "Join Now",
  },
];

export const featuredWines: WineType[] = [
  {
    id: 1,
    name: "Château Margaux 2018",
    producer: "Bordeaux",
    price: "KSh 45,000",
    image:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "Barolo Brunate 2019",
    producer: "Piedmont",
    price: "KSh 32,000",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Dom Pérignon 2012",
    producer: "Champagne",
    price: "KSh 55,000",
    image:
      "https://images.unsplash.com/photo-1551634979-c6d80fbc7302?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    name: "Sancerre Les Monts Damnés",
    producer: "Loire Valley",
    price: "KSh 18,500",
    image:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Opus One 2018",
    producer: "Napa Valley",
    price: "KSh 85,000",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    inStock: false,
  },
  {
    id: 6,
    name: "Krug Grande Cuvée",
    producer: "Champagne",
    price: "KSh 42,000",
    image:
      "https://images.unsplash.com/photo-1551634979-c6d80fbc7302?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    inStock: true,
  },
];

export const services: ServiceItem[] = [
  {
    icon: Wine,
    title: "Wine Tastings",
    description:
      "Join our expert-led tastings and discover the stories behind exceptional wines from around the world.",
    buttonText: "Book Now",
    colorClass: "bg-amber-900",
    hoverColorClass: "group-hover:bg-amber-800",
  },
  {
    icon: Users,
    title: "Wine Bar",
    description:
      "Experience our curated wine bar with carefully selected wines by the glass and expertly paired small plates.",
    buttonText: "Make Reservation",
    colorClass: "bg-red-900",
    hoverColorClass: "group-hover:bg-red-800",
  },
  {
    icon: Award,
    title: "Wine Club",
    description:
      "Monthly curated selections delivered to your doorstep. From Nouveau to Collectors tier, find your perfect match.",
    buttonText: "Join Now",
    colorClass: "bg-red-900",
    hoverColorClass: "group-hover:bg-red-800",
  },
];
