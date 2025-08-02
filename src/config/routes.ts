export interface RouteConfig {
  path: string;
  component: string;
  name: string;
  exact?: boolean;
  meta?: {
    requiresAuth?: boolean;
    requiresAdmin?: boolean;
    title?: string;
    description?: string;
    showInNav?: boolean;
    navOrder?: number;
    breadcrumb?: string;
    layout?: "default" | "auth" | "admin" | "minimal";
  };
  children?: RouteConfig[];
}

// Main application routes
export const routes: RouteConfig[] = [
  // Public Routes
  {
    path: "/",
    component: "HomePage",
    name: "home",
    exact: true,
    meta: {
      title: "LivVin Wine Shop - Premium Wines & Tastings",
      description:
        "Discover premium wines, join our wine club, and book exclusive tastings",
      showInNav: true,
      navOrder: 1,
      breadcrumb: "Home",
    },
  },

  // Shop Routes
  {
    path: "/shop",
    component: "ShopPage",
    name: "shop",
    meta: {
      title: "Wine Shop - Browse Premium Wines",
      description:
        "Browse our collection of premium wines from around the world",
      showInNav: true,
      navOrder: 2,
      breadcrumb: "Shop",
    },
  },
  {
    path: "/shop/product/:id",
    component: "ProductDetailsPage",
    name: "product-details",
    meta: {
      title: "Wine Details",
      description: "Detailed information about selected wine",
      breadcrumb: "Product Details",
    },
  },
  {
    path: "/shop/search",
    component: "ShopPage", // Same component, different params
    name: "search-results",
    meta: {
      title: "Search Results",
      description: "Wine search results",
      breadcrumb: "Search Results",
    },
  },

  // Cart & Checkout Routes
  {
    path: "/cart",
    component: "CartPage",
    name: "cart",
    meta: {
      title: "Shopping Cart",
      description: "Review your wine selections",
      breadcrumb: "Cart",
    },
  },
  {
    path: "/checkout",
    component: "CheckoutPage",
    name: "checkout",
    meta: {
      requiresAuth: true,
      title: "Checkout",
      description: "Complete your wine purchase",
      breadcrumb: "Checkout",
    },
  },

  // Wine Club Routes
  {
    path: "/wine-club",
    component: "WineClubPage",
    name: "wine-club",
    meta: {
      title: "Wine Club - Curated Wine Subscriptions",
      description:
        "Join our exclusive wine club for monthly curated selections",
      showInNav: true,
      navOrder: 3,
      breadcrumb: "Wine Club",
    },
  },

  // Wine Tastings Routes
  {
    path: "/tastings",
    component: "WineTastingsPage",
    name: "tastings",
    meta: {
      title: "Wine Tastings - Premium Wine Experiences",
      description: "Book exclusive wine tasting experiences and packages",
      showInNav: true,
      navOrder: 4,
      breadcrumb: "Tastings",
    },
  },

  // Wine Bar Routes
  {
    path: "/wine-bar",
    component: "WineBarPage",
    name: "wine-bar",
    meta: {
      title: "Wine Bar - Premium Wine Experience",
      description: "Visit our wine bar for an intimate wine experience",
      showInNav: true,
      navOrder: 5,
      breadcrumb: "Wine Bar",
    },
  },

  // Events Routes
  {
    path: "/events",
    component: "EventsPage",
    name: "events",
    meta: {
      title: "Wine Events & Masterclasses",
      description: "Join our wine events and educational masterclasses",
      showInNav: true,
      navOrder: 6,
      breadcrumb: "Events",
    },
  },

  // About & Contact Routes
  {
    path: "/about",
    component: "AboutPage",
    name: "about",
    meta: {
      title: "About LivVin - Our Wine Story",
      description: "Learn about our passion for wine and commitment to quality",
      showInNav: true,
      navOrder: 7,
      breadcrumb: "About",
    },
  },
  {
    path: "/contact",
    component: "ContactPage",
    name: "contact",
    meta: {
      title: "Contact Us - Get in Touch",
      description: "Contact our wine experts for any questions or assistance",
      showInNav: true,
      navOrder: 8,
      breadcrumb: "Contact",
    },
  },

  // Authentication Routes
  {
    path: "/signin",
    component: "SignInPage",
    name: "signin",
    meta: {
      title: "Sign In to Your Account",
      description: "Sign in to access your wine account",
      layout: "auth",
      breadcrumb: "Sign In",
    },
  },
  {
    path: "/signup",
    component: "SignUpPage",
    name: "signup",
    meta: {
      title: "Create Your Wine Account",
      description: "Join the LivVin wine community",
      layout: "auth",
      breadcrumb: "Sign Up",
    },
  },
  {
    path: "/forgot-password",
    component: "ForgotPasswordPage",
    name: "forgot-password",
    meta: {
      title: "Reset Your Password",
      description: "Reset your account password",
      layout: "auth",
      breadcrumb: "Reset Password",
    },
  },

  // User Dashboard Routes
  {
    path: "/dashboard",
    component: "DashboardPage",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      title: "My Wine Dashboard",
      description: "Manage your wine account and orders",
      breadcrumb: "Dashboard",
    },
  },
  {
    path: "/profile",
    component: "ProfilePage",
    name: "profile",
    meta: {
      requiresAuth: true,
      title: "My Profile",
      description: "Manage your account profile",
      breadcrumb: "Profile",
    },
  },
  {
    path: "/orders",
    component: "OrderHistoryPage",
    name: "orders",
    meta: {
      requiresAuth: true,
      title: "Order History",
      description: "View your wine order history",
      breadcrumb: "Orders",
    },
  },
  {
    path: "/wishlist",
    component: "WishlistPage",
    name: "wishlist",
    meta: {
      requiresAuth: true,
      title: "My Wishlist",
      description: "Wines you want to try",
      breadcrumb: "Wishlist",
    },
  },

  // Admin Routes
  {
    path: "/admin",
    component: "AdminPage",
    name: "admin",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
      title: "Admin Dashboard",
      description: "Manage wine shop operations",
      layout: "admin",
      breadcrumb: "Admin",
    },
  },

  // 404 Route (should be last)
  {
    path: "*",
    component: "NotFoundPage",
    name: "not-found",
    meta: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist",
      breadcrumb: "404",
    },
  },
];

// Navigation routes (for header/footer navigation)
export const navigationRoutes = routes
  .filter((route) => route.meta?.showInNav)
  .sort((a, b) => (a.meta?.navOrder || 0) - (b.meta?.navOrder || 0));

// Protected routes helper
export const protectedRoutes = routes.filter(
  (route) => route.meta?.requiresAuth
);

// Admin routes helper
export const adminRoutes = routes.filter((route) => route.meta?.requiresAdmin);

// Route helpers
export const getRouteByName = (name: string): RouteConfig | undefined => {
  return routes.find((route) => route.name === name);
};

export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find((route) => route.path === path);
};

// Breadcrumb helper
export const getBreadcrumbs = (
  pathname: string
): { name: string; path: string }[] => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs: { name: string; path: string }[] = [];

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const route = getRouteByPath(currentPath);
    if (route?.meta?.breadcrumb) {
      breadcrumbs.push({
        name: route.meta.breadcrumb,
        path: currentPath,
      });
    }
  });

  return breadcrumbs;
};

// Route validation
export const isValidRoute = (path: string): boolean => {
  return routes.some((route) => route.path === path || route.path === "*");
};
