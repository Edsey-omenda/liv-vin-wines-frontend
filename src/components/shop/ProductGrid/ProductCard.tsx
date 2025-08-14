import React from "react";
import type { Wine as LivWine } from "../products.types";
import { ProductGrid } from "./ProductGrid";
import { ProductList } from "./ProductList";

interface ProductCardProps {
  product: LivWine;
  viewMode: "grid" | "list";
  onAddToCart: (product: LivWine) => void;
  onToggleWishlist: (productId: string) => void;
  onViewDetails: (productId: string) => void;
  isInWishlist?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  isInWishlist = false,
}) => {
  const sharedProps = {
    product,
    onAddToCart,
    onToggleWishlist,
    onViewDetails,
    isInWishlist,
  };

  if (viewMode === "list") {
    return <ProductList {...sharedProps} />;
  }

  return <ProductGrid {...sharedProps} />;
};
