import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FounderData, TeamMember } from "./about.types";
import { useState } from "react";

interface AboutTeamSectionProps {
  title: string;
  subtitle: string;
  founder: FounderData;
  teamMembers: TeamMember[];
}

const AboutTeamSection: React.FC<AboutTeamSectionProps> = ({
  title,
  subtitle,
  founder,
  teamMembers,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-light mb-2 text-gray-900">
                {founder.name}
              </h3>
              <p className="text-xl text-amber-700 mb-4">{founder.role}</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {founder.bio}
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                "{founder.quote}"
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Team Members Slider */}
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-center mb-8 text-gray-900">
            Our Expert Team
          </h3>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-80 overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={member.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2 text-gray-900">
                        {member.title}
                      </h4>
                      <p className="text-lg text-amber-700 mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-3">{member.bio}</p>
                      {member.specialties && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">
                            Specialties:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-8 bg-amber-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
