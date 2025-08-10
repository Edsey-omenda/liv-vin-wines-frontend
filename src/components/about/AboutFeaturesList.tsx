interface AboutFeaturesListProps {
  title: string;
  features: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    text: string;
  }[];
  image: string;
}

const AboutFeaturesList: React.FC<AboutFeaturesListProps> = ({
  title,
  features,
  image,
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-4xl font-light mb-6 text-gray-900">{title}</h2>
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturesList;
