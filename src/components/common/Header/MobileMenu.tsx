import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  items?: string[];
  onItemClick?: (item: string) => void;
  onClose?: () => void;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  items = [
    "Home",
    "About Us",
    "Shop",
    "Wine Tastings",
    "Wine Bar",
    "Wine Club",
    "Events",
    "Contact",
  ],
  onItemClick,
  onClose,
  className = "",
}) => {
  const handleItemClick = (item: string) => {
    if (onItemClick) {
      onItemClick(item);
    }
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
        {items.map((item) => (
          <button
            key={item}
            onClick={() => handleItemClick(item)}
            className="block w-full text-left text-slate-700 hover:text-amber-900 transition-colors font-medium py-2"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
