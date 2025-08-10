interface AboutStorySectionProps {
  title: string;
  paragraphs: string[];
  image: string;
  badge: {
    title: string;
    subtitle: string;
  };
}

const AboutStorySection: React.FC<AboutStorySectionProps> = ({
  title,
  paragraphs,
  image,
  badge,
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-light mb-6 text-gray-900">{title}</h2>
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative animate-slide-in-right">
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {badge && (
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white p-8 rounded-lg shadow-xl max-w-xs">
                <p className="text-3xl font-bold mb-2">{badge.title}</p>
                <p className="text-sm">{badge.subtitle}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
