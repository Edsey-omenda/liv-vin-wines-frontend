import React, { useState } from "react";
import type { ActiveFilters, FilterOptions } from "../products.types";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface ProductFiltersProps {
  filters: FilterOptions;
  activeFilters: ActiveFilters;
  onFilterChange: (filters: ActiveFilters) => void;
  onClearFilters: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "wineType",
    "price",
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleWineTypeChange = (type: string) => {
    const updated = activeFilters.wineType.includes(type)
      ? activeFilters.wineType.filter((t) => t !== type)
      : [...activeFilters.wineType, type];
    onFilterChange({ ...activeFilters, wineType: updated });
  };

  const handleCountryChange = (country: string) => {
    const updated = activeFilters.country.includes(country)
      ? activeFilters.country.filter((c) => c !== country)
      : [...activeFilters.country, country];
    onFilterChange({ ...activeFilters, country: updated });
  };

  const handlePriceChange = (value: number, index: number) => {
    const newRange: [number, number] = [...activeFilters.priceRange] as [
      number,
      number
    ];
    newRange[index] = value;
    onFilterChange({ ...activeFilters, priceRange: newRange });
  };

  const hasActiveFilters = () => {
    return (
      activeFilters.wineType.length > 0 ||
      activeFilters.country.length > 0 ||
      activeFilters.grapeVariety.length > 0 ||
      activeFilters.vintage.length > 0 ||
      activeFilters.foodPairing.length > 0 ||
      activeFilters.wineStyle.length > 0 ||
      activeFilters.priceRange[0] > filters.priceRange[0] ||
      activeFilters.priceRange[1] < filters.priceRange[1]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        {hasActiveFilters() && (
          <button
            onClick={onClearFilters}
            className="text-sm text-amber-700 hover:text-amber-600 flex items-center gap-1"
          >
            <X size={16} />
            Clear All
          </button>
        )}
      </div>

      {/* Wine Type Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          onClick={() => toggleSection("wineType")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="font-medium">Wine Type</h3>
          {expandedSections.includes("wineType") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("wineType") && (
          <div className="space-y-2">
            {filters.wineTypes.map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.wineType.includes(type)}
                  onChange={() => handleWineTypeChange(type)}
                  className="mr-2 text-amber-700 focus:ring-amber-700"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="font-medium">Price Range</h3>
          {expandedSections.includes("price") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("price") && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>KSh {activeFilters.priceRange[0].toLocaleString()}</span>
              <span>KSh {activeFilters.priceRange[1].toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <input
                type="range"
                min={filters.priceRange[0]}
                max={filters.priceRange[1]}
                value={activeFilters.priceRange[0]}
                onChange={(e) => handlePriceChange(parseInt(e.target.value), 0)}
                className="w-full"
              />
              <input
                type="range"
                min={filters.priceRange[0]}
                max={filters.priceRange[1]}
                value={activeFilters.priceRange[1]}
                onChange={(e) => handlePriceChange(parseInt(e.target.value), 1)}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Country/Region Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          onClick={() => toggleSection("country")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="font-medium">Country/Region</h3>
          {expandedSections.includes("country") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("country") && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filters.countries.map((country) => (
              <label key={country} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.country.includes(country)}
                  onChange={() => handleCountryChange(country)}
                  className="mr-2 text-amber-700 focus:ring-amber-700"
                />
                <span className="text-sm">{country}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Grape Variety Filter */}
      <div className="mb-6 border-b pb-4">
        <button
          onClick={() => toggleSection("grape")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="font-medium">Grape Variety</h3>
          {expandedSections.includes("grape") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("grape") && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filters.grapeVarieties.map((grape) => (
              <label key={grape} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.grapeVariety.includes(grape)}
                  onChange={() => {
                    const updated = activeFilters.grapeVariety.includes(grape)
                      ? activeFilters.grapeVariety.filter((g) => g !== grape)
                      : [...activeFilters.grapeVariety, grape];
                    onFilterChange({ ...activeFilters, grapeVariety: updated });
                  }}
                  className="mr-2 text-amber-700 focus:ring-amber-700"
                />
                <span className="text-sm">{grape}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Wine Style Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("style")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="font-medium">Wine Style</h3>
          {expandedSections.includes("style") ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.includes("style") && (
          <div className="space-y-2">
            {filters.wineStyles.map((style) => (
              <label key={style} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.wineStyle.includes(style)}
                  onChange={() => {
                    const updated = activeFilters.wineStyle.includes(style)
                      ? activeFilters.wineStyle.filter((s) => s !== style)
                      : [...activeFilters.wineStyle, style];
                    onFilterChange({ ...activeFilters, wineStyle: updated });
                  }}
                  className="mr-2 text-amber-700 focus:ring-amber-700"
                />
                <span className="text-sm">{style}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
