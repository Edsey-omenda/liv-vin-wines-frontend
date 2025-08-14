export interface Wine {
  id: string;
  name: string;
  producer: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviews: number;
  vintage?: number | null;
  region: string;
  country: string;
  alcohol: number;
  inStock: boolean;
  wineType: string;
  stock: number;
  description: string;
  tastingNotes: {
    appearance: string;
    aroma: string;
    palate: string;
    finish: string;
  };
  foodPairing: string;
  servingTemp: string;
  drinkingWindow: string;
  awards: string[];
  wineMaking: string;
  grapeVariety: string[];
}

export interface FilterOptions {
  wineTypes: string[];
  countries: string[];
  priceRange: [number, number];
  grapeVarieties: string[];
  vintageYears: number[];
  foodPairings: string[];
  wineStyles: string[];
}

export interface ActiveFilters {
  wineType: string[];
  country: string[];
  priceRange: [number, number];
  grapeVariety: string[];
  vintage: number[];
  foodPairing: string[];
  wineStyle: string[];
}

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "newest"
  | "rating"
  | "popularity";
