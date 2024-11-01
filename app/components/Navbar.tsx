"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/", imgURL: "/home.svg" },
    { name: "About", href: "/about", imgURL: "/home.svg" },
    { name: "Rooms", href: "/all", imgURL: "/home.svg" },
    { name: "Contact Us", href: "/contact", imgURL: "/home.svg" },
  ];

  const pathname = usePathname();
  // const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <nav className="hidden lg:flex items-center justify-center gap-20 relative top-14 z-10 bg-gray-300 shadow-2xl bg-glassmorphism backdrop-blur-3xl  py-4 px-5 rounded-md">
        <Link
          className={`text-lg font-semibold ${
            pathname === "/" ? "text-blue-500" : "text-gray-600"
          } transition duration-100 hover:text-blue-500`}
          href="/"
        >
          Home
        </Link>

        {/* Desktop Navbar */}

        <Link
          className={`text-lg ${
            pathname === "/about" ? "text-blue-500" : "text-gray-600"
          } transition duration-100 hover:text-blue-500 font-semibold`}
          href="/about"
        >
          About
        </Link>

        {/* Logo */}
        <div className="">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-600 hover:text-primary transition duration-100"
          >
            Marigold accomadations
          </Link>
        </div>

        {/* contact and rooms */}

        <div className="">
          <Link
            href="/all"
            className={`text-lg ${
              pathname === "/all" ? "text-blue-500" : "text-gray-600"
            } transition duration-100 hover:text-blue-500 font-semibold`}
          >
            Rooms
          </Link>
        </div>

        <div className="">
          <Link
            href="/contact"
            className={`text-lg ${
              pathname === "/contact" ? "text-blue-500" : "text-gray-600"
            } transition duration-100 hover:text-blue-500 font-semibold`}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Responsive menu */}
      <div className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-2 backdrop-blur-3xl xs:px-7 md:hidden bg-gray-300">
        <div className="flex items-center justify-between gap-3 xs:gap-5">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${
                  pathname === link.href ? "text-blue-500" : "text-black"
                } transition duration-100 hover:text-blue-500`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
