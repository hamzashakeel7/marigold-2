"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Utensils,
  Coffee,
  Clock,
  Users,
  ChefHat,
  ArrowRight,
} from "lucide-react";

const DiningPage = () => {
  const [hoveredSpecialty, setHoveredSpecialty] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const specialties = [
    {
      name: "Kashmiri Biryani",
      description:
        "Hand-crafted Rice from locally spices and blend taste with chicken",
    },
    {
      name: "Gourmet Sandwiches",
      description: "Fresh, made-to-order with premium ingredients",
    },
    {
      name: "Karak Chai",
      description: "Aromatic tea brewed to perfection with milk",
    },
    {
      name: "Seasonal Specials",
      description: "Unique flavors inspired by the time of year",
    },
  ];

  return (
    <div className="min-h-screen mt-[-5rem] bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/cafe hero.jpg"
          alt="Marigold Dining Area"
          layout="fill"
          objectFit="cover"
          priority
        />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Exquisite Dining at Marigold
            </h1>
            <p className="text-xl md:text-3xl">
              Indulge in culinary delights and unforgettable experiences
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Dining Area */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-5 lg:mb-16"
          {...fadeIn}
        >
          Main Dining Area
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/dining1.jpg"
              alt="Main Dining Area"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h3 className="text-3xl font-semibold mb-6">
              A Feast for the Senses
            </h3>
            <p className="text-gray-600 mb-8 text-sm md:text-lg">
              Our main dining area offers a perfect blend of elegance and
              comfort. With panoramic views and an ambiance that exudes
              sophistication, it&apos;s the ideal setting for a memorable dining
              experience.
            </p>
            <ul className="space-y-4 text-lg">
              <motion.li className="flex items-center" whileHover={{ x: 10 }}>
                <Utensils className="mr-4 text-gold w-6 h-6" /> Gourmet cuisine
                crafted by world-class chefs
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ x: 10 }}>
                <Users className="mr-4 text-gold w-6 h-6" /> Intimate seating
                arrangements for every occasion
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ x: 10 }}>
                <Clock className="mr-4 text-gold w-6 h-6" /> Open for breakfast,
                lunch, and dinner
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 12 O'Clock Cafe */}
      <section className="lg:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-5 lg:mb-16"
            {...fadeIn}
          >
            12 O&apos;Clock Cafe
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl font-semibold mb-6">
                Your All-Day Retreat
              </h3>
              <p className="text-gray-600 mb-8 text-sm md:text-lg">
                The 12 O&apos;Clock Cafe is your perfect spot for a quick bite,
                a relaxing coffee break, or a casual meet-up. With its vibrant
                atmosphere and delectable offerings, it&apos;s a favorite among
                guests and locals alike.
              </p>
              <ul className="space-y-4 text-lg mb-8">
                <motion.li className="flex items-center" whileHover={{ x: 10 }}>
                  <Coffee className="mr-4 text-gold w-6 h-6" /> Artisanal coffee
                  and specialty teas
                </motion.li>
                <motion.li className="flex items-center" whileHover={{ x: 10 }}>
                  <Utensils className="mr-4 text-gold w-6 h-6" /> Gourmet light
                  meals and snacks
                </motion.li>
                <motion.li className="flex items-center" whileHover={{ x: 10 }}>
                  <Clock className="mr-4 text-gold w-6 h-6" /> Open 24/7
                </motion.li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://hamzashakeel7.github.io/resturant-website/#top"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-gold text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Explore 12 O&apos;Clock Cafe
                  <ArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              {...fadeIn}
              className="order-1 md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/dining2.jpg"
                alt="12 O'Clock Cafe"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Us in the Kitchen */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          {...fadeIn}
        >
          Meet Us in the Kitchen
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["/dining3.jpg", "/dining4.jpg", "/dining2.jpg"].map(
            (src, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <Image
                  src={src}
                  alt={`Kitchen Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            )
          )}
        </div>
        <motion.p
          className="text-center text-lg md:text-xl mt-12 text-gray-600"
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          Step into the heart of Marigold&apos;s culinary magic. Our
          state-of-the-art kitchen is where passion meets precision, creating
          the exquisite dishes that define your dining experience.
        </motion.p>
      </section>

      {/* 12 O'Clock Cafe Specialties */}
      <section className="lg:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-5 lg:mb-16"
            {...fadeIn}
          >
            12 O&apos;Clock Cafe Specialties
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onHoverStart={() => setHoveredSpecialty(index)}
                onHoverEnd={() => setHoveredSpecialty(null)}
                whileHover={{ scale: 1.03 }}
              >
                <motion.h3
                  className="text-2xl font-semibold mb-4 flex items-center"
                  animate={{
                    color: hoveredSpecialty === index ? "#D4AF37" : "#000000",
                  }}
                >
                  <ChefHat className="mr-2" />
                  {specialty.name}
                </motion.h3>
                <p className="text-gray-600">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            {...fadeIn}
          >
            Experience Culinary Excellence
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl mb-10"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Embark on a gastronomic journey at Marigold. From our main dining
            area to the vibrant 12 O&apos;Clock Cafe, every moment promises to
            be a celebration of flavors.
          </motion.p>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://hamzashakeel7.github.io/resturant-website"
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-white text-gold rounded-full text-xl font-semibold hover:bg-opacity-90 transition-colors"
            >
              Make a Reservation
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;
