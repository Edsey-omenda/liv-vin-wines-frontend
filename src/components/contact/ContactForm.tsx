import React, { useState } from "react";
import { Send } from "lucide-react";
import type { ContactFormData } from "./contact.types";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2 className="text-3xl font-light mb-8">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="+254 xxx xxx xxx"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            >
              <option>General Inquiry</option>
              <option>Wine Tastings</option>
              <option>Reservations</option>
              <option>Wine Club</option>
              <option>Corporate Events</option>
              <option>Feedback</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
            placeholder="Your message..."
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-amber-700 text-white font-semibold hover:bg-amber-600 transition-colors flex items-center gap-2"
        >
          <Send size={18} />
          Send Message
        </button>
      </form>
    </div>
  );
};

