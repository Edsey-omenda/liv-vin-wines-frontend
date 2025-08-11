import type {
  TastingEvent,
  TastingPackage,
} from "../components/tastings/tastings.types";

export const tastingHeroImages = [
  "/images/wineTasting/DSC00022.jpg",
  "/images/wineTasting/IMG_6244.jpg",
  "/images/wineTasting/IMG_7978.jpg",
  "/images/wineTasting/IMG_7994.jpg",
  "/images/wineTasting/IMG_8092.jpg",
  "/images/wineTasting/IMG_8094.jpg",
];

export const tastingPackages: TastingPackage[] = [
  {
    name: "Discovery Tasting",
    price: 2500,
    duration: "1 hour",
    wines: "4 wines",
    description:
      "Perfect introduction to wine tasting. Sample four carefully selected wines from different regions.",
    includes: [
      "4 premium wine samples",
      "Tasting notes and guidance",
      "Palate cleansers",
      "Certificate of completion",
    ],
    maxGuests: 8,
    color: "amber",
  },
  {
    name: "Premium Experience",
    price: 4500,
    duration: "1.5 hours",
    wines: "6 wines",
    description:
      "Explore six exceptional wines paired with artisan cheeses and charcuterie.",
    includes: [
      "6 premium wine samples",
      "Cheese and charcuterie board",
      "Professional sommelier guidance",
      "Tasting booklet",
      "10% discount on purchases",
    ],
    maxGuests: 6,
    color: "purple",
  },
  {
    name: "Connoisseur Collection",
    price: 7500,
    duration: "2 hours",
    wines: "8 wines",
    description:
      "An extensive journey through rare and vintage wines with food pairings.",
    includes: [
      "8 rare and vintage wines",
      "4-course food pairing",
      "Private sommelier",
      "Exclusive tasting room",
      "15% discount on purchases",
      "Take-home wine glass",
    ],
    maxGuests: 4,
    color: "rose",
  },
  {
    name: "Masterclass Series",
    price: 12000,
    duration: "3 hours",
    wines: "10+ wines",
    description:
      "Deep dive into specific regions or varietals with our head sommelier.",
    includes: [
      "10+ curated wines",
      "Full meal pairing",
      "Interactive education",
      "Certification",
      "20% discount on purchases",
      "Exclusive wine club invitation",
    ],
    maxGuests: 12,
    color: "red",
  },
];

export const upcomingEvents: TastingEvent[] = [
  {
    date: "Dec 15, 2024",
    title: "Bordeaux Night",
    description: "Explore the legendary wines of Bordeaux",
    spotsLeft: 4,
  },
  {
    date: "Dec 22, 2024",
    title: "Festive Wine & Cheese",
    description: "Holiday special tasting event",
    spotsLeft: 8,
  },
  {
    date: "Jan 5, 2025",
    title: "New World Discoveries",
    description: "Wines from Australia and New Zealand",
    spotsLeft: 6,
  },
];
