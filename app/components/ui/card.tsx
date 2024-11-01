"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

import category2 from "@/public/category2.jpg";
import category3 from "@/public/category3.jpg";
import category4 from "@/public/category4.jpg";
import category5 from "@/public/category5.jpg";

export function CardDemo() {
  const cardImgs = [
    {
      src: category2,
      alt: "Image Description 1",
    },
    {
      src: category3,
      alt: "Image Description 2",
    },
    {
      src: category4,
      alt: "Image Description 3",
    },
    {
      src: category5,
      alt: "Image Description 4",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4">
      {cardImgs.map((cardImg, index) => (
        <div
          key={index}
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 transition-all duration-500"
          )}
        >
          <Image
            src={cardImg.src}
            alt={cardImg.alt}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          {/* Overlay and Content */}
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80 transition-opacity duration-500"></div>
          <div className="relative z-10 text-white">
            <h1 className="font-bold text-xl md:text-3xl">
              Background Overlays
            </h1>
            <p className="font-normal text-base my-4">This card is for some</p>
          </div>
        </div>
      ))}
    </div>
  );
}
