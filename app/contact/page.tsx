import React from "react";
import Contact from "../components/Contact";

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

      <div>
        <Contact />
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
