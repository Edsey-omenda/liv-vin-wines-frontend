import React, { useState } from "react";
import LivVinsLogo from "../../../../public/images/logos/liv-vin-logo-1.png";

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, className = "" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <button
        onClick={onClick}
        className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
        aria-label="LIVVIN VINES Home"
      >
        {/* Logo image */}
        {!imageError ? (
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src={LivVinsLogo}
              alt="LIVVIN VINES"
              className="w-10 h-10 object-contain"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-amber-900 font-bold text-lg">LV</span>
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-wide">
            LIVVIN
          </span>
          <span className="text-sm text-gray-300 tracking-wider">WINES</span>
        </div>
      </button>
    </div>
  );
};

export default Logo;
