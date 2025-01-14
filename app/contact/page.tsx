import React from "react";
import Contact from "../components/Contact";

const page = () => {
  return (
    <div>
      <div className="px-5 lg:px-48 mt-10">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="w-full md:w-1/2 text-gray-500 text-center">
            Welcome to Our Contact Page Your questions and feedback are
            important to us. Please use the form below to get in touch, and
            we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
