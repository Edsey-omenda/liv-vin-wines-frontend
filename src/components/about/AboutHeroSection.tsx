interface AboutHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-light mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl font-light opacity-90 animate-fade-in-up animation-delay-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
