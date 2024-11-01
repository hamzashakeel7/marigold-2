import { Mail, PhoneCall } from "lucide-react";
import React from "react";
import { FaAddressBook, FaFacebookF } from "react-icons/fa";
import Contact from "../components/Contact";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="px-5 lg:px-48 mt-10 lg:mt-32">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="w-full md:w-1/2 text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
            nostrum sequi omnis dolor velit, eos maxime vel recusandae? Numquam?
          </p>
        </div>
      </div>

      {/* 2nd section */}
      <div className="mt-14 lg:mt-24 bg-gray-200">
        <div className="px-5 py-5 lg:px-48 mt-10 flex items-start justify-between w-full flex-wrap gap-0">
          {/* Get In Touch section */}
          <div className="flex flex-col mt-10 gap-5 w-full lg:w-1/2">
            <h1 className="text-4xl font-semibold">Get In Touch</h1>
            <p className="w-full lg:w-3/4 text-gray-500 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              est ipsam possimus perferendis vel, nam recusandae, optio
              perspiciatis aspernatur distinctio illum alias beatae aut.
              Suscipit vel harum sit in voluptates.
            </p>
            {/* Address */}
            <div className="flex items-start gap-5 w-full">
              <div className="border-2 rounded-full h-16 w-56 lg:w-24 bg-blue-500 text-white flex items-center justify-center text-2xl">
                <FaAddressBook />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime at pariatur asperiores tempore laudantium alias quia
                  sequi nemo. Molestiae, quibusdam.
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
            <div className="flex items-center gap-5 mt-5 mb-5 justify-center md:justify-start">
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl ease-in-out transition-colors hover:bg-blue-800">
                <Link href="/">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl  ease-in-out transition-colors hover:bg-blue-800">
                <Link href="/">
                  <AiFillInstagram />
                </Link>
              </div>
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl  ease-in-out transition-colors hover:bg-blue-800">
                <Link href="/">
                  <IoLogoWhatsapp />
                </Link>
              </div>
              <div className="border-2 rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center text-xl  ease-in-out transition-colors hover:bg-blue-800">
                <Link href="/">
                  <TbBrandBooking />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact component */}
          <div className="w-full lg:w-1/2 mb-10 -mt-9">
            <Contact />
          </div>
        </div>
      </div>

      {/* map */}
      <div className="">
        <div className="flex items-center justify-center rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.878280664864!2d67.03109677592153!3d24.83383584632141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d09db6ecf41%3A0x8f853186a1621f7e!2sTeen%20Talwar%20Monument!5e0!3m2!1sen!2s!4v1730393605053!5m2!1sen!2s"
            width="1300"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
