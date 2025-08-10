import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../../config/constants";

interface NavigationProps {
  items?: Array<{
    label: string;
    path: string;
  }>;
  className?: string;
  isScrolled?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  items = [
    { label: "Home", path: ROUTE_PATHS.HOME },
    { label: "About Us", path: ROUTE_PATHS.ABOUT },
    { label: "Shop", path: ROUTE_PATHS.SHOP },
    { label: "Wine Tastings", path: ROUTE_PATHS.WINE_TASTINGS },
    { label: "Wine Bar", path: ROUTE_PATHS.WINE_BAR },
    { label: "Wine Club", path: ROUTE_PATHS.WINE_CLUB },
    { label: "Events", path: ROUTE_PATHS.EVENTS },
    { label: "Contact", path: ROUTE_PATHS.CONTACT },
  ],
  className = "",
  isScrolled = false,
}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`hidden md:flex items-center space-x-8 ${className}`}>
      {items.map((item, index) => (
        <Link
          key={`${item.path}-${index}`}
          to={item.path}
          className={`
            font-medium transition-colors duration-300 relative
            ${
              isScrolled
                ? isActive(item.path)
                  ? "text-amber-700"
                  : "text-gray-700 hover:text-amber-700"
                : isActive(item.path)
                ? "text-amber-700"
                : "text-gray-800 hover:text-amber-700"
            }
          `}
        >
          {item.label}

          {/* Active indicator */}
          {isActive(item.path) && (
            <span
              className={`
                absolute -bottom-1 left-0 w-full h-0.5 
                ${isScrolled ? "bg-amber-700" : "bg-amber-700"}
              `}
              aria-hidden="true"
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
