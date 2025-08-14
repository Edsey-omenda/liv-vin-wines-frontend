import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Wine as LivWine } from "../components/shop/products.types";
import { winesData } from "../data/shopData";
import { ProductDetails } from "../components/shop/ProductDetails/ProductDetails";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Gets ID from URL: /shop/product/:id
  const navigate = useNavigate();

  if (!id) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Invalid Product URL
          </h2>
          <p className="text-slate-600 mb-6">
            The product URL is missing an ID parameter.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-800"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleNavigateToProduct = (productId: string) => {
    // Navigate to new product URL
    navigate(`/shop/product/${productId}`);
  };

  const handleAddToCart = (wine: LivWine) => {
    console.log("Product Added to Cart", wine);
  };

  const handleToggleWishlist = (productId: string) => {
    console.log("Product Added to Wish List", productId);
  };

  const isProductInWishlist = (productId: string): boolean => {
    // Example implementation - replace with your actual wishlist state/logic
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return wishlistItems.includes(productId);
  };

  return (
    <ProductDetails
      productId={id}
      winesData={winesData}
      onNavigateToProduct={handleNavigateToProduct}
      onAddToCart={handleAddToCart}
      onToggleWishlist={handleToggleWishlist}
      isInWishlist={isProductInWishlist(id)}
    />
  );
};

export default ProductDetailsPage;
