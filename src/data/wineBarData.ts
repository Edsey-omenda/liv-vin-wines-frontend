import { Wine, Utensils, Music, Wifi, Users, Car } from "lucide-react";
import type {
  Amenity,
  WineCategory,
} from "../components/wine-bar/wineBar.types";

export const wineBarData = {
  heroImages: [
    "/images/wineBar/IMG_1414.jpg",
    "/images/wineBar/IMG_1756.jpg",
    "/images/wineBar/IMG_1765.jpg",
    "/images/wineBar/IMG_1767.jpg",
    "/images/wineBar/IMG_5561.jpg",
  ],

  info: {
    title: "Relax & Unwind",
    description: [
      "Step into our elegant wine bar, where sophistication meets comfort. Whether you're looking for an intimate evening for two or a lively gathering with friends, our wine bar offers the perfect ambiance.",
      "With over 100 wines available by the glass and a carefully curated menu of small plates, every visit is an opportunity to discover new favorites. Our knowledgeable staff is always ready to guide you through perfect pairings.",
    ],
    hours: {
      regular: [
        "Mon-Thu: 4:00 PM - 11:00 PM",
        "Fri-Sat: 4:00 PM - 1:00 AM",
        "Sunday: 2:00 PM - 10:00 PM",
      ],
      happyHour: {
        days: "Monday - Friday",
        time: "4:00 PM - 7:00 PM",
        offer: "20% off all wines by glass",
      },
    },
    image: "/images/wineBar/IMG_1756.jpg",
    stats: {
      number: "100+",
      label: "Wines by the glass",
    },
  },

  amenities: [
    {
      icon: Wine,
      title: "Curated Wine List",
      description: "100+ wines by the glass",
    },
    {
      icon: Utensils,
      title: "Small Plates",
      description: "Expertly paired tapas menu",
    },
    {
      icon: Music,
      title: "Live Music",
      description: "Jazz nights on Fridays",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Stay connected",
    },
    {
      icon: Users,
      title: "Private Events",
      description: "Available for booking",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary service",
    },
  ] as Amenity[],

  wineByGlass: [
    { category: "Sparkling", count: 8, starting: "KSh 850" },
    { category: "White Wines", count: 25, starting: "KSh 650" },
    { category: "Rosé Wines", count: 12, starting: "KSh 700" },
    { category: "Red Wines", count: 35, starting: "KSh 750" },
    { category: "Dessert Wines", count: 10, starting: "KSh 950" },
  ] as WineCategory[],
};
