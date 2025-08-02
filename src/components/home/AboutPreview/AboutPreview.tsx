// components/AboutPreview.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface AboutPreviewProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  onLearnMore?: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({
  title = "Our Story",
  subtitle = "LIV VIN was born from a passion for exceptional wines and the belief that great wine should be accessible to all wine lovers, from beginners to connoisseurs.",
  description = "Our team of experienced sommeliers travels the world to source the finest wines, ensuring that every bottle in our collection meets our exacting standards for quality and character.",
  image = "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  onLearnMore,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light text-slate-900 mb-6">{title}</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
              {subtitle}
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              {description}
            </p>
            <button
              onClick={onLearnMore}
              className="inline-flex items-center text-slate-900 hover:text-amber-900 transition-colors group"
            >
              <span className="text-lg font-medium">Learn More</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <img
              src={image}
              alt="Wine cellar"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

