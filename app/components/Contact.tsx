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
  CardFooter,
} from "@/components/ui/card";
import { FaAddressBook, FaFacebookF } from "react-icons/fa";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitMessage("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <div className="mt-10 lg:mt-16 bg-gray-200 flex items-start justify-center lg:px-20 w-full gap-4 lg:gap-8">
      <div className="px-5 py-5 lg:px-12 flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-4">
        {/* Get In Touch section */}
        <div className="flex flex-col gap-2 lg:gap-5 w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-semibold">Get In Touch</h1>
          <p className="w-full lg:w-3/4 text-gray-500 my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            est ipsam possimus perferendis vel, nam recusandae, optio
            perspiciatis aspernatur distinctio illum alias beatae aut. Suscipit
            vel harum sit in voluptates.
          </p>
          {/* Address */}
          <div className="flex items-start gap-5 w-full">
            <div className="border-2 rounded-full h-20 w-56 bg-blue-500 text-white flex items-center justify-center text-2xl">
              <FaAddressBook />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                at pariatur asperiores tempore laudantium alias quia sequi nemo.
                Molestiae, quibusdam.
              </p>
            </div>
          </div>
          {/* Phone Number */}
          <div className="flex items-start gap-5 w-full">
            <div className="border-2 rounded-full h-16 w-16 bg-blue-500 text-white flex items-center justify-center text-2xl">
              <PhoneCall />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Phone Number</h2>
              <p className="text-sm text-gray-600">+92-3353036639</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start gap-5 w-full">
            <div className="border-2 rounded-full h-16 w-16 bg-blue-500 text-white flex items-center justify-center text-2xl">
              <Mail />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">E-Mail</h2>
              <p className="text-sm text-gray-600">webwizdurrani@gmail.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3 mt-5 justify-center md:justify-start">
            <Link href="/">
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl hover:bg-blue-800 transition-colors">
                <FaFacebookF />
              </div>
            </Link>
            <Link href="/">
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl hover:bg-blue-800 transition-colors">
                <AiFillInstagram />
              </div>
            </Link>
            <Link href="/">
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl hover:bg-blue-800 transition-colors">
                <IoLogoWhatsapp />
              </div>
            </Link>
            <Link href="/">
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl hover:bg-blue-800 transition-colors">
                <TbBrandBooking />
              </div>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below to get in touch with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              {submitMessage && (
                <p className="text-sm text-green-600 text-center w-full">
                  {submitMessage}
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
