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
    image: "/images/hero/IMG_1357.jpg",
    title: "Discover Exceptional Wines",
    subtitle: "Curated collection of premium wines from around the world",
    cta: "Shop Wines Now",
  },
  {
    id: 2,
    image: "/images/hero/IMG_1429.jpg",
    title: "Wine Tasting Experience",
    subtitle: "Join our expert-led tastings and discover your perfect wine",
    cta: "Book a Tasting",
  },
  {
    id: 3,
    image: "/images/hero/IMG_1511.jpg",
    title: "Premium Wine Collection",
    subtitle: "Handpicked selections from renowned vineyards worldwide",
    cta: "Explore Collection",
  },
  {
    id: 4,
    image: "/images/hero/IMG_1535.jpg",
    title: "Wine Bar Experience",
    subtitle: "Relax and enjoy our carefully curated wine selections",
    cta: "Visit Wine Bar",
  },
  {
    id: 5,
    image: "/images/hero/IMG_2822.jpg",
    title: "Exclusive Wine Events",
    subtitle: "Join our sommelier-led events and wine pairing dinners",
    cta: "View Events",
  },
  {
    id: 6,
    image: "/images/hero/IMG_2838.jpg",
    title: "Wine Club Membership",
    subtitle: "Get exclusive access to rare wines and member benefits",
    cta: "Join Wine Club",
  },
];

export const featuredWines: WineType[] = [
  {
    id: 1,
    name: "Premiere Note Marsanne 2018",
    producer: "CAVE~DE~TAIN",
    price: "KSh 28,500",
    image: "/images/wines/IMG_1927.jpg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Pepoli 2016",
    producer: "CHIANTI CLASSICO",
    price: "KSh 22,000",
    image: "/images/wines/IMG_1971.jpg",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 3,
    name: "Altano 2017",
    producer: "DOURO",
    price: "KSh 85,000",
    image: "/images/wines/IMG_1982.jpg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    name: "MINUTY 2020",
    producer: "COTES DE PROVENCE",
    price: "KSh 35,000",
    image: "/images/wines/IMG_2018.jpg",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 5,
    name: "BarBaresco 2018",
    producer: "DENOMINAZIONE DI ORIGINE",
    price: "KSh 45,000",
    image: "/images/wines/IMG_2822.jpg",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 6,
    name: "Graham's Fine Ruby",
    producer: "VINHO DO PORTO",
    price: "KSh 18,500",
    image: "/images/wines/IMG_2838.jpg",
    rating: 4.7,
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
