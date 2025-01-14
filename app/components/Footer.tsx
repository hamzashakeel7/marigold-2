"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/all" },
    { name: "Contact Us", href: "/contact" },
  ];

  const pathname = usePathname();

  const contactInfo = [
    {
      icon: MapPin,
      text: "40-C Khalid commercial street 2 Hotel marigold Accomodations Near Suffa university DHA phase 7 Ext Karachi",
    },
    { icon: Phone, text: "+92-3340008879" },
    { icon: Mail, text: "marigoldaccommodations@gmail.com" },
  ];

  return (
    <footer className="mb-11 md:mb-0 border-t bg-gray-50/50 mt-0">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="block">
                <h1 className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-3xl font-bold text-transparent">
                  Marigold
                  <span className="block text-2xl font-medium">
                    Accommodations
                  </span>
                </h1>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-gray-600">
                Experience luxury and comfort in our carefully curated
                accommodations.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Navigation
                </h3>
                <ul className="mt-4 space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors ${
                          pathname === link.href
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
                <ul className="mt-4 space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Follow Us
                </h3>
                <div className="mt-4 flex space-x-6">
                  <Link
                    href="https://instagram.com"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    <span className="sr-only">YouTube</span>
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-200 pt-8 pb-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Powered by</span>
              <Link
                href="https://webwizdurrani.vercel.app"
                target="_blank"
                className="font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                webwizdurrani.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
