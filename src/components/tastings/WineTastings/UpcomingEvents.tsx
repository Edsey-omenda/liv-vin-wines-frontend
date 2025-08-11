import React from "react";
import type { TastingEvent } from "../tastings.types";

interface UpcomingEventsProps {
  events: TastingEvent[];
  onReserve: (event: TastingEvent) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events,
  onReserve,
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">
          Upcoming Tasting Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <p className="text-amber-700 font-semibold mb-2">{event.date}</p>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {event.spotsLeft} spots left
                </span>
                <button
                  onClick={() => onReserve(event)}
                  className="text-amber-700 hover:text-amber-600 font-semibold"
                >
                  Reserve Spot →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

