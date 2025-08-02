import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserActions from "./UserActions";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  cartItemCount?: number;
  onLogoClick?: () => void;
  onNavigationItemClick?: (item: string) => void;
  onSearchClick?: () => void;
  onUserClick?: () => void;
  onCartClick?: () => void;
  navigationItems?: string[];
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
    "Home",
    "About Us",
    "Shop",
    "Wine Tastings",
    "Wine Bar",
    "Wine Club",
    "Events",
    "Contact",
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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo onClick={handleLogoClick} />

          {/* Desktop Navigation */}
          <Navigation
            items={navigationItems}
            onItemClick={handleNavigationClick}
          />

          {/* User Actions */}
          <UserActions
            cartItemCount={cartItemCount}
            isMenuOpen={isMenuOpen}
            onSearchClick={onSearchClick}
            onUserClick={onUserClick}
            onCartClick={onCartClick}
            onMenuToggle={handleMenuToggle}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        items={navigationItems}
        onItemClick={handleNavigationClick}
        onClose={handleMobileMenuClose}
      />
    </header>
  );
};

export default Header;
