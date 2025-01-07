"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Music, Moon, Sparkles } from "lucide-react";
import Link from "next/link";

const cafeFeatures = [
  {
    icon: Coffee,
    title: "Artisanal Brews",
    description: "Expertly crafted coffee and tea selections",
  },
  {
    icon: Music,
    title: "Vibrant Atmosphere",
    description: "Energetic music and lively ambiance",
  },
  {
    icon: Moon,
    title: "Late Night Spot",
    description: "The perfect place for night owls",
  },
  {
    icon: Sparkles,
    title: "Unique Experience",
    description: "A one-of-a-kind underground retreat",
  },
];

const BasementCafe = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900 overflow-hidden mt-[-5rem]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-12 text-neon-pink md:mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Neon Nights Basement Cafe
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="/cafe.jpg"
              alt="Marigold Basement Cafe"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neon-blue to-transparent opacity-60" />
            <motion.div
              className="absolute bottom-4 left-4 bg-neon-pink px-4 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-sm font-semibold text-gray-900">
                Exclusive underground experience
              </p>
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              className="text-xl mb-8 leading-relaxed text-neon-green"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Step into a world of vibrant energy and pulsating beats at our
              underground Neon Nights Basement Cafe. This hidden gem offers a
              unique after-hours experience, where the ambiance is as bold and
              exciting as our menu offerings.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {cafeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-700 border border-neon-pink"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)",
                  }}
                  onHoverStart={() => setActiveFeature(index)}
                  onHoverEnd={() => setActiveFeature(null)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <feature.icon className="w-10 h-10 mb-4 text-neon-blue" />
                  <h3 className="text-xl font-semibold mb-2 text-neon-pink">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-neon-green"
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
          <h3 className="text-3xl font-semibold mb-4 text-neon-blue">
            Illuminate Your Night
          </h3>
          <p className="text-xl mb-8 text-neon-green">
            Experience the electric atmosphere of our underground oasis.
          </p>
          <Link href="/all">
            <motion.button
              className="bg-neon-pink text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-neon-blue hover:text-white transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 105, 180, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Neon Nights
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BasementCafe;
