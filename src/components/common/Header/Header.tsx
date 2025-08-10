import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserActions from "./UserActions";
import MobileMenu from "./MobileMenu";
import { ROUTE_PATHS } from "../../../config/constants";
import type { NavigationItems } from "./header.types";

interface HeaderProps {
  cartItemCount?: number;
  onLogoClick?: () => void;
  onNavigationItemClick?: (item: string) => void;
  onSearchClick?: () => void;
  onUserClick?: () => void;
  onCartClick?: () => void;
  navigationItems?: NavigationItems;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  cartItemCount = 3,
  onLogoClick,
  onNavigationItemClick,
  onSearchClick,
  onUserClick,
  onCartClick,
  navigationItems = [
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
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigationClick = (item: string) => {
    if (onNavigationItemClick) {
      onNavigationItemClick(item);
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo onClick={handleLogoClick} isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <Navigation items={navigationItems} isScrolled={isScrolled} />

          {/* User Actions */}
          <UserActions
            cartItemCount={cartItemCount}
            isMenuOpen={isMenuOpen}
            onSearchClick={onSearchClick}
            onUserClick={onUserClick}
            onCartClick={onCartClick}
            onMenuToggle={handleMenuToggle}
            isScrolled={isScrolled}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        items={navigationItems}
        onItemClick={handleNavigationClick}
        onClose={handleMobileMenuClose}
        isScrolled={isScrolled}
      />
    </header>
  );
};

export default Header;
