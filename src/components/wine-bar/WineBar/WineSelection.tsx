import React from "react";
import type { WineCategory } from "../wineBar.types";

interface WineSelectionProps {
  categories: WineCategory[];
}

export const WineSelection: React.FC<WineSelectionProps> = ({ categories }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">
          Wine Selection
        </h2>
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">
                {category.category}
              </h3>
              <p className="text-3xl font-bold text-amber-700 mb-2">
                {category.count}
              </p>
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-lg font-semibold">{category.starting}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 bg-amber-700 text-white hover:bg-amber-600 transition-colors">
            View Full Wine List
          </button>
        </div>
      </div>
    </section>
  );
};
