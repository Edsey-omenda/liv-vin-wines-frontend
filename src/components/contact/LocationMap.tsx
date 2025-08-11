import React from "react";
import type { StoreHours } from "./contact.types";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface LocationMapProps {
  mapUrl: string;
  storeHours: StoreHours[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const LocationMap: React.FC<LocationMapProps> = ({
  mapUrl,
  storeHours,
  socialLinks,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-light mb-8">Find Us</h2>
      <div className="bg-gray-200 rounded-lg h-96 mb-6 relative overflow-hidden">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-4">Store Hours</h3>
        <div className="space-y-2 text-gray-600">
          {storeHours.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{item.day}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

