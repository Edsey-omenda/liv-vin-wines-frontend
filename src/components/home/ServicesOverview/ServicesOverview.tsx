import React from "react";
import { services } from "../../../data/mockData/testData";
import type { ServiceItem } from "../types";
import { ServiceCard } from "./ServiceCard";

interface ServicesOverviewProps {
  services?: ServiceItem[];
  onServiceClick?: (service: ServiceItem) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  services: servicesList = services,
  onServiceClick,
}) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {servicesList.map((service: ServiceItem, index: number) => (
            <ServiceCard
              key={index}
              service={service}
              onButtonClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
