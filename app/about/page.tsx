"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";

export default function AboutPage() {
  const backstageImages = ["/rom1.jpg", "/rom2.jpg", "/room4.jpg"];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen relative top-[-5rem]">
      {/* Hero Section */}
      <motion.div
        className="relative h-[40vh] lg:h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/about.jpg"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div className="relative z-10 text-center" {...fadeIn}>
          <Badge className="mb-4 text-lg text-white" variant="secondary">
            Welcome to Marigold
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-white/90 max-w-xl mx-auto px-4">
            Discover the story behind our commitment to exceptional hospitality
          </p>
        </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        className="md:py-20 py-10 bg-gradient-to-b from-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <Badge variant="secondary" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Creating Unforgettable Experiences
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Marigold Accommodations, we believe that every stay should be
                an experience, not just a visit. From the moment you step
                through our doors, you&apos;re greeted with more than just
                luxury—you&apos;re welcome into a world of comfort, style, and
                warmth. Whether you’re traveling for business, a romantic
                getaway, or a family vacation, we’re here to make your stay
                unforgettable.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/category4.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="md:py-20 py-10 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/category3.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div className="order-1 lg:order-2" {...fadeIn}>
              <Badge variant="secondary" className="mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Setting New Standards in Hospitality
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A Place to Connect, Relax, and Celebrate More than just a hotel,
                we’re a place to unwind, connect, and create memories. Whether
                you&apos;re enjoying a meal at our signature restaurant, hosting
                an event in our elegant venues, or simply relaxing in your room
                after a day of exploration, we provide an atmosphere of comfort
                and convenience at every turn. Join Us At Marigold
                Accommodations, you’re not just another guest—you’re part of the
                family. We’re here to ensure you experience the very best of
                Karachi in a setting that feels like home. Thank you for
                choosing us for your stay. We can’t wait to welcome you!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="md:py-20 py-10 bg-gradient-to-b from-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Who Are We ?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Karachi, Marigold Accommodations was
                founded with a simple yet powerful vision: to create a place
                where travelers can feel like they&apos;re at home, no matter
                where they&apos;re from. Over the years, we&apos;ve become known
                for our exceptional service, attention to detail, and commitment
                to providing an unparalleled hospitality experience. What Makes
                Us Different What sets us apart is our passion for perfection.
                Every aspect of [Hotel Name] is designed with you in mind—from
                our modern, stylish rooms to our friendly, attentive staff, who
                are always ready to go the extra mile. We understand that every
                guest is unique, which is why we offer a range of personalized
                services to make sure your stay is tailored to your needs.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/ourstory.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Backstage Section */}
      <motion.section
        className="md:py-20 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Behind the Scenes
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Backstage Pictures
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a peek behind the curtain and discover the magic that makes
              Marigold Accommodations special
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {backstageImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-[300px] group">
                      <Image
                        src={image}
                        alt={`Backstage ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter and Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Newsletter />
        <Contact />
      </motion.div>
    </div>
  );
}
