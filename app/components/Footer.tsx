"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/", imgURL: "/home.svg" },
    { name: "About", href: "/about", imgURL: "/home.svg" },
    { name: "Rooms", href: "/all", imgURL: "/home.svg" },
    { name: "Contact Us", href: "/contact", imgURL: "/home.svg" },
  ];
  const pathname = usePathname();
  return (
    <footer className="mt-8">
      <div className="border-t-2 border-gray-300">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl mt-8">
          <Link href="/">
            <h1
              className="text-2xl md:text-4xl font-bold mb-10 flex items-center justify-center relative left-8"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Marigold accomadations
            </h1>
          </Link>

          <footer className="hidden items-center justify-center lg:flex 2xl:ml-16 gap-2 md:gap-5 lg:gap-12 flex-wrap mb-10">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className="text-lg font-semibold text-blue-500"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-blue-600"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </footer>
        </div>

        {/* socials */}
        <div className="flex items-center justify-center -mt-5 md:mb-5">
          <div className="flex items-center justify-center gap-3">
            <Link href="https://www.instagram.com/webwi_zdurrani/">
              <FaInstagram className="text-2xl md:text-3xl hover:text-blue-600 transition ease-in-out" />
            </Link>
            <Link href="https://www.instagram.com/webwi_zdurrani/">
              <FaFacebook className="text-2xl md:text-3xl hover:text-blue-600 transition ease-in-out" />
            </Link>
            <Link href="https://www.instagram.com/webwi_zdurrani/">
              <FaYoutube className="text-2xl md:text-3xl hover:text-blue-600 transition ease-in-out" />
            </Link>
          </div>
        </div>

        {/* copywrite */}
        <div className="flex items-center justify-center flex-col gap-2 -mt-14 lg:mt-0 h-40 md:h-48 lg:h-10">
          <p className="text-md md:text-lg text-black text-center">
            © All rights reserved
          </p>
          <p className="text-gray-500 text-center text-xs">
            Powered by{" "}
            <Link
              target="_blank"
              href="https://webwizdurrani.vercel.app"
              className="text-blue-500 text-xs"
            >
              webwizdurrani.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
