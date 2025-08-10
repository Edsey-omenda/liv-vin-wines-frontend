interface AboutStatsBarProps {
  stats: {
    label: string;
    number: string;
  }[];
}

const AboutStatsBar: React.FC<AboutStatsBarProps> = ({ stats }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <p className="text-4xl font-bold text-amber-700 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsBar;
