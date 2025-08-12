import React, { useEffect, useMemo, useState } from "react";
import { Pagination } from "../components/shop/ProductGrid/Pagination";
import { ProductCard } from "../components/shop/ProductGrid/ProductCard";
import { ProductSort } from "../components/shop/ProductFilters/ProductSort";
import { ProductFilters } from "../components/shop/ProductFilters/ProductFilters";
import { ProductSearch } from "../components/shop/SearchResults/ProductSearch";
import type {
  ActiveFilters,
  Product,
  SortOption,
} from "../components/shop/products.types";
import { useToast } from "../hooks/useToast";
import { filterOptions, mockProducts } from "../data/shopData";

const ShopPage: React.FC = () => {
  const { showToast } = useToast();

  // State management
  const [products] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    wineType: [],
    country: [],
    priceRange: [0, 500000],
    grapeVariety: [],
    vintage: [],
    foodPairing: [],
    wineStyle: [],
  });

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.producer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Wine type filter
    if (activeFilters.wineType.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.wineType.includes(product.wineType)
      );
    }

    // Country filter
    if (activeFilters.country.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.country.includes(product.country)
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= activeFilters.priceRange[0] &&
        product.price <= activeFilters.priceRange[1]
    );

    // Grape variety filter
    if (activeFilters.grapeVariety.length > 0) {
      filtered = filtered.filter((product) =>
        product.grapeVariety.some((grape) =>
          activeFilters.grapeVariety.includes(grape)
        )
      );
    }

    // Wine style filter
    if (activeFilters.wineStyle.length > 0) {
      // Add wine style filtering logic
    }

    return filtered;
  }, [products, searchTerm, activeFilters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort((a, b) => (b.vintage ?? 0) - (a.vintage ?? 0));
        break;
      case "popularity":
      default:
        sorted.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return sorted;
  }, [filteredProducts, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, productsPerPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilters, sortBy]);

  // Handlers
  const handleAddToCart = (product: Product) => {
    showToast(`${product.name} added to cart`, "success");
    // Add to cart logic here
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast("Removed from wishlist", "info");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Added to wishlist", "success");
        return [...prev, productId];
      }
    });
  };

  const handleViewDetails = (productId: string) => {
    // Navigate to product details page
    window.location.href = `/shop/${productId}`;
  };

  const handleClearFilters = () => {
    setActiveFilters({
      wineType: [],
      country: [],
      priceRange: [0, 500000],
      grapeVariety: [],
      vintage: [],
      foodPairing: [],
      wineStyle: [],
    });
    setSearchTerm("");
    showToast("Filters cleared", "info");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Shop Our Wines
          </h1>
          <p className="text-xl font-light opacity-90">
            Discover our curated collection of exceptional wines from around the
            world
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <ProductSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <ProductFilters
              filters={filterOptions}
              activeFilters={activeFilters}
              onFilterChange={setActiveFilters}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            {/* Sort Bar */}
            <ProductSort
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              productsPerPage={productsPerPage}
              onProductsPerPageChange={setProductsPerPage}
              totalProducts={filteredProducts.length}
            />

            {/* Products Grid/List */}
            {paginatedProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    onViewDetails={handleViewDetails}
                    isInWishlist={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No products found matching your criteria
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
