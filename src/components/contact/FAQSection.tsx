import React, { useState } from "react";
import type { FAQ } from "./contact.types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === idx ? (
                  <ChevronUp className="text-amber-700" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

