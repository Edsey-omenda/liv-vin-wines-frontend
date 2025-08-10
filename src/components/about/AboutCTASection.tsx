import { useNavigate } from "react-router-dom";

interface AboutCTASectionProps {
  title: string;
  subtitle: string;
  buttons: {
    primary: boolean;
    text: string;
    route: string;
  }[];
}

const AboutCTASection: React.FC<AboutCTASectionProps> = ({
  title,
  subtitle,
  buttons,
}) => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-700 to-amber-800">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-light mb-6">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {buttons.map((button, idx) => (
            <button
              key={idx}
              className={`px-8 py-3 rounded-sm transition-all duration-300 font-semibold transform hover:scale-105 ${
                button.primary
                  ? "bg-white text-amber-700 hover:bg-gray-100"
                  : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700"
              }`}
              onClick={() => handleClick(button.route)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
