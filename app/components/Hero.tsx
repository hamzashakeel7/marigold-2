"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="h-[50vh] md:h-[60vh] lg:h-[75vh] relative top-[-5rem]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1500}
          className="mySwiper"
        >
          <SwiperSlide className="relative flex flex-col">
            <Image
              src="/hero1.webp"
              alt="Room slider image"
              width={8000}
              height={8000}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <h1 className="absolute lg:bottom-20 bottom-5 lg:left-28 left-5 text-2xl md:text-3xl lg:text-6xl text-white font-semibold z-10 md:w-1/2 text-left">
              Discover extraordinary comfort in our rooms
            </h1>
          </SwiperSlide>

          <SwiperSlide className="relative flex flex-col">
            <Image
              src="/hero1.webp"
              alt="Room slider image"
              width={8000}
              height={8000}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <h1 className="absolute lg:bottom-20 bottom-5 lg:left-28 left-5 text-2xl md:text-3xl lg:text-6xl text-white font-semibold z-10 md:w-1/2 text-left">
              Discover extraordinary comfort in our rooms
            </h1>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col">
            <Image
              src="/hero1.webp"
              alt="Room slider image"
              width={8000}
              height={8000}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <h1 className="absolute lg:bottom-20 bottom-5 lg:left-28 left-5 text-2xl md:text-3xl lg:text-6xl text-white font-semibold z-10 md:w-1/2 text-left">
              Discover extraordinary comfort in our rooms
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
