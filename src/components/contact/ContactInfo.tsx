import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import type { ContactDetails } from "./contact.types";

interface ContactInfoProps {
  details: ContactDetails;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ details }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-amber-700" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Phone</h3>
        {details.phone.map((phone, idx) => (
          <p key={idx} className="text-gray-600">
            {phone}
          </p>
        ))}
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-amber-700" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        {details.email.map((email, idx) => (
          <p key={idx} className="text-gray-600">
            {email}
          </p>
        ))}
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-amber-700" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Location</h3>
        {details.address.map((line, idx) => (
          <p key={idx} className="text-gray-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
