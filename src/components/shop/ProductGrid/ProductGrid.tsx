import React, { useState } from "react";
import type { Wine as LivWine } from "../products.types";
import { Heart, ShoppingCart, Star, Eye, Wine } from "lucide-react";

interface ProductGridProps {
  product: LivWine;
  onAddToCart: (product: LivWine) => void;
  onToggleWishlist: (productId: string) => void;
  onViewDetails: (productId: string) => void;
  isInWishlist?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  isInWishlist = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  //   const discountPercentage = product.originalPrice
  //     ? Math.round(
  //         ((product.originalPrice - product.price) / product.originalPrice) * 100
  //       )
  //     : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
      {/* {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm z-10">
          -{discountPercentage}%
        </div>
      )} */}

      {!product.inStock && (
        <div className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 rounded text-sm z-10">
          Out of Stock
        </div>
      )}

      <div className="relative h-64 bg-gray-50 p-4">
        {imageError ? (
          // Fallback design if image fails to load
          <div className="w-full h-full bg-gradient-to-b from-amber-50 to-amber-100 flex items-center justify-center">
            <div className="text-center">
              <Wine className="h-16 w-16 text-amber-900 mx-auto mb-4" />
              <p className="text-amber-900 text-lg font-medium">
                {product.name}
              </p>
            </div>
          </div>
        ) : (
          <img
            src={product?.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onToggleWishlist(product.id)}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart
              size={18}
              className={
                isInWishlist ? "fill-red-500 text-red-500" : "text-gray-600"
              }
            />
          </button>
          <button
            onClick={() => onViewDetails(product.id)}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Eye size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.producer}
        </p>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <p className="text-xl font-bold text-amber-700">
            KSh {product.price.toLocaleString()}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              KSh {product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>

        <div className="text-xs text-gray-600 mb-3 space-y-1">
          <p>
            Vintage: {product.vintage} | {product.region}
          </p>
          <p>Alcohol: {product.alcohol}%</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-2 rounded flex items-center justify-center gap-2 transition-colors ${
            product.inStock
              ? "bg-amber-700 text-white hover:bg-amber-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={18} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};
