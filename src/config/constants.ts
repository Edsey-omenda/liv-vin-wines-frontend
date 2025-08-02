// Export route paths as constants for type safety
export const ROUTE_PATHS = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT_DETAILS: "/shop/product/:id",
  SEARCH: "/shop/search",
  CART: "/cart",
  CHECKOUT: "/checkout",
  WINE_CLUB: "/wine-club",
  WINE_TASTINGS: "/tastings",
  WINE_BAR: "/wine-bar",
  EVENTS: "/events",
  ABOUT: "/about",
  CONTACT: "/contact",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  ORDERS: "/orders",
  ORDERHISTORY: "/orders-history",
  WISHLIST: "/wishlist",
  ADMIN: "/admin",
  NOT_FOUND: "*",
} as const;

export type RoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
