import React from "react";
import type { ReservationData } from "../components/wine-bar/wineBar.types";
import { WineBarHero, WineBarInfo } from "../components/wine-bar/WineBar";
import { ReservationForm } from "../components/wine-bar/Reservations/ReservationForm";
import { WineBarAmenities } from "../components/wine-bar/WineBar/WineBarAmenities";
import { WineSelection } from "../components/wine-bar/WineBar/WineSelection";
import { wineBarData } from "../data/wineBarData";

const WineBarPage: React.FC = () => {
  const handleReservation = (data: ReservationData) => {
    console.log("Reservation submitted:", data);
    // Handle reservation logic
  };

  const scrollToReservation = () => {
    document
      .getElementById("reservation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <WineBarHero
        title="Wine Bar"
        subtitle="Experience our curated wine bar with carefully selected wines by the glass and expertly paired small plates"
        images={wineBarData.heroImages}
        buttonText="Make Reservation"
        onButtonClick={scrollToReservation}
      />

      <WineBarInfo {...wineBarData.info} />

      <WineBarAmenities amenities={wineBarData.amenities} />

      <WineSelection categories={wineBarData.wineByGlass} />

      <div id="reservation-form">
        <ReservationForm onSubmit={handleReservation} />
      </div>
    </div>
  );
};

export default WineBarPage