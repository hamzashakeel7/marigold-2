"use client";

import Image from "next/image";
import Link from "next/link";
import {
  A11y,
  Navigation,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { simplifiedRoom } from "../interface";
import { Users, Bed } from "lucide-react";

// Import all required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface RoomSliderProps {
  data: simplifiedRoom[];
}

const RoomSlider: React.FC<RoomSliderProps> = ({ data }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="pb-3"
      >
        {data.map((room) => (
          <SwiperSlide key={room._id}>
            <Link
              href={`/room/${room.slug}`}
              className="group block bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={room.imageUrl}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                    Marigold Room
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {room.name}
                  </h3>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{room.bedrooms}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {room.description}
                </p>

                <div className="pt-2 border-t">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      PKR {room.pricePerNight.toLocaleString()}
                    </span>
                    <span className="ml-1 text-sm text-blue-600">/night</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-blue-600 !w-10 !h-10 !bg-white !rounded-full !shadow-lg after:!text-xl"></div>
        <div className="swiper-button-next !text-blue-600 !w-10 !h-10 !bg-white !rounded-full !shadow-lg after:!text-xl"></div>
      </Swiper>
    </div>
  );
};

export default RoomSlider;
