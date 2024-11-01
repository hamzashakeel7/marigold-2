import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import RoomSlider from "./RoomSlider";
import { simplifiedRoom } from "../interface";
import { client } from "../lib/sanity";
import "swiper/css";
import "swiper/css/pagination";
import "./RoomSlider";

async function getData() {
  const query = `*[_type == "room"]{
          _id,
          name,
          description,
          pricePerNight,
          capacity,
          bedrooms,
          "slug": slug.current,
          "imageUrl": images[0].asset->url
        }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

const Allrooms = async () => {
  const data: simplifiedRoom[] = await getData();
  return (
    <div>
      <div className="px-5 lg:px-48 mt-28">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-sm md:text-xl text-blue-500 tracking-wider font-serif">
              All Of Marigold
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black ">
              All Rooms At Affordable!
            </h1>
            <p className="text-gray-500 w-full lg:w-2/3 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minima dignissimos eum, repellendus animi quidem ullam
              provident molestias quibusdam ad!
            </p>
          </div>
          <div className="">
            <Link
              href="/all"
              className="flex items-center justify-center flex-row gap-1 text-blue-500 text-xs w-full md:text-lg hover:gap-2 transition-all ease-linear"
            >
              View all
              <MdKeyboardArrowRight className="text-xl" />
            </Link>
          </div>
        </div>

        {/* rooms slider */}
        <div className="">
          <div className="overflow-x-hidden w-full mt-5">
            <RoomSlider data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allrooms;
