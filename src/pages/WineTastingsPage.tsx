import React, { useState } from "react";
import type { TastingEvent } from "../components/tastings/tastings.types";
import {
  TastingBookingForm,
  TastingHeroSection,
  TastingPackageCard,
  UpcomingEvents,
} from "../components/tastings/WineTastings";
import {
  tastingHeroImages,
  tastingPackages,
  upcomingEvents,
} from "../data/tastingsData";

const WineTastingsPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number>(0);

  const handleBooking = (data: any) => {
    console.log("Booking submitted:", data);
    // Handle booking logic
  };

  const handleEventReserve = (event: TastingEvent) => {
    console.log("Event reservation:", event);
    // Handle event reservation
  };

  const scrollToBooking = () => {
    // Scroll to booking form
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <TastingHeroSection
        title="Wine Tastings"
        subtitle="Join our expert-led tastings and discover the stories behind exceptional wines from around the world"
        images={tastingHeroImages}
        buttonText="Book Now"
        onButtonClick={scrollToBooking}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Tasting Packages</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect experience for your wine journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tastingPackages.map((pkg, idx) => (
              <TastingPackageCard
                key={idx}
                package={pkg}
                isSelected={selectedPackage === idx}
                onSelect={() => setSelectedPackage(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <div id="booking-form">
        <TastingBookingForm
          packages={tastingPackages}
          onSubmit={handleBooking}
        />
      </div>

      <UpcomingEvents events={upcomingEvents} onReserve={handleEventReserve} />
    </div>
  );
};

export default WineTastingsPage;
