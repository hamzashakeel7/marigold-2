"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { A11y, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { simplifiedRoom } from "../interface"; // Import the type for TypeScript
import { FaUser } from "react-icons/fa";
import { BedSingle } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

interface RoomSliderProps {
  data: simplifiedRoom[];
}

const RoomSlider: React.FC<RoomSliderProps> = ({ data }) => {
  return (
    <div className="lg:px-32">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        <div className="flex items-center justify-center flex-row rounded-md ">
          {data.map((room) => (
            <SwiperSlide
              className="overflow-x-hidden overflow-y-hidden rounded-md "
              key={room._id}
            >
              <div className="md:p-3 p-1 rounded-md bg-white w-full sm:w-auto h-[21rem] lg:h-[30rem] flex flex-col">
                <Link
                  href={`/room/${room.slug}`}
                  className="hover:opacity-60 flex-grow flex flex-col gap-1 "
                >
                  {/* Image section */}
                  <div className="h-32 lg:h-56 w-full">
                    <Image
                      src={room.imageUrl}
                      alt={room.name}
                      width={500}
                      height={500}
                      className="object-cover h-full w-full rounded-md"
                    />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col p-2 gap-1 flex-grow">
                    <p className="text-xs text-blue-500">Marigold Room</p>
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm md:text-xl font-semibold line-clamp-1 w-40">
                        {room.name}
                      </h2>
                      <div className="flex items-center justify-center flex-col">
                        <p className="flex items-center justify-center gap-1 text-xs">
                          <FaUser className="w-2" /> {room.capacity}
                        </p>
                        <p className="flex items-center gap-1 text-xs">
                          <BedSingle className="w-3" /> {room.bedrooms}
                        </p>
                      </div>
                    </div>
                    <p className="line-clamp-2 mt-1 md:mt-3 text-gray-500 text-xs md:text-sm">
                      {room.description}
                    </p>
                    <p className="text-center mt-1 lg:mt-auto text-lg md:text-xl font-bold">
                      PKR {room.pricePerNight}{" "}
                      <span className="text-blue-500">/night</span>
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default RoomSlider;
