"use client";

import Image from "next/image";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thank you for subscribing! 😊");
        setEmail(""); // Clear the email input
      } else {
        setMessage("Subscription failed. Please try again. 😔");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="relative w-full lg:h-[35rem] h-[20rem] mt-36">
      <Image
        alt=""
        src="/newsletter.jpg"
        width={10000}
        height={10000}
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-white text-xl lg:text-3xl text-center">
            Get{" "}
            <span className="text-2xl mx-1 md:text-3xl md:mx-2 lg:text-4xl lg:mx-3 font-serif text-blue-800 bg-blue-400 rounded-sm p-2">
              FREE
            </span>{" "}
            Consultation
          </h2>
          <p className="text-white mt-4 font-semibold pl-3 text-sm md:text-lg text-center">
            Subscribe to our newsletter and earn a free consultation with our
            professional&apos;s.
          </p>
          {/* Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="flex  items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mt-10 gap-x-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl w-[12rem] h-[3rem] lg:w-[40rem] text-white font-bold bg-transparent border-2 border-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-2 text-xs bg-blue-500 text-white font-bold rounded flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
          {message && <p className="text-white mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
