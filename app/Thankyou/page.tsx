"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function ReservationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-inherit py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="p-6 sm:p-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <CheckCircle className="w-full h-full text-green-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-center text-gray-900 mb-6"
            >
              Reservation Successful!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-center text-gray-600 mb-8"
            >
              Thank you for choosing Marigold. You will receive a confirmation
              email with your respective dates. We will be happy to welcome you
              at Marigold.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Check your email for dates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>Confirmation sent</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="border-t border-gray-200 pt-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Our Location
              </h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3984754594953!2d67.07805117604595!3d24.816043047032146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d6f540db5ab%3A0x40e94bc835d92cad!2sMarigold%20Accommodations%20(Marigold%201)!5e0!3m2!1sen!2s!4v1733944130859!5m2!1sen!2s"
                  width="700"
                  height="350"
                  loading="lazy"
                ></iframe>
              </div>
              <Link
                href="https://maps.app.goo.gl/695Zt4utdMm9ria59"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>View on Google Maps</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
