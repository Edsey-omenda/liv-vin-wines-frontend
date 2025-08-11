import React from "react";

interface WineBarInfoProps {
  title: string;
  description: string[];
  hours: {
    regular: string[];
    happyHour: {
      days: string;
      time: string;
      offer: string;
    };
  };
  image: string;
  stats: {
    number: string;
    label: string;
  };
}

export const WineBarInfo: React.FC<WineBarInfoProps> = ({
  title,
  description,
  hours,
  image,
  stats,
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">{title}</h2>
            {description.map((para, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                {para}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Opening Hours</h3>
                {hours.regular.map((hour, idx) => (
                  <p key={idx} className="text-gray-600">
                    {hour}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Happy Hour</h3>
                <p className="text-gray-600">{hours.happyHour.days}</p>
                <p className="text-gray-600">{hours.happyHour.time}</p>
                <p className="text-amber-700 font-semibold">
                  {hours.happyHour.offer}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={image}
              alt="Wine Bar Interior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold">{stats.number}</p>
              <p className="text-sm">{stats.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

