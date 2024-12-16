/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import InsideSlider, { Room } from "@/app/components/InsideSlider";
import { client } from "@/app/lib/sanity";

async function getRoomBySlug(slug: string) {
  const query = `*[_type == "room" && slug.current == $slug] {
    name,
    description,
    pricePerNight,
    capacity,
    bedrooms,
    extraFeatures,
    likes,
    "slug": slug.current,
    images[]{
      asset->{
        url
      }
    },
    _id
  }[0]`; // Fetch only one matching document
  const data = await client.fetch(query, { slug });
  return data;
}

export const dynamic = "force-static";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
    const { slug } = await params;
    if (!slug) {
      return <div>Invalid slug provided</div>;
    }

    const data = await getRoomBySlug(slug);
    if (!data) {
      return <div>Room not found</div>; // Handle case where no room matches the slug
    }

    return (
      <div>
        <InsideSlider rooms={[data]} slug={slug} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering room page:", error);
    return <div>An error occurred while loading the page</div>;
  }
};

export default Page;
