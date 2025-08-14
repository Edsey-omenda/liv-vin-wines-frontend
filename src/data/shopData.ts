import type {
  FilterOptions,
  Wine as LivWine,
} from "../components/shop/products.types";

export const filterOptions: FilterOptions = {
  wineTypes: ["Red", "White", "Rosé", "Sparkling", "Dessert", "Fortified"],
  countries: [
    "France",
    "Italy",
    "Spain",
    "Portugal",
    "Germany",
    "Argentina",
    "Chile",
    "USA",
    "Australia",
    "New Zealand",
    "South Africa",
    "Austria",
    "Greece",
  ],
  priceRange: [0, 500000],
  grapeVarieties: [
    "Cabernet Sauvignon",
    "Merlot",
    "Pinot Noir",
    "Syrah/Shiraz",
    "Malbec",
    "Tempranillo",
    "Sangiovese",
    "Nebbiolo",
    "Chardonnay",
    "Sauvignon Blanc",
    "Riesling",
    "Pinot Grigio",
    "Chenin Blanc",
    "Gewürztraminer",
    "Viognier",
    "Marsanne",
    "Grenache",
    "Cinsault",
    "Touriga Nacional",
    "Tinta Roriz",
    "Touriga Franca",
    "Cabernet Franc",
  ],
  vintageYears: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
  foodPairings: [
    "Red Meat",
    "Poultry",
    "Seafood",
    "Pasta",
    "Cheese",
    "Vegetables",
    "Desserts",
    "Spicy Food",
    "Asian Cuisine",
  ],
  wineStyles: ["Dry", "Semi-Dry", "Semi-Sweet", "Sweet"],
};

export const winesData: LivWine[] = [
  {
    id: "1",
    name: "Première Note Marsanne 2018",
    producer: "Cave de Tain",
    price: 3200,
    originalPrice: 4000,
    images: [
      "/images/productImages/IMG_1927.jpg",
      "/images/productImages/IMG_1927.jpg",
    ],
    rating: 4.2,
    reviews: 89,
    vintage: 2018,
    region: "Rhône Valley",
    country: "France",
    alcohol: 13.5,
    inStock: true,
    wineType: "White",
    stock: 24,
    description:
      "A beautifully crafted white wine from the prestigious Rhône Valley. This Marsanne showcases the terroir of the region with exceptional elegance and complexity.",
    tastingNotes: {
      appearance: "Pale golden yellow with green reflections",
      aroma:
        "Expressive bouquet of honeyed pear, white flowers, and citrus zest with mineral undertones",
      palate:
        "Medium-bodied with crisp acidity, flavors of stone fruit and subtle herbal notes",
      finish:
        "Clean, mineral-driven finish with lingering citrus and floral notes",
    },
    foodPairing:
      "Grilled fish, creamy pasta dishes, roasted chicken with herbs",
    servingTemp: "10-12°C",
    drinkingWindow: "2023-2028",
    awards: ["Gold Medal - Concours Général Agricole 2019"],
    wineMaking:
      "Fermented in stainless steel tanks with partial malolactic fermentation, aged on lees for 6 months",
    grapeVariety: ["Marsanne"],
  },
  {
    id: "2",
    name: "Chianti Classico Riserva",
    producer: "Peppoli Antinori",
    price: 4800,
    images: [
      "/images/productImages/IMG_1971.jpg",
      "/images/productImages/IMG_1971.jpg",
    ],
    rating: 4.5,
    reviews: 124,
    vintage: 2019,
    region: "Tuscany",
    country: "Italy",
    alcohol: 13.5,
    inStock: true,
    wineType: "Red",
    stock: 18,
    description:
      "A prestigious Chianti Classico Riserva from the renowned Antinori family, representing centuries of winemaking tradition in the heart of Tuscany.",
    tastingNotes: {
      appearance: "Deep ruby red with garnet reflections",
      aroma:
        "Complex bouquet of dark cherry, violet, leather, and spiced tobacco with earthy mineral notes",
      palate:
        "Full-bodied with well-integrated tannins, layers of red fruit, herbs, and subtle oak",
      finish:
        "Long, elegant finish with lingering notes of cherry and Mediterranean herbs",
    },
    foodPairing: "Grilled red meats, aged cheeses, wild boar, truffle dishes",
    servingTemp: "16-18°C",
    drinkingWindow: "2024-2032",
    awards: [
      "93 Points - Wine Spectator",
      "Silver Medal - Decanter World Wine Awards",
    ],
    wineMaking:
      "Traditional fermentation in concrete vats, aged 24 months in oak barrels followed by 6 months in bottle",
    grapeVariety: ["Sangiovese"],
  },
  {
    id: "3",
    name: "Altano Douro Red 2020",
    producer: "Symington Family Estates",
    price: 2800,
    images: [
      "/images/productImages/IMG_1982.jpg",
      "/images/productImages/IMG_1982.jpg",
    ],
    rating: 4.1,
    reviews: 76,
    vintage: 2020,
    region: "Douro",
    country: "Portugal",
    alcohol: 14.0,
    inStock: true,
    wineType: "Red",
    stock: 32,
    description:
      "From the world-famous Douro Valley, this red blend showcases the traditional Portuguese grape varieties that make the region legendary.",
    tastingNotes: {
      appearance: "Deep purple with intense color concentration",
      aroma:
        "Rich bouquet of blackberry, plum, Mediterranean herbs, and subtle chocolate notes",
      palate:
        "Full-bodied with smooth tannins, flavors of dark fruit and spice with mineral complexity",
      finish: "Medium to long finish with notes of dark fruit and gentle oak",
    },
    foodPairing: "Barbecued meats, Portuguese chouriço, hearty stews",
    servingTemp: "16-18°C",
    drinkingWindow: "2023-2028",
    awards: ["Gold Medal - Vinalies Internationales"],
    wineMaking:
      "Traditional fermentation in lagares, aged 12 months in French oak barrels",
    grapeVariety: ["Touriga Nacional", "Tinta Roriz", "Touriga Franca"],
  },
  {
    id: "4",
    name: "Côtes de Provence Rosé 2021",
    producer: "M de Minuty",
    price: 3500,
    images: [
      "/images/productImages/IMG_2018.jpg",
      "/images/productImages/IMG_2018.jpg",
    ],
    rating: 4.3,
    reviews: 156,
    vintage: 2021,
    region: "Provence",
    country: "France",
    alcohol: 12.5,
    inStock: true,
    wineType: "Rosé",
    stock: 45,
    description:
      "The epitome of Provence rosé elegance, this wine captures the essence of the French Riviera in every sip with its delicate pale pink color.",
    tastingNotes: {
      appearance: "Delicate pale pink with salmon reflections",
      aroma:
        "Fresh and elegant with notes of strawberry, white peach, rose petals, and mineral hints",
      palate:
        "Light to medium-bodied with crisp acidity, flavors of red berries and citrus",
      finish:
        "Clean, refreshing finish with mineral crispness and subtle fruit notes",
    },
    foodPairing: "Seafood, salads, Mediterranean cuisine, summer appetizers",
    servingTemp: "8-10°C",
    drinkingWindow: "2023-2025",
    awards: [
      "Best Rosé - International Wine Challenge",
      "90 Points - Robert Parker",
    ],
    wineMaking:
      "Direct pressing, cold fermentation in stainless steel, no oak aging",
    grapeVariety: ["Grenache", "Cinsault", "Syrah"],
  },
  {
    id: "5",
    name: "Sauvignon Blanc 2020",
    producer: "Vergelegen",
    price: 2400,
    images: [
      "/images/productImages/IMG_2030.jpg",
      "/images/productImages/IMG_2030.jpg",
    ],
    rating: 4.0,
    reviews: 92,
    vintage: 2020,
    region: "Stellenbosch",
    country: "South Africa",
    alcohol: 13.5,
    inStock: true,
    wineType: "White",
    stock: 28,
    description:
      "From one of South Africa's most prestigious estates, this Sauvignon Blanc showcases the perfect balance of Old and New World winemaking.",
    tastingNotes: {
      appearance: "Bright pale yellow with green tints",
      aroma:
        "Vibrant bouquet of passion fruit, gooseberry, fresh herbs, and grassy notes",
      palate:
        "Medium-bodied with zingy acidity, tropical fruit flavors and herbaceous complexity",
      finish:
        "Crisp, refreshing finish with lingering tropical fruit and mineral notes",
    },
    foodPairing: "Oysters, sushi, goat cheese salad, herb-crusted fish",
    servingTemp: "8-10°C",
    drinkingWindow: "2023-2026",
    awards: [
      "4 Stars - Platter's Wine Guide",
      "Gold - Michelangelo International Wine Awards",
    ],
    wineMaking:
      "Cool fermentation in stainless steel tanks, partial sur lie aging for complexity",
    grapeVariety: ["Sauvignon Blanc"],
  },
  {
    id: "6",
    name: "Merlot 2018",
    producer: "Thelema Mountain Vineyards",
    price: 3800,
    images: [
      "/images/productImages/IMG_2206.jpg",
      "/images/productImages/IMG_2206.jpg",
    ],
    rating: 4.4,
    reviews: 78,
    vintage: 2018,
    region: "Stellenbosch",
    country: "South Africa",
    alcohol: 14.5,
    inStock: true,
    wineType: "Red",
    stock: 22,
    description:
      "From the high-altitude vineyards of Stellenbosch, this Merlot demonstrates the exceptional potential of South African terroir.",
    tastingNotes: {
      appearance: "Deep ruby red with purple edges",
      aroma:
        "Rich bouquet of ripe plum, dark chocolate, cedar, and subtle vanilla notes",
      palate:
        "Full-bodied with velvety texture, flavors of dark fruit, spice, and well-integrated oak",
      finish: "Long, smooth finish with notes of chocolate and warm spices",
    },
    foodPairing: "Lamb, beef stew, mature cheeses, roasted vegetables",
    servingTemp: "16-18°C",
    drinkingWindow: "2024-2030",
    awards: ["Double Gold - Veritas Awards", "92 Points - Tim Atkin"],
    wineMaking:
      "Fermented in small batches, aged 18 months in French oak barrels (40% new)",
    grapeVariety: ["Merlot"],
  },
  {
    id: "7",
    name: "Rabelais 2020",
    producer: "Thelema Mountain Vineyards",
    price: 8500,
    images: [
      "/images/productImages/IMG_2221.jpg",
      "/images/productImages/IMG_2221.jpg",
    ],
    rating: 4.6,
    reviews: 43,
    vintage: 2020,
    region: "Stellenbosch",
    country: "South Africa",
    alcohol: 14.5,
    inStock: true,
    wineType: "Red",
    stock: 12,
    description:
      "Thelema's flagship Bordeaux-style blend, named after the French Renaissance writer. A wine of exceptional elegance and aging potential.",
    tastingNotes: {
      appearance: "Deep ruby red with hints of garnet at the rim",
      aroma:
        "Complex bouquet of blackcurrant, cedar, tobacco, and subtle violet notes",
      palate:
        "Full-bodied with silky tannins, layers of dark fruit, spices, and mineral undertones",
      finish:
        "Long, elegant finish with lingering notes of dark chocolate and graphite",
    },
    foodPairing: "Premium steaks, venison, aged hard cheeses, dark chocolate",
    servingTemp: "16-18°C",
    drinkingWindow: "2025-2035",
    awards: [
      "96 Points - Tim Atkin",
      "Trophy - International Wine Challenge",
      "5 Stars - Platter's Wine Guide",
    ],
    wineMaking:
      "Hand-picked grapes, fermented in small French oak vats, aged 22 months in new French oak",
    grapeVariety: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
  },
  {
    id: "8",
    name: "Barbaresco 2018",
    producer: "Prunotto",
    price: 6800,
    images: [
      "/images/productImages/IMG_2822.jpg",
      "/images/productImages/IMG_2822.jpg",
    ],
    rating: 4.5,
    reviews: 87,
    vintage: 2018,
    region: "Piedmont",
    country: "Italy",
    alcohol: 14.0,
    inStock: true,
    wineType: "Red",
    stock: 15,
    description:
      "A classic Barbaresco from the historic Prunotto estate, showcasing the noble Nebbiolo grape in all its Piedmontese glory.",
    tastingNotes: {
      appearance: "Garnet red with orange reflections at the rim",
      aroma:
        "Elegant bouquet of red cherry, rose petals, tar, and truffle with earthy complexity",
      palate:
        "Medium to full-bodied with fine tannins, flavors of red fruit and spice",
      finish:
        "Long, complex finish with notes of cherry, earth, and subtle mineral undertones",
    },
    foodPairing:
      "Braised meats, white truffles, aged Parmigiano-Reggiano, risotto",
    servingTemp: "16-18°C",
    drinkingWindow: "2024-2038",
    awards: [
      "94 Points - Wine Advocate",
      "Gold Medal - Concours Mondial de Bruxelles",
    ],
    wineMaking:
      "Traditional long maceration, aged 24 months in large Slavonian oak casks",
    grapeVariety: ["Nebbiolo"],
  },
  {
    id: "9",
    name: "Fine Ruby Port",
    producer: "Graham's",
    price: 4200,
    images: [
      "/images/productImages/IMG_2838.jpg",
      "/images/productImages/IMG_2838.jpg",
    ],
    rating: 4.2,
    reviews: 134,
    vintage: null,
    region: "Douro",
    country: "Portugal",
    alcohol: 20.0,
    inStock: true,
    wineType: "Fortified",
    stock: 35,
    description:
      "A classic Ruby Port from one of the most respected Port houses, representing over two centuries of winemaking excellence in the Douro Valley.",
    tastingNotes: {
      appearance: "Deep ruby red with intense color concentration",
      aroma:
        "Rich bouquet of berry fruit, chocolate, spice, and port wine complexity",
      palate:
        "Full-bodied with smooth sweetness, flavors of dark fruit, chocolate, and warming spices",
      finish: "Long, warming finish with notes of dried fruit and sweet spices",
    },
    foodPairing:
      "Dark chocolate desserts, blue cheese, nuts, after-dinner meditation",
    servingTemp: "16-18°C",
    drinkingWindow: "Ready to drink now",
    awards: ["Best Ruby Port - International Wine & Spirit Competition"],
    wineMaking:
      "Fortified during fermentation, aged in large oak vats for 3 years",
    grapeVariety: ["Touriga Nacional", "Touriga Franca", "Tinta Roriz"],
  },
  {
    id: "10",
    name: "Viognier 2020",
    producer: "Meerlust Estate",
    price: 3600,
    images: [
      "/images/productImages/IMG_2860.jpg",
      "/images/productImages/IMG_2860.jpg",
    ],
    rating: 4.1,
    reviews: 65,
    vintage: 2020,
    region: "Stellenbosch",
    country: "South Africa",
    alcohol: 14.0,
    inStock: true,
    wineType: "White",
    stock: 19,
    description:
      "An exceptional Viognier from the historic Meerlust Estate, showcasing this noble Rhône variety's adaptation to South African terroir.",
    tastingNotes: {
      appearance: "Golden yellow with brilliant clarity",
      aroma:
        "Expressive bouquet of apricot, honeysuckle, spiced pear, and floral notes",
      palate:
        "Full-bodied with rich texture, flavors of stone fruit, honey, and subtle spice",
      finish: "Long, lingering finish with notes of apricot and warm spices",
    },
    foodPairing:
      "Spiced Asian cuisine, roasted pork, creamy sauces, mild cheeses",
    servingTemp: "10-12°C",
    drinkingWindow: "2023-2027",
    awards: [
      "Gold - Old Mutual Trophy Wine Show",
      "4.5 Stars - Platter's Wine Guide",
    ],
    wineMaking:
      "Barrel fermented in French oak, sur lie aging for 8 months, no malolactic fermentation",
    grapeVariety: ["Viognier"],
  },
];
