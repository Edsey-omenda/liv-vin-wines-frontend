import React from "react";
import { StarRating } from "./StarRating";
import {
  Award,
  Calendar,
  CreditCard,
  Heart,
  MapPin,
  Minus,
  Plus,
  ShoppingCart,
  Thermometer,
  Wine,
} from "lucide-react";
import { Button } from "../../common/Button/Button";

interface WineInfoProps {
  wine: any;
  quantity: number;
  setQuantity: (value: number) => void;
  isWishlisted: boolean;
  toggleWishlist: () => void;
  handleAddToCart: () => void;
  handleBuyNow: () => void;
}

export const WineInfo: React.FC<WineInfoProps> = ({
  wine,
  quantity,
  setQuantity,
  isWishlisted,
  toggleWishlist,
  handleAddToCart,
  handleBuyNow,
}) => {
  return (
    <div className="space-y-6 py-10">
      {/* Basic Info */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{wine.name}</h1>
        <p className="text-xl text-slate-600 mb-4">{wine.producer}</p>

        <div className="flex items-center gap-4 mb-4">
          <StarRating rating={wine.rating} size={20} />
          <span className="text-slate-600">({wine.reviews} reviews)</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-slate-500" />
            <span>
              <strong>Vintage:</strong> {wine.vintage}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-slate-500" />
            <span>
              <strong>Region:</strong> {wine.region}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Wine size={16} className="text-slate-500" />
            <span>
              <strong>Alcohol:</strong> {wine.alcoholContent}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <strong>Size:</strong> {wine.bottleSize}
            </span>
          </div>
        </div>
      </div>

      {/* Price and Purchase */}
      <div className="bg-slate-100 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-red-900">${wine.price}</span>
          <span className="text-green-600 font-medium">
            {wine.stock > 0 ? `${wine.stock} in stock` : "Out of stock"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-slate-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-slate-200"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-2 border-x border-slate-300">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(Math.min(wine.stock, quantity + 1))}
              className="p-2 hover:bg-slate-200"
            >
              <Plus size={16} />
            </button>
          </div>
          <Button
            onClick={toggleWishlist}
            className={`p-2 rounded-lg transition-colors ${
              isWishlisted
                ? "bg-red-100 text-red-600"
                : "bg-slate-200 text-slate-600"
            }`}
          >
            <Heart size={20} className={isWishlisted ? "fill-current" : ""} />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </Button>
          <Button
            onClick={handleBuyNow}
            className="flex items-center justify-center gap-2"
          >
            <CreditCard size={18} />
            Buy Now
          </Button>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-4 rounded-lg border">
          <Thermometer className="mx-auto mb-2 text-slate-600" size={20} />
          <p className="text-sm font-medium">Serving Temp</p>
          <p className="text-xs text-slate-600">{wine.servingTemp}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <Calendar className="mx-auto mb-2 text-slate-600" size={20} />
          <p className="text-sm font-medium">Drink By</p>
          <p className="text-xs text-slate-600">{wine.drinkingWindow}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <Award className="mx-auto mb-2 text-slate-600" size={20} />
          <p className="text-sm font-medium">Awards</p>
          <p className="text-xs text-slate-600">{wine.awards.length} awards</p>
        </div>
      </div>
    </div>
  );
};
