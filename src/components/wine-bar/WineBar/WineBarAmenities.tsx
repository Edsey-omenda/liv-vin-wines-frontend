import React from "react";
import type { Amenity } from "../wineBar.types";

interface WineBarAmenitiesProps {
  amenities: Amenity[];
}

export const WineBarAmenities: React.FC<WineBarAmenitiesProps> = ({
  amenities,
}) => {
  const getIcon = (amenity: Amenity) => {
    const IconComponent = amenity.icon;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">
          Wine Bar Amenities
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                {getIcon(amenity)}
              </div>
              <h3 className="font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
