import React, { useState } from "react";
import { Wine } from "lucide-react";
import type { WineType } from "../types";

interface WineCardProps {
  wine: WineType;
  onAddToCart?: (wine: WineType) => void;
  className?: string;
}

const WineCard: React.FC<WineCardProps> = ({
  wine,
  onAddToCart,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    if (wine.inStock && onAddToCart) {
      onAddToCart(wine);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="relative overflow-hidden bg-slate-50 mb-4 aspect-[3/4]">
        {imageError ? (
          // Fallback design if image fails to load
          <div className="w-full h-full bg-gradient-to-b from-amber-50 to-amber-100 flex items-center justify-center">
            <div className="text-center">
              <Wine className="h-16 w-16 text-amber-900 mx-auto mb-4" />
              <p className="text-amber-900 text-lg font-medium">{wine.name}</p>
            </div>
          </div>
        ) : (
          <img
            src={wine.image}
            alt={wine.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}

        {!imageLoaded && !imageError && (
          // Loading skeleton
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
            <Wine className="h-12 w-12 text-slate-400" />
          </div>
        )}

        {/* {!wine.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-slate-900 px-4 py-2 text-sm font-medium rounded">
              Out of Stock
            </span>
          </div>
        )} */}
      </div>

      <div className="space-y-2">
        <p className="text-sm text-slate-500 uppercase tracking-wide">
          {wine.producer}
        </p>
        <h3 className="text-lg font-medium text-slate-900 group-hover:text-amber-900 transition-colors">
          {wine.name}
        </h3>
        {/* <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-md text-slate-600 ml-1">{wine.rating}</span>
          </div>
        </div> */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-slate-900">
            {wine.price}
          </span>
          <button
            disabled={!wine.inStock}
            onClick={handleAddToCart}
            className="bg-slate-900 text-white px-6 py-2 text-lg hover:bg-amber-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
