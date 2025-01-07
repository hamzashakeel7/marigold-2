import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RoomSlider from "./RoomSlider";
import { simplifiedRoom } from "../interface";
import { client } from "../lib/sanity";

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

const AllRooms = async () => {
  const data: simplifiedRoom[] = await getData();

  return (
    <section className="md:py-10 py-5 bg-gray-50 mt-5 md:mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-medium mb-2 text-sm">
              Marigold&apos;s Best
            </h4>
            <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold text-gray-900 mb-4">
              Premium rooms from our catalogue
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Experience luxury and comfort in our carefully curated selection
              of premium accommodations, designed to provide an unforgettable
              stay.
            </p>
          </div>
          <Link
            href="/all"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group text-xs"
          >
            View all
            <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <RoomSlider data={data} />
      </div>
    </section>
  );
};

export default AllRooms;
