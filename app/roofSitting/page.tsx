"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sunset,
  Moon,
  CoffeeIcon as Cocktail,
  Music,
  Star,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Sunset,
    title: "Panoramic Views",
    description: "Breathtaking 360° views of the city skyline",
  },
  {
    icon: Moon,
    title: "Starlit Evenings",
    description: "Romantic ambiance under the night sky",
  },
  {
    icon: Cocktail,
    title: "Signature Cocktails",
    description: "Expertly crafted drinks with a view",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description: "Soulful tunes to enhance your experience",
  },
];

const RoofSitting = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-black text-white overflow-hidden mt-[-5rem]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rooftop Oasis at Marigold
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/roof.jpg"
                alt="Marigold Rooftop"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Star className="text-yellow-400 w-16 h-16" />
              </motion.div>
            </div>
          </motion.div>

          <div>
            <motion.p
              className="text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elevate your experience at Marigold&apos;s exclusive rooftop
              sitting area. Immerse yourself in luxury as you take in
              breathtaking views, savor exquisite cuisine, and create
              unforgettable memories under the stars.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-800 bg-opacity-50 p-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-opacity-70"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveFeature(index)}
                  onHoverEnd={() => setActiveFeature(null)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <feature.icon className="w-10 h-10 mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-300"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-4">
            Experience the Height of Luxury
          </h3>
          <p className="text-xl mb-8">
            Book your rooftop experience today and elevate your stay at
            Marigold.
          </p>
          <Link href="/all">
            <motion.button
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Spot
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoofSitting;
