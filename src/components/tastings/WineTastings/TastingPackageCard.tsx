import { Clock, Users, Wine } from "lucide-react";
import React from "react";
import type { TastingPackage } from "../tastings.types";

interface TastingPackageCardProps {
  package: TastingPackage;
  isSelected: boolean;
  onSelect: () => void;
}

export const TastingPackageCard: React.FC<TastingPackageCardProps> = ({
  package: pkg,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer ${
        isSelected ? "ring-2 ring-amber-700" : ""
      }`}
      onClick={onSelect}
    >
      <div className={`h-2 bg-${pkg.color}-700`} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
        <p className="text-3xl font-bold text-amber-700 mb-4">
          KSh {pkg.price}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Wine size={16} />
            {pkg.wines}
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} />
            Max {pkg.maxGuests}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        <div className="space-y-2">
          <p className="font-semibold text-sm">Includes:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {pkg.includes.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-700 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
            {pkg.includes.length > 3 && (
              <li className="text-amber-700 text-sm">
                +{pkg.includes.length - 3} more benefits
              </li>
            )}
          </ul>
        </div>
        <button className="w-full mt-6 py-2 bg-amber-700 text-white hover:bg-amber-600 transition-colors">
          Select Package
        </button>
      </div>
    </div>
  );
};
