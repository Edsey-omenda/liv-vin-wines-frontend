import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../../config/constants";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  requiresAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated = false,
}) => {
  const location = useLocation();

  if (!isAuthenticated) {
    //Redirect to sign in page with return url
    return (
      <Navigate to={ROUTE_PATHS.SIGNIN} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
