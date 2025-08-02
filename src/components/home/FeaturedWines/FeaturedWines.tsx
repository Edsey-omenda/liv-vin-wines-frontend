import React from "react";
import { ChevronRight } from "lucide-react";
import WineCard from "./WineCard";
import { featuredWines } from "../../../data/mockData/testData";
import type { WineType } from "../types";

interface FeaturedWinesProps {
  wines?: WineType[];
  title?: string;
  subtitle?: string;
  onAddToCart?: (wine: WineType) => void;
  onViewAll?: () => void;
}

const FeaturedWines: React.FC<FeaturedWinesProps> = ({
  wines = featuredWines,
  title = "Featured Wines",
  subtitle = "Carefully selected wines from our sommelier",
  onAddToCart,
  onViewAll,
}) => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 font-light">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {wines.map((wine: WineType) => (
            <WineCard key={wine.id} wine={wine} onAddToCart={onAddToCart} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center text-slate-900 hover:text-amber-900 transition-colors group"
          >
            <span className="text-xl font-medium">View All Wines</span>
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWines;
