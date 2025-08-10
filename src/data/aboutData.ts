import { Award, Calendar, Globe, Heart, Star, Users, Wine } from "lucide-react";
import { ROUTE_PATHS } from "../config/constants";

// Data configurations
export const heroData = {
  title: "Our Story",
  subtitle: "Discover the passion behind exceptional wines",
  backgroundImage: "/images/hero/IMG_1511.jpg",
};

export const storyData = {
  title: "Welcome to LIV VIN Wine Shop",
  paragraphs: [
    "LIV VIN was born from a passion for exceptional wines and the belief that great wine should be accessible to all wine lovers, from beginners to connoisseurs.",
    "Founded in Nairobi, we've grown from a small boutique wine shop into a premier destination for wine enthusiasts across Kenya. Our journey began with a simple mission: to share our love for wine and create a space where people can discover, learn, and enjoy exceptional wines from around the world.",
    "Our team of experienced sommeliers travels the world to source the finest wines, ensuring that every bottle in our collection meets our exacting standards for quality and character.",
  ],
  image: "/images/hero/IMG_1357.jpg",
  badge: {
    title: "Since 2015",
    subtitle: "Serving Kenya's wine enthusiasts",
  },
};

export const statsData = [
  { number: "500+", label: "Premium Wines" },
  { number: "10+", label: "Years Experience" },
  { number: "5000+", label: "Happy Customers" },
  { number: "50+", label: "Wine Regions" },
];

export const valuesData = {
  title: "Our Values",
  subtitle: "These principles guide everything we do at LIV VIN",
  values: [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "Every bottle in our collection is chosen with care and expertise.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe wine brings people together and creates memorable experiences.",
    },
    {
      icon: Globe,
      title: "Global Curation",
      description:
        "We source exceptional wines from renowned regions worldwide.",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description:
        "Our certified sommeliers guide you through your wine journey.",
    },
  ],
};

export const teamData = {
  title: "Meet Our Team",
  subtitle: "Passionate experts dedicated to your wine journey",
  founder: {
    name: "Antony Muturi",
    role: "Founder & Head Sommelier",
    image: "/images/wines/IMG_9226.JPG",
    bio: "With over 10 years in the wine industry, Antony founded LIV VIN with a vision to make exceptional wines accessible to all. His passion for wine began during his travels through the vineyards of France and Italy, where he learned the art of wine appreciation from master sommeliers.",
    quote:
      "Wine is more than a drink; it's a journey through cultures, traditions, and stories waiting to be discovered.",
  },
  teamMembers: [
    {
      title: "Wine Stewards",
      role: "Customer Experience Team",
      image: "/images/gallery/1.jpg", // Two ladies in uniform
      bio: "Our dedicated wine stewards are passionate about helping you discover the perfect bottle. With extensive knowledge across all wine regions, they make your wine journey personal and memorable.",
      specialties: ["Wine Selection", "Customer Service", "Wine Education"],
    },
    {
      title: "Service Desk Team",
      role: "Business Solutions Team",
      image: "/images/gallery/3.jpg", // Lady at service desk
      bio: "Our service desk team ensures every interaction at LIV VIN is exceptional. From processing orders to answering wine queries, they're the heartbeat of our daily operations.",
      specialties: ["Event Planning", "Wine Education", "Corporate Events"],
    },
    {
      title: "Anto",
      role: "Sommelier & Wine Advisor",
      image: "/images/gallery/DSC00183.jpg", // Individual with wine bottle
      bio: "Anto brings a fresh perspective to wine selection, helping customers find the perfect bottle for any occasion. His expertise in food and wine pairing is unmatched.",
      specialties: ["Food Pairing", "Natural Wines", "Customer Service"],
    },
    {
      title: "Wine Bar Service",
      role: "Hospitality Team",
      image: "/images/gallery/DSC00241.jpg", // Server with food plates
      bio: "Our wine bar team creates perfect pairings between our curated wines and culinary offerings, ensuring every visit is a memorable gastronomic experience.",
      specialties: ["Wine & Food Pairing", "Guest Experience", "Wine Service"],
    },
    {
      title: "Wine Experience Team",
      role: "Customer Relations",
      image: "/images/gallery/IMG_1327.jpg", // Group of 4 in uniform
      bio: "Our wine experience team works together to create exceptional moments for every customer. From tastings to purchases, they ensure your journey with wine is educational and enjoyable.",
      specialties: ["Wine Club Curation", "Customer Relations", "Wine Trends"],
    },
    {
      title: "Sommelier",
      role: "Wine Expert",
      image: "/images/gallery/IMG_1405.jpg", // Individual pouring wine
      bio: "Our sommelier brings expertise in wine service and education, conducting tastings that reveal the stories behind each bottle in our collection.",
      specialties: ["Wine Service", "Tasting Events", "Wine Education"],
    },
    {
      title: "Bar Operations",
      role: "Service Excellence",
      image: "/images/gallery/IMG_1431.jpg", // Person at bar counter
      bio: "Managing our bar operations with precision and care, ensuring every glass served meets our high standards of excellence.",
      specialties: ["Bar Management", "Wine Service", "Quality Control"],
    },
    {
      title: "Wine Specialist",
      role: "Wine Advisor",
      image: "/images/gallery/IMG_1920.jpg", // Lady in red uniform pouring wine
      bio: "Our wine specialist guides customers through their wine selection journey, offering expert advice on pairings and occasions.",
      specialties: ["Wine Knowledge", "Customer Advisory", "Wine Trends"],
    },
    {
      title: "Outdoor Experience Team",
      role: "Events & Hospitality",
      image: "/images/gallery/IMG_1967.jpg", // Outdoor service
      bio: "Our outdoor experience team brings the LIV VIN experience beyond our walls, managing special events and outdoor tastings with excellence.",
      specialties: ["Outdoor Events", "Special Occasions", "Wine Service"],
    },
    {
      title: "Hospitality Team",
      role: "Guest Services",
      image: "/images/gallery/IMG_2057.jpg", // Team of 4 in aprons
      bio: "Our hospitality team ensures every guest feels welcomed and valued, creating a warm atmosphere that makes LIV VIN feel like home.",
      specialties: [
        "Guest Relations",
        "Team Coordination",
        "Service Excellence",
      ],
    },
    {
      title: "Wine Consultant",
      role: "Personal Wine Advisor",
      image: "/images/gallery/IMG_2768.jpg", // Individual with wine bottle
      bio: "Our wine consultant provides personalized recommendations, helping build collections and discover wines that match your unique palate.",
      specialties: [
        "Personal Consultation",
        "Wine Selection",
        "Collection Building",
      ],
    },
    {
      title: "Bar Specialist",
      role: "Mixology & Wine Expert",
      image: "/images/gallery/IMG_2772.jpg", // Person behind bar
      bio: "Our bar specialist combines wine expertise with creative presentation, ensuring every pour is both visually appealing and perfectly served.",
      specialties: ["Wine Presentation", "Bar Service", "Customer Experience"],
    },
    {
      title: "Wine Steward",
      role: "Wine Service Professional",
      image: "/images/gallery/IMG_9079.jpg", // Lady with wine bottle
      bio: "Our wine steward brings professionalism and passion to every interaction, making wine accessible and enjoyable for all our guests.",
      specialties: ["Wine Service", "Customer Education", "Wine Selection"],
    },
  ],
};

export const featuresData = {
  title: "Why Choose LIV VIN?",
  image: "/images/hero/IMG_1429.jpg",
  features: [
    {
      icon: Wine,
      title: "Curated Selection",
      text: "Every wine is personally selected by our sommeliers",
    },
    {
      icon: Star,
      title: "Expert Guidance",
      text: "Get personalized recommendations from certified professionals",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      text: "Join exclusive tastings, masterclasses, and wine dinners",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      text: "We stand behind every bottle we sell",
    },
  ],
};

export const ctaData = {
  title: "Start Your Wine Journey Today",
  subtitle:
    "Visit our shop, join a tasting, or become a member of our exclusive wine club",
  buttons: [
    { text: "Shop Wines", primary: true, route: ROUTE_PATHS.SHOP },
    { text: "Join Wine Club", primary: false, route: ROUTE_PATHS.WINE_CLUB },
    { text: "Contact Us", primary: false, route: ROUTE_PATHS.CONTACT },
  ],
};

export const storeData = {
  title: "Visit Us",
  subtitle: "Experience LIV VIN in person at our Nairobi location",
  info: {
    hours: [
      "Mon - Fri: 10:00 AM - 8:00 PM",
      "Saturday: 10:00 AM - 9:00 PM",
      "Sunday: 12:00 PM - 6:00 PM",
    ],
    phone: "+254 703 140 361",
    email: "info@livvinwines.com",
  },
};
