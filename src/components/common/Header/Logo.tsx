//TODO: REMEMBER TO UPDATE WITH THE RIGHT LOGOS.
import React from "react";
import { Wine } from "lucide-react";

interface LogoProps {
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  text?: string;
}

const Logo: React.FC<LogoProps> = ({
  onClick,
  className = "",
  iconClassName = "h-8 w-8 text-amber-900",
  textClassName = "text-2xl font-bold text-slate-800 tracking-tight",
  text = "LIV VIN",
}) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <button
        onClick={onClick}
        className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        aria-label="LIV VIN Home"
      >
        <Wine className={iconClassName} />
        <span className={textClassName}>{text}</span>
      </button>
    </div>
  );
};

export default Logo;
