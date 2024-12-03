"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Info, Hotel, Phone, LogOut, User } from "lucide-react";
import {
  SignInButton,
  SignOutButton,
  useUser,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Rooms", href: "/all", icon: Hotel },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const pathname = usePathname();
  const { isSignedIn, user } = useUser();

  return (
    <>
      {/* Sign-in/Avatar - Always at top-right corner */}
      <div className="fixed right-0 top-0 z-50 p-4">
        {isSignedIn ? (
          <div className="flex items-center gap-4">
            <span className="hidden text-sm font-medium text-gray-700 lg:inline">
              Hi, {user?.firstName || "User"}!
            </span>
            <UserButton afterSignOutUrl="/" />
            <SignOutButton>
              <button className="rounded-full bg-white/10 p-2 text-gray-700 hover:bg-white/20">
                <LogOut className="h-5 w-5" />
              </button>
            </SignOutButton>
          </div>
        ) : (
          <SignInButton>
            <button className="rounded-full bg-white/10 p-2 text-gray-700 hover:bg-white/20">
              <User className="h-5 w-5" />
            </button>
          </SignInButton>
        )}
      </div>

      {/* Desktop Navbar - Centered */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed left-1/3 top-0 z-40 hidden -translate-x-1/3 ml-20 transform lg:block"
      >
        <div className="mt-4 rounded-full border border-white/20 bg-white/10 px-8 py-4 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-16">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Bottom */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden"
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/20 bg-white/10 px-8 py-1 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex flex-col items-center gap-0 transition-colors ${
                    pathname === link.href
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  <Icon className="h-4 w-4" />
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
      </motion.nav>
    </>
  );
}
