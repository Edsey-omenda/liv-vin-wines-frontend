import React, { useState } from "react";
import type { TastingPackage } from "../tastings.types";

interface BookingFormData {
  package: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface TastingBookingFormProps {
  packages: TastingPackage[];
  onSubmit: (data: BookingFormData) => void;
}

export const TastingBookingForm: React.FC<TastingBookingFormProps> = ({
  packages,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    package: packages[0]?.name || "",
    date: "",
    time: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">
          Book Your Tasting
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tasting Package
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                value={formData.package}
                onChange={(e) =>
                  setFormData({ ...formData, package: e.target.value })
                }
              >
                {packages.map((pkg, idx) => (
                  <option key={idx} value={pkg.name}>
                    {pkg.name} - {pkg.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                max="12"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: parseInt(e.target.value) })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              >
                <option value="">Select time</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>5:00 PM</option>
                <option>7:00 PM</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                placeholder="Dietary requirements, special occasions, preferences..."
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData({ ...formData, specialRequests: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-12 py-3 bg-amber-700 text-white font-semibold hover:bg-amber-600 transition-colors"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
