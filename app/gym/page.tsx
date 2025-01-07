"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Heart, Clock, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

const gymFeatures = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Premium fitness machines for a complete workout",
  },
  {
    icon: Heart,
    title: "Personal Training",
    description: "Expert trainers to help you achieve your fitness goals",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Flexible hours to fit your schedule",
  },
  {
    icon: Users,
    title: "Small Group Classes",
    description: "Engaging sessions for motivation and community",
  },
];

const MarigoldGym = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white overflow-hidden mt-[-5rem]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Marigold Fitness Center
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/gym.jpg"
              alt="Marigold Gym"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <motion.div
              className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-sm font-semibold text-gray-800">
                Exclusive to Marigold guests
              </p>
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              className="text-lg lg:text-xl mb-8 leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Maintain your fitness routine or embark on a new wellness journey
              at our compact yet fully-equipped gym. Marigold&apos;s Fitness
              Center offers an intimate setting for focused workouts, combining
              luxury with functionality.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {gymFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveFeature(index)}
                  onHoverEnd={() => setActiveFeature(null)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <feature.icon className="w-10 h-10 mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-600"
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
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Your Wellness, Our Priority
          </h3>
          <p className=" text-lg lg:text-xl mb-8 text-gray-600">
            Experience a tailored fitness journey during your stay at Marigold.
          </p>
          <Link href="/all">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Marigold Options
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MarigoldGym;
