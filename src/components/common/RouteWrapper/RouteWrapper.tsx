// components/common/RouteWrapper/RouteWrapper.tsx
import React from "react";
import type { RouteConfig } from "../../../config/routes";
import PublicRoute from "../../auth/PublicRoute/PublicRoute";
import ProtectedRoute from "../../auth/ProtectedRoute/ProtectedRoute";

interface RouteWrapperProps {
  route: RouteConfig;
  children: React.ReactNode;
}

/**
 * RouteWrapper Component
 *
 * Intelligently wraps routes based on their configuration:
 * - Public routes: Always accessible or restricted when authenticated
 * - Protected routes: Require authentication and optionally admin rights
 * - Handles SEO meta tags and layout assignments
 */
const RouteWrapper: React.FC<RouteWrapperProps> = ({ route, children }) => {
  // Set page meta data
  React.useEffect(() => {
    if (route.meta?.title) {
      document.title = route.meta.title;
    }

    // Set meta description
    if (route.meta?.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", route.meta.description);
    }

    // Set canonical URL
    const canonicalUrl = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (canonicalUrl) {
      canonicalUrl.href = window.location.href;
    }
  }, [route]);

  // Determine if this is an auth-only route (login, signup, forgot-password)
  const isAuthOnlyRoute = ["signin", "signup", "forgot-password"].includes(
    route.name
  );

  // Protected routes
  if (route.meta?.requiresAuth) {
    return (
      <ProtectedRoute requiresAdmin={route.meta?.requiresAdmin}>
        {children}
      </ProtectedRoute>
    );
  }

  // Public routes with different behaviors
  return (
    <PublicRoute restrictWhenAuthenticated={isAuthOnlyRoute}>
      {children}
    </PublicRoute>
  );
};

export default RouteWrapper;
