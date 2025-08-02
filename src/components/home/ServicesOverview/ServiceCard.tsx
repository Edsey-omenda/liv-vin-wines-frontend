import React from "react";
import { ChevronRight } from "lucide-react";
import type { ServiceItem } from "../types";

interface ServiceCardProps {
  service: ServiceItem;
  onButtonClick?: (service: ServiceItem) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onButtonClick,
  className = "",
}) => {
  const IconComponent = service.icon;

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(service);
    }
  };

  return (
    <div className={`text-center group cursor-pointer ${className}`}>
      <div className="mb-8">
        <div
          className={`w-20 h-20 ${service.colorClass} rounded-full flex items-center justify-center mx-auto ${service.hoverColorClass} transition-colors`}
        >
          <IconComponent className="h-10 w-10 text-white" />
        </div>
      </div>
      <h3 className="text-2xl font-medium text-slate-900 mb-4">
        {service.title}
      </h3>
      <p className="text-slate-600 text-lg mb-6 font-light leading-relaxed">
        {service.description}
      </p>
      <button
        onClick={handleClick}
        className={`text-lg ${service.colorClass.replace(
          "bg-",
          "text-"
        )} hover:${service.hoverColorClass.replace(
          "group-hover:bg-",
          "text-"
        )} font-medium inline-flex items-center group`}
      >
        {service.buttonText}
        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
