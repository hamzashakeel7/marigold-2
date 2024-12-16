// import { ImageAsset } from "@sanity/types";
import { Image } from "./lib/sanity";

export interface simplifiedRoom {
  _id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  imageUrl: string;
  slug: string;
  bedrooms: number;
  extraFeatures: string;
  likes: number;
}

export interface fullProduct {
  categoryName: string;
  _id: string;
  price: number;
  slug: string;
  images: Image[];
  name: string;
  description: string;
  price_id: string;
  likes: number;
}
