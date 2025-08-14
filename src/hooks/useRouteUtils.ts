import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getRouteByPath, getBreadcrumbs } from "../config/routes";
import { ROUTE_PATHS } from "../config/constants";

// Custom hook for route management
export const useRouteUtils = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const currentRoute = getRouteByPath(location.pathname);
  const breadcrumbs = getBreadcrumbs(location.pathname);

  const navigateTo = (
    path: string,
    options?: { replace?: boolean; state?: any }
  ) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToHome = () => {
    navigate(ROUTE_PATHS.HOME);
  };

  const goToShop = (filters?: Record<string, string>) => {
    const searchParams = new URLSearchParams(filters);
    const queryString = searchParams.toString();
    navigate(`${ROUTE_PATHS.SHOP}${queryString ? `?${queryString}` : ""}`);
  };

  const goToProduct = (productId: string) => {
    navigate(ROUTE_PATHS.PRODUCT_DETAILS.replace(":id", productId));
  };

  const goToCart = () => {
    navigate(ROUTE_PATHS.CART);
  };

  const goToCheckout = () => {
    navigate(ROUTE_PATHS.CHECKOUT);
  };

  const goToWineClub = () => {
    navigate(ROUTE_PATHS.WINE_CLUB);
  };

  const goToTastings = () => {
    navigate(ROUTE_PATHS.WINE_TASTINGS);
  };

  const goToSignIn = (returnUrl?: string) => {
    navigate(ROUTE_PATHS.SIGNIN, {
      state: { returnUrl: returnUrl || location.pathname },
    });
  };

  const goToSignUp = () => {
    navigate(ROUTE_PATHS.SIGNUP);
  };

  const goToDashboard = () => {
    navigate(ROUTE_PATHS.DASHBOARD);
  };

  const goToProfile = () => {
    navigate(ROUTE_PATHS.PROFILE);
  };

  const goToOrders = () => {
    navigate(ROUTE_PATHS.ORDERS);
  };

  const goToWishlist = () => {
    navigate(ROUTE_PATHS.WISHLIST);
  };

  const isCurrentPath = (path: string): boolean => {
    return location.pathname === path;
  };

  const isPathActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  return {
    // Current route info
    currentRoute,
    currentPath: location.pathname,
    breadcrumbs,
    params,
    search: location.search,
    state: location.state,

    // Navigation functions
    navigateTo,
    goBack,
    goToHome,
    goToShop,
    goToProduct,
    goToCart,
    goToCheckout,
    goToWineClub,
    goToTastings,
    goToSignIn,
    goToSignUp,
    goToDashboard,
    goToProfile,
    goToOrders,
    goToWishlist,

    // Utility functions
    isCurrentPath,
    isPathActive,
  };
};
