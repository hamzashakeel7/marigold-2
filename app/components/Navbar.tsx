"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Info, Hotel, Phone } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Rooms", href: "/all", icon: Hotel },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const pathname = usePathname();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="hidden lg:block rounded-full border border-white/20 bg-white/10 px-8 py-4 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-16">
          <Link
            href="/"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {pathname === "/" && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            Home
          </Link>

          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/about"
                ? "text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {pathname === "/about" && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            About
          </Link>

          <Link href="/" className="text-xl font-bold text-gray-800">
            Marigold
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Accommodations
            </span>
          </Link>

          <Link
            href="/all"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/all"
                ? "text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {pathname === "/all" && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            Rooms
          </Link>

          <Link
            href="/contact"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {pathname === "/contact" && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            Contact
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 block lg:hidden"
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex flex-col items-center gap-1 transition-colors ${
                    pathname === link.href
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{link.name}</span>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="mobile-navbar-indicator"
                      className="h-1 w-1 rounded-full bg-blue-500"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
