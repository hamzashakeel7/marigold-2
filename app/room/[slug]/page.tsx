/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import InsideSlider from "@/app/components/InsideSlider";
import { client } from "@/app/lib/sanity";

const getRooms = async () => {
  const query = `*[_type == "room"] {
    _id,
    name,
    images[]{asset->{_id, url}},
    description,
    pricePerNight,
    capacity,
    bedrooms,
    extraFeatures,
    likes,
    "slug": slug.current,
  }`;
  return await client.fetch(query);
};

// Explicitly declare the dynamic property
export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params; // Access params directly
  const data = await getRooms();

  // Filter rooms by slug if needed
  const room = data.find((room: any) => room.slug === slug);

  return (
    <div>
      {room ? <InsideSlider rooms={data} slug={slug} /> : <p>Room not found</p>}
    </div>
  );
};

export default Page;
