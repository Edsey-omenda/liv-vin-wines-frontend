import { Clock, Phone, Wine } from "lucide-react";

interface AboutStoreInfoProps {
  title: string;
  subtitle: string;
  info: {
    hours: string[];
    phone: string;
    email: string;
  };
}

const AboutStoreInfo: React.FC<AboutStoreInfoProps> = ({
  title,
  subtitle,
  info,
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">{subtitle}</p>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Clock className="w-8 h-8 text-amber-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">
                Opening Hours
              </h3>
              {info.hours.map((hour, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {hour}
                </p>
              ))}
            </div>

            <div>
              <Phone className="w-8 h-8 text-amber-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-600">{info.phone}</p>
              <p className="text-gray-600">{info.email}</p>
            </div>

            <div>
              <Wine className="w-8 h-8 text-amber-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <p className="text-gray-600 text-sm">Wine Tastings</p>
              <p className="text-gray-600 text-sm">Private Events</p>
              <p className="text-gray-600 text-sm">Wine Club</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStoreInfo;
