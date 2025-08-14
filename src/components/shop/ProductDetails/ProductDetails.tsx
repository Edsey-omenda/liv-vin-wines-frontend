import React, { useState } from "react";
import type { Wine as LivWine } from "../products.types";
import { Button } from "../../common/Button/Button";
import { Toast } from "../../common/Toast/Toast";
import { ImageGallery } from "./ImageGallery";
import { WineInfo } from "./WineInfo";
import { ProductTabs } from "./ProductTabs";
import { ProductDetailsCard } from "./ProductDetailsCard";

interface ProductDetailsProps {
  productId: string;
  winesData: LivWine[];
  onNavigateToProduct: (id: string) => void;
  onAddToCart: (wine: LivWine) => void;
  onToggleWishlist: (id: string) => void;
  isInWishlist: boolean;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  winesData = [],
  //   onNavigateToProduct,
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Find the wine by ID from the provided wines data
  const wine = winesData.find((w) => w.id === productId);

  // If wine not found, show a fallback message
  if (!wine) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Wine Not Found
          </h2>
          <p className="text-slate-600 mb-6">
            The wine you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  // Get related wines (exclude current wine, limit to 3)
  const relatedWines = winesData
    .filter((w) => w.id !== productId && w.producer === wine.producer)
    .slice(0, 3);

  // If no wines from same producer, get random wines
  if (relatedWines.length < 3) {
    const additionalWines = winesData
      .filter((w) => w.id !== productId && w.producer !== wine.producer)
      .slice(0, 3 - relatedWines.length);
    relatedWines.push(...additionalWines);
  }

  const showToast = (message: string, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "" });
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(wine);
    }
    showToast(`Added ${quantity} bottle${quantity > 1 ? "s" : ""} to cart!`);
  };

  const handleBuyNow = () => {
    showToast("Redirecting to checkout...");
  };

  const toggleWishlist = () => {
    if (onToggleWishlist) {
      onToggleWishlist(wine.id);
    }
    showToast(isInWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  //   const handleViewRelatedProduct = (relatedProductId: string) => {
  //     if (onNavigateToProduct) {
  //       onNavigateToProduct(relatedProductId);
  //     }
  //   };

  return (
    <div className="min-h-screen bg-slate-50">
      <Toast {...toast} onClose={hideToast} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <ImageGallery
              images={wine.images || [wine.images]}
              name={wine.name}
            />
          </div>

          {/* Right Column - Product Info */}
          <div>
            <WineInfo
              wine={wine}
              quantity={quantity}
              setQuantity={setQuantity}
              isWishlisted={isInWishlist}
              toggleWishlist={toggleWishlist}
              handleAddToCart={handleAddToCart}
              handleBuyNow={handleBuyNow}
            />
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <ProductTabs
          wine={wine}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {/* Related Products */}
        {relatedWines.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Similar Wines
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedWines.map((relatedWine) => (
                <ProductDetailsCard
                  key={relatedWine.id}
                  wine={relatedWine}
                  compact={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
