import Image from "next/image";
import React from "react";
import { CardDemo } from "../components/ui/card";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";

const page = () => {
  return (
    <div className="mt-10 lg:mt-36">
      <div className="h-full w-full flex items-center justify-center flex-wrap">
        <h1 className="text-2xl lg:text-4xl mb-20 mt-5">About Us</h1>
      </div>

      {/* our mission */}
      <div className="bg-blue-200 w-full h-full flex items-center justify-between flex-wrap gap-5 lg:gap-20 p-10 lg:p-36">
        <h1 className="flex items-center justify-center text-xl lg:text-3xl text-nowrap font-semibold">
          Our Mission
        </h1>
        <p className="w-full lg:w-1/2 text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non?
          Iusto earum necessitatibus, nostrum magnam obcaecati possimus ab porro
          alias at totam beatae quae nisi sint doloremque error. Fugiat animi,
          molestiae repellendus, adipisci accusamus optio, corporis praesentium
          neque eos culpa hic quidem saepe reprehenderit itaque vitae
          consectetur. Nam nostrum sunt adipisci quos, aperiam accusantium amet
          natus ducimus nulla recusandae ab dignissimos ad fugit provident,
          magni earum laboriosam assumenda consectetur animi vel culpa quo
          inventore, ullam eum! Dolorum libero neque temporibus dolor modi illo
          perspiciatis sequi optio doloribus mollitia vero voluptates magnam
          itaque alias adipisci consectetur, ratione excepturi! ab!
        </p>
      </div>

      <div className="relative w-full lg:h-[35rem] h-[20rem]">
        <Image
          alt=""
          src="/about.jpg"
          width={10000}
          height={10000}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center flex-wrap">
          <div className="flex items-center justify-between gap-5 lg:gap-20 lg:p-36 p-10 flex-wrap">
            <h1 className="flex items-center justify-center text-white text-xl lg:text-3xl text-nowrap font-semibold">
              Our Vision
            </h1>
            <p className="w-full lg:w-1/2 text-sm lg:text-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              non? Iusto earum necessitatibus, nostrum magnam obcaecati possimus
              ab porro alias at totam beatae quae nisi sint doloremque error.
              Fugiat animi, molestiae repellendus, adipisci accusamus optio,
              corporis praesentium neque eos culpa hic quidem saepe
              reprehenderit itaque vitae consectetur. Nam nostrum sunt adipisci
              quos, aperiam accusantium amet natus
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center text-center justify-center mt-10 flex-col px-5 lg:px-48 lg:mt-20 w-full">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-serif text-blue-500 mb-10">
          Backstage Pictures...
        </h1>
        <div className="flex items-center justify-center gap-5 w-full">
          <CardDemo />
        </div>
      </div>

      {/* newsletter and contact */}
      <div>
        <Newsletter />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
