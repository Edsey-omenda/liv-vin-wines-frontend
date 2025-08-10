import React, { useState } from "react";
import LivVinsLogo from "../../../../public/images/logos/liv-vin-logo-1.png";
import { Wine } from "lucide-react";

interface LogoProps {
  onClick?: () => void;
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  onClick,
  className = "",
  isScrolled = false,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <button
        onClick={onClick}
        className="flex items-center space-x-3 group"
        aria-label="LIVVIN WINES Home"
      >
        {/* Perfectly circular logo container */}
        <div className="relative">
          {/* Outer ring for additional styling */}
          <div
            className={`
              absolute inset-0 w-12 h-12 rounded-full
              transition-all duration-300
              ${isScrolled ? "bg-amber-100/30" : "bg-white/10"}
            `}
          />

          {/* Main circular logo container */}
          <div
            className={`
              relative w-12 h-12 rounded-full
              flex items-center justify-center
              transition-all duration-300 overflow-hidden
              ${
                isScrolled
                  ? "bg-white shadow-md border border-gray-200"
                  : "bg-white shadow-xl"
              }
            `}
          >
            {!imageError ? (
              <img
                src={LivVinsLogo}
                alt="LIVVIN WINES"
                className="w-8 h-8 object-contain z-10"
                onError={() => setImageError(true)}
              />
            ) : (
              <Wine
                className={`w-7 h-7 ${
                  isScrolled ? "text-amber-700" : "text-amber-600"
                }`}
              />
            )}
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span
            className={`
              text-xl font-bold tracking-wide transition-all duration-300
              ${
                isScrolled
                  ? "text-gray-900"
                  : "text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]"
              }
            `}
          >
            LIVVIN
          </span>
          <span
            className={`
              text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300
              ${
                isScrolled
                  ? "text-amber-700"
                  : "text-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              }
            `}
          >
            WINES
          </span>
        </div>
      </button>
    </div>
  );
};

export default Logo;
