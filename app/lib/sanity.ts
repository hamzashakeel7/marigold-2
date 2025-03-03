import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const runtime = "nodejs";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export interface Image {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

const builder = ImageUrlBuilder(client);
// removed any type now

export function urlFor(source: Image) {
  return builder.image(source);
}
