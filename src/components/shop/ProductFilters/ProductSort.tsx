import React from "react";
import type { SortOption } from "../products.types";
import { Grid, List } from "lucide-react";

interface ProductSortProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  productsPerPage: number;
  onProductsPerPageChange: (count: number) => void;
  totalProducts: number;
}

export const ProductSort: React.FC<ProductSortProps> = ({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  productsPerPage,
  onProductsPerPageChange,
  totalProducts,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 border-r pr-4">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-amber-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-amber-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>

          {/* Products Per Page */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select
              value={productsPerPage}
              onChange={(e) => onProductsPerPageChange(Number(e.target.value))}
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
            </select>
          </div>

          <span className="text-sm text-gray-600">
            Showing {Math.min(productsPerPage, totalProducts)} of{" "}
            {totalProducts} products
          </span>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
          >
            <option value="popularity">Popularity</option>
            <option value="newest">Newest First</option>
            <option value="rating">Customer Rating</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
};
