"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";

export default function AboutPage() {
  const backstageImages = [
    "/category1.jpg",
    "/category2.jpg",
    "/category5.jpg",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
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
          <Badge className="mb-4 text-white" variant="secondary">
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
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                non? Iusto earum necessitatibus, nostrum magnam obcaecati
                possimus ab porro alias at totam beatae quae nisi sint
                doloremque error. Fugiat animi, molestiae repellendus, adipisci
                accusamus optio, corporis praesentium neque eos culpa hic quidem
                saepe reprehenderit itaque vitae consectetur.
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
        className="py-20 bg-gray-900 text-white"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                non? Iusto earum necessitatibus, nostrum magnam obcaecati
                possimus ab porro alias at totam beatae quae nisi sint
                doloremque error. Fugiat animi, molestiae repellendus, adipisci
                accusamus optio.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Backstage Section */}
      <motion.section
        className="py-20"
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
