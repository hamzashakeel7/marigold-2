import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8lvpmba0",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
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

export function urlFor(source: any) {
  return builder.image(source);
}
