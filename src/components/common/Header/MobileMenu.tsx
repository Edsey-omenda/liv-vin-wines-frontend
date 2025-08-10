import React from "react";
import type { NavigationItems } from "./header.types";
import { ROUTE_PATHS } from "../../../config/constants";
import { Link, useLocation } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  items?: NavigationItems;
  onItemClick?: (item: string) => void;
  onClose?: () => void;
  className?: string;
  isScrolled?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
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
  onClose,
  className = "",
  isScrolled = false,
}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleClose = () => {
    // Auto-close menu after item click
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden bg-white border-t border-slate-200 ${className}`}
    >
      <div className="px-4 py-6 space-y-4">
        {items.map((item, index) => (
          <Link
            key={`${item.path}-${index}`}
            to={item.path}
            onClick={toggleClose}
            className={`
            block w-full text-left font-medium transition-colors duration-300 relative
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
      </div>
    </div>
  );
};

export default MobileMenu;
