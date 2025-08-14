import React from "react";
import { StarRating } from "./StarRating";
import { Award, User } from "lucide-react";
import type { Wine } from "../products.types";

interface ProductTabsProps {
  wine: Wine;
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  wine,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="mt-12">
      <div className="border-b border-slate-200">
        <nav className="flex space-x-8">
          {["description", "tasting", "producer", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                selectedTab === tab
                  ? "border-red-900 text-red-900"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab === "tasting" ? "Tasting Notes" : tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-8">
        {selectedTab === "description" && (
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Wine Description</h3>
            <p className="text-slate-700 mb-6">{wine.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Grape Variety</h4>
                <p className="text-slate-700">{wine.grapeVariety}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Food Pairing</h4>
                <p className="text-slate-700">{wine.foodPairing}</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "tasting" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tasting Notes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Appearance</h4>
                  <p className="text-slate-700">
                    {wine.tastingNotes.appearance}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Aroma</h4>
                  <p className="text-slate-700">{wine.tastingNotes.aroma}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Palate</h4>
                  <p className="text-slate-700">{wine.tastingNotes.palate}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Finish</h4>
                  <p className="text-slate-700">{wine.tastingNotes.finish}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Awards & Ratings</h3>
              <div className="space-y-2">
                {wine.awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-slate-700">{award}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Winemaking</h4>
                <p className="text-slate-700">{wine.wineMaking}</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "producer" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Producer Information</h3>
            <p className="text-slate-700">{wine.producer}</p>
          </div>
        )}

        {selectedTab === "reviews" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <StarRating rating={wine.rating} size={24} />
                  <span className="text-2xl font-bold">{wine.rating}</span>
                </div>
                <span className="text-slate-600">
                  Based on {wine.reviews} reviews
                </span>
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: "James Wilson",
                  rating: 5,
                  date: "2024-01-15",
                  comment:
                    "Exceptional wine! The complexity and elegance are truly remarkable. Worth every penny.",
                },
                {
                  name: "Sarah Chen",
                  rating: 5,
                  date: "2024-01-10",
                  comment:
                    "This vintage is outstanding. Perfect balance and a finish that goes on forever.",
                },
                {
                  name: "Michael Brown",
                  rating: 4,
                  date: "2024-01-05",
                  comment:
                    "Great wine, though it needs more time to fully open up. Will age beautifully.",
                },
              ].map((review, index) => (
                <div key={index} className="border-b border-slate-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                        <User size={16} className="text-slate-600" />
                      </div>
                      <span className="font-medium">{review.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={review.rating} size={16} />
                  </div>
                  <p className="text-slate-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
