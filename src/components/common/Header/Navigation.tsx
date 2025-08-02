import React from "react";

interface NavigationProps {
  items?: string[];
  onItemClick?: (item: string) => void;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
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
  className = "",
}) => {
  const handleItemClick = (item: string) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <nav className={`hidden md:flex items-center space-x-8 ${className}`}>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => handleItemClick(item)}
          className="text-white hover:text-amber-900 transition-colors font-medium"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
