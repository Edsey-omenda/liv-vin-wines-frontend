import type { ContactDetails, FAQ } from "../components/contact/contact.types";

export const contactData = {
  contactDetails: {
    phone: ["+254 703 140 360"],
    email: ["info@livvinwines.com", "service@livvinwines.com"],
    address: ["Craft Centre, Gigiri Rd", "Nairobi"],
  } as ContactDetails,

  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.89451151081!2d36.806943499999996!3d-1.2329926999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17b90639ac15%3A0x1739229265831217!2sLiv%20Vin%20Wine%20Shop!5e0!3m2!1sen!2ske!4v1754947710879!5m2!1sen!2ske",

  storeHours: [
    { day: "Monday - Friday", hours: "10:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 6:00 PM" },
  ],

  socialLinks: {
    facebook: "https://facebook.com/livvinwines",
    instagram: "https://instagram.com/vin_est_vie",
    twitter: "https://twitter.com/livvinwines",
  },

  faqs: [
    {
      question: "Do you offer wine delivery services?",
      answer:
        "Yes, we offer delivery services within Nairobi. Orders above KSh 10,000 qualify for free delivery. Same-day delivery is available for orders placed before 2:00 PM.",
    },
    {
      question: "Can I book the wine bar for private events?",
      answer:
        "Absolutely! Our wine bar is available for private events and corporate functions. We offer customized packages including wine selection, catering, and dedicated service staff.",
    },
    {
      question: "How do I join the wine club?",
      answer:
        "You can join our wine club online or visit our shop. Choose from our five membership tiers, complete the preference questionnaire, and start receiving curated wines every two months.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes, we offer gift cards in various denominations. They can be purchased online or at our shop and make perfect gifts for wine enthusiasts.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept M-Pesa, all major credit/debit cards, and cash payments. For online orders, we also support secure payment through our payment gateway.",
    },
  ] as FAQ[],
};
