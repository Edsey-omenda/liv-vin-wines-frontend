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
];

export const featuredWines: WineType[] = [
  {
    id: 1,
    name: "Château Margaux 2018",
    producer: "Bordeaux",
    price: "KSh 45,000",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKIs9LWv39UfeBTBWlF0GxAdxyMpzbl38yYKyU3plnBCOIKYPRPgEbgjuIJxQluoBKy9RoDRF8EEFifaxSI9ErDfeCWs9vSVrqNhOHSQ",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "Barolo Brunate 2019",
    producer: "Piedmont",
    price: "KSh 32,000",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSu-XBpT_wYzPvuhHm2vgWZcKZMPjET47n2bsZ0DWD0E0rbkNwzSGvP4RGj5dpE-4nG4AKEEGjX289VAkkKHkIL38SxUVs3Xj4bOnCjDM4L",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Dom Pérignon 2012",
    producer: "Champagne",
    price: "KSh 55,000",
    image:
      "https://cdn.sanity.io/images/1p5qvg3x/ww/21083726dfda787895ae91bc427c83e5fb1181fa-1838x1858.jpg?rect=52,123,1735,1735&w=1920&h=1920&q=75&fit=crop&auto=format",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    name: "Sancerre Les Monts Damnés",
    producer: "Loire Valley",
    price: "KSh 18,500",
    image:
      "https://www.fournier-pere-fils.com/en/wp-content/uploads/sites/3/2020/09/fournier_sancerre_montsdamnes_blanc_22.png",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Opus One 2018",
    producer: "Napa Valley",
    price: "KSh 85,000",
    image:
      "https://www.opusonewinery.com/wp-content/uploads/2022/03/OpusOne_2018_Domestic_750ml-1.jpg",
    rating: 4.9,
    inStock: false,
  },
  {
    id: 6,
    name: "Krug Grande Cuvée",
    producer: "Champagne",
    price: "KSh 42,000",
    image: "https://ik.imagekit.io/drinksvine/products/krug-grande-cuvee.webp",
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
