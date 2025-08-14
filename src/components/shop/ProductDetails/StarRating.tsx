import { Star } from "lucide-react";
import React from "react";

interface StarRatingProps {
  rating: number;
  size: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = 16,
}) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-slate-300"
          }
        />
      ))}
    </div>
  );
};
