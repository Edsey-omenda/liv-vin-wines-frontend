import { useRouteUtils } from "./useRouteUtils";

// Route guard hook for checking authentication
export const useRouteGuard = () => {
  const { currentRoute, goToSignIn } = useRouteUtils();

  const checkAuth = (isAuthenticated: boolean): boolean => {
    if (currentRoute?.meta?.requiresAuth && !isAuthenticated) {
      goToSignIn();
      return false;
    }
    return true;
  };

  const checkAdmin = (isAdmin: boolean): boolean => {
    if (currentRoute?.meta?.requiresAdmin && !isAdmin) {
      // Redirect to dashboard or show unauthorized message
      return false;
    }
    return true;
  };

  return {
    checkAuth,
    checkAdmin,
    requiresAuth: currentRoute?.meta?.requiresAuth || false,
    requiresAdmin: currentRoute?.meta?.requiresAdmin || false,
  };
};
