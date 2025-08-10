interface AboutValuesGridProps {
  title: string;
  subtitle: string;
  values: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
}

const AboutValuesGrid: React.FC<AboutValuesGridProps> = ({
  title,
  subtitle,
  values,
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-600">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesGrid;
