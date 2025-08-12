import React from "react";
import type { Product } from "../products.types";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

interface ProductListProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onViewDetails: (productId: string) => void;
  isInWishlist?: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  isInWishlist = false,
}) => {
  //   const discountPercentage = product.originalPrice
  //     ? Math.round(
  //         ((product.originalPrice - product.price) / product.originalPrice) * 100
  //       )
  //     : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex gap-6 hover:shadow-xl transition-shadow relative">
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

      <div className="w-32 h-40 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.producer}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={
                      i < Math.floor(product.rating) ? "currentColor" : "none"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-amber-700">
              KSh {product.price.toLocaleString()}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 mt-2 text-sm text-gray-600">
          <span>Vintage: {product.vintage}</span>
          <span>Region: {product.region}</span>
          <span>Alcohol: {product.alcohol}%</span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex-1 py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors ${
              product.inStock
                ? "bg-amber-700 text-white hover:bg-amber-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ShoppingCart size={18} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
          <button
            onClick={() => onToggleWishlist(product.id)}
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
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
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            <Eye size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};
