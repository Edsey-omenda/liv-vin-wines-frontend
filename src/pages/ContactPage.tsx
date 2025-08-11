import React from "react";
import type { ContactFormData } from "../components/contact/contact.types";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import { LocationMap } from "../components/contact/LocationMap";
import { contactData } from "../data/contactData";
import { FAQSection } from "../components/contact/FAQSection";

const ContactPage: React.FC = () => {
  const handleContactSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <ContactHero
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or visit our shop in Westlands"
        backgroundImage="/images/gallery/IMG_2846.jpg"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ContactInfo details={contactData.contactDetails} />

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm onSubmit={handleContactSubmit} />
            <LocationMap
              mapUrl={contactData.mapUrl}
              storeHours={contactData.storeHours}
              socialLinks={contactData.socialLinks}
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={contactData.faqs} />
    </div>
  );
};

export default ContactPage;
