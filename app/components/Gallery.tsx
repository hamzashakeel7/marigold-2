// Gallery Component

import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Classic room for family
      </p>
      <p className="font-normal text-base text-white">
        {" "}
        A spacious and comfortable room perfect for families. Enjoy a cozy
        atmosphere with all the amenities you need for a relaxing stay.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        King of all rooms 👑
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Serene Mountain Retreat
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This room offers a cozy and intimate setting with panoramic views of the
        surrounding peaks. Enjoy the tranquility of nature while relaxing in
        comfort. Perfect for those seeking a serene getaway.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Building of Marigold
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Nestled in a vibrant garden, the Building of Marigold offers a unique
        blend of luxury and nature. With its spacious interiors and exquisite
        design, it provides a perfect retreat for those seeking comfort and
        tranquility. Enjoy the lush surroundings and the serene atmosphere that
        make this place truly special.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Marigold&apos;s Premier Two-Bedroom Suite
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This exquisite two-bedroom suite offers a harmonious blend of luxury and
        nature. It provides a peaceful retreat with stunning views and modern
        amenities. Perfect for families or couples seeking a tranquil escape at
        Marigold.
      </p>
    </div>
  );
};

const Gallery = () => {
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/room5.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/room6.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "out1.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "room4.jpg",
    },
  ];

  return (
    <div className="h-screen pt-5 md:pt-10 pb-52 md:pb-44 mb-5 w-full bg-white">
      <div className="flex items-center text-center justify-center flex-col gap-3 w-full -mb-8">
        <p className="text-lg md:text-xl text-blue-500 tracking-wider font-serif">
          Gallery
        </p>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black ">
          Explore Our
        </h1>
        <p className="w-full lg:w-1/2  p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          consectetur facere minus enim quidem numquam corrupti itaque neque.
          Voluptas sed error eos quaerat fuga dolores beatae non aliquid
          distinctio. Quod?
        </p>
      </div>
      <LayoutGrid cards={cards} />

      <Link href="/gallery" className="flex items-center justify-center -mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 z-10">
          View More
        </Button>
      </Link>
    </div>
  );
};

export default Gallery;
