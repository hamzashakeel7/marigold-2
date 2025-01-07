"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FaAddressBook, FaFacebookF } from "react-icons/fa";
import { Mail, PhoneCall, MapPin, Loader2 } from "lucide-react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { motion } from "framer-motion";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: FaAddressBook,
    title: "Address",
    content: "phase 7 ext",
    link: "https://maps.google.com",
  },
  {
    icon: PhoneCall,
    title: "Phone Number",
    content: "+92-3353036639",
    link: "tel:+923353036639",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "webwizdurrani@gmail.com",
    link: "mailto:webwizdurrani@gmail.com",
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "/", label: "Facebook" },
  { icon: AiFillInstagram, href: "/", label: "Instagram" },
  { icon: IoLogoWhatsapp, href: "/", label: "WhatsApp" },
  { icon: TbBrandBooking, href: "/", label: "Booking" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Get In Touch section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h1>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              We&apos;re here to help and answer any question you might have.
              Looking forward to hearing from you! 🌟
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="rounded-full p-4 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <Link
                    href={item.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    {item.content}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={social.href} aria-label={social.label}>
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110">
                      <social.icon className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="w-full backdrop-blur-sm bg-white/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Phone", type: "tel", name: "phone" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <Label htmlFor={field.name} className="text-sm font-medium">
                      {field.label}
                    </Label>
                    <Input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      required={field.name !== "phone"}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </motion.div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <div className="rounded-lg overflow-hidden h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3984754594953!2d67.07805117604595!3d24.816043047032146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d6f540db5ab%3A0x40e94bc835d92cad!2sMarigold%20Accommodations%20(Marigold%201)!5e0!3m2!1sen!2s!4v1734966325275!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 text-blue-600">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Find us here</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
