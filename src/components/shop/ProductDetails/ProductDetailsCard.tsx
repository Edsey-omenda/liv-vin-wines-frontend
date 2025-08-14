import React from "react";
import { StarRating } from "./StarRating";

interface ProductDetailsCardProps {
  wine: any;
  compact: boolean;
}

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
  wine,
  compact = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
      <div className="aspect-square bg-slate-50 rounded-t-lg overflow-hidden">
        <img
          src={wine.image}
          alt={wine.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-slate-800 line-clamp-2">{wine.name}</h3>
        <p className="text-sm text-slate-600">{wine.producer}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-red-900">
            ${wine.price}
          </span>
          {!compact && (
            <div className="flex items-center gap-1">
              <StarRating rating={wine.rating} size={14} />
              <span className="text-xs text-slate-500">({wine.reviews})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
