import React, { useState } from "react";
import { Logo } from "../Header";

interface FooterProps {
  onNewsletterSubmit?: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNewsletterSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && onNewsletterSubmit) {
      onNewsletterSubmit(email);
      setEmail("");
    }
  };

  const currentDate = new Date();

  const year = currentDate.getFullYear();

  const quickLinks = [
    "Shop",
    "Wine Tastings",
    "Wine Club",
    "About Us",
    "Contact",
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Logo />
            </div>
            <p className="text-slate-300 font-light leading-relaxed mb-6">
              Discover exceptional wines from around the world. Curated by
              experts, enjoyed by wine lovers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-slate-300 mb-4 font-light">
              Stay updated with new arrivals and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-slate-800 text-white border border-slate-700 focus:border-red-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-amber-900 px-6 py-2 hover:bg-amber-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {year} LIV VIN Wine Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
