import React from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

interface UserActionsProps {
  cartItemCount?: number;
  isMenuOpen?: boolean;
  onSearchClick?: () => void;
  onUserClick?: () => void;
  onCartClick?: () => void;
  onMenuToggle?: () => void;
  showMobileMenuButton?: boolean;
}

const UserActions: React.FC<UserActionsProps> = ({
  cartItemCount = 0,
  isMenuOpen = false,
  onSearchClick,
  onUserClick,
  onCartClick,
  onMenuToggle,
  showMobileMenuButton = true,
}) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Search Button */}
      <button
        onClick={onSearchClick}
        className="text-slate-700 hover:text-amber-900 transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* User Account Button */}
      <button
        onClick={onUserClick}
        className="text-slate-700 hover:text-amber-900 transition-colors"
        aria-label="User Account"
      >
        <User className="h-5 w-5" />
      </button>

      {/* Shopping Cart Button */}
      <button
        onClick={onCartClick}
        className="relative text-slate-700 hover:text-amber-900 transition-colors"
        aria-label="Shopping Cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {cartItemCount > 99 ? "99+" : cartItemCount}
          </span>
        )}
      </button>

      {/* Mobile Menu Toggle */}
      {showMobileMenuButton && (
        <button
          className="md:hidden text-slate-700 hover:text-amber-900 transition-colors"
          onClick={onMenuToggle}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      )}
    </div>
  );
};

export default UserActions;
