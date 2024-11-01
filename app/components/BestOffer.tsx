import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { simplifiedRoom } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { BedSingle } from "lucide-react";

async function getData() {
  const query = `*[_type == "room"] | order(_createdAt desc)[0...4]{
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

const BestOffer = async () => {
  const data: simplifiedRoom[] = await getData();

  return (
    <div className="px-5 lg:px-48">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-3">
          <p className="text-lg md:text-xl text-blue-500 tracking-wider font-serif">
            Marigold&apos;s Best
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black ">
            Premium rooms from our catalogue
          </h1>
          <p className="text-gray-500 w-full lg:w-2/3 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            minima dignissimos eum, repellendus animi quidem ullam provident
            molestias quibusdam ad!
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

      {/* Room cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mt-10 lg:px-20">
        {data.map((room) => (
          <div
            key={room._id}
            className="md:p-3 p-1 rounded-md bg-white w-full sm:w-auto h-[21rem] lg:h-[30rem] flex flex-col shadow-2xl"
          >
            <Link
              href={`/room/${room.slug}`}
              className="hover:opacity-60 flex-grow flex flex-col"
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
              <div className="flex flex-col p-2 gap-2 flex-grow">
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
        ))}
      </div>
    </div>
  );
};

export default BestOffer;
