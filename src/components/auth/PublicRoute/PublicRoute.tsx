// components/auth/PublicRoute/PublicRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTE_PATHS } from "../../../config/constants";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  restrictWhenAuthenticated?: boolean;
}

/**
 * PublicRoute Component
 *
 * Handles public routes that may have different behaviors based on authentication status:
 * - Always accessible routes (like home, shop, about)
 * - Auth-only routes (like login, signup) that redirect when user is already authenticated
 * - Guest-preferred routes that show different content for authenticated users
 */
const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  redirectTo = ROUTE_PATHS.DASHBOARD,
  restrictWhenAuthenticated = false,
}) => {
  const location = useLocation();
  const { isAuthenticated, user, isLoading } = useSelector(
    (state: any) => state.auth
  );

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wine-600"></div>
      </div>
    );
  }

  // For auth-only routes (login, signup), redirect authenticated users
  if (restrictWhenAuthenticated && isAuthenticated) {
    // Check if there's a return URL in location state
    const returnUrl = (location.state as any)?.returnUrl || redirectTo;
    return <Navigate to={returnUrl} replace />;
  }

  // For all other public routes, render normally
  return <>{children}</>;
};

export default PublicRoute;
