"use client";

import React, { useState } from "react";
// import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thank you for subscribing! 😊");
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again. 😔");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/newsletter.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[600px] items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-md"
        >
          <div className="relative mb-6 text-center">
            <h2 className="mb-2 inline-block text-4xl font-bold tracking-tight text-white">
              Get{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 rotate-2 rounded bg-blue-600/70 px-6"></span>
                <span className="relative px-6">FREE</span>
              </span>{" "}
              Consultation
            </h2>
            <p className="text-lg text-white/90">
              Subscribe to our newsletter and earn a free consultation with our
              professionals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 blur transition duration-1000 group-hover:opacity-70" />
              <div className="relative flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-white/10 px-4 py-6 text-white placeholder:text-white/70 focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-600 px-6 py-6 text-white transition-colors hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </div>
          </form>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 text-center text-lg font-medium text-white"
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
