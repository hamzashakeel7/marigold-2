/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import InsideSlider, { Room } from "@/app/components/InsideSlider";
import { client } from "@/app/lib/sanity";

// Fetch room data by slug
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

// Fetch comments for a room
const fetchComments = async (roomId: string) => {
  const query = `*[_type == "comment" && room._ref == "${roomId}" && approved == true] | order(createdAt desc) {
    name,
    comment,
    createdAt
  }`;
  const comments = await client.fetch(query);
  return comments;
};

export const dynamic = "force-static";

const Page = async ({ params }: { params: { slug: string } }) => {
  try {
    const { slug } = params;
    if (!slug) {
      return <div>Invalid slug provided</div>;
    }

    // Fetch room data
    const room = await getRoomBySlug(slug);
    if (!room) {
      return <div>Room not found</div>; // Handle case where no room matches the slug
    }

    // Fetch comments for the room
    const Roomcomments = await fetchComments(room._id);

    return (
      <div>
        <InsideSlider rooms={[room]} slug={slug} Roomcomments={Roomcomments} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering room page:", error);
    return <div>An error occurred while loading the page</div>;
  }
};

export default Page;
