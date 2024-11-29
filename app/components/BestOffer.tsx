import Image from "next/image";
import { ChevronRight, Users, Bed } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";
import { simplifiedRoom } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";

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

export default async function BestOffer() {
  const data: simplifiedRoom[] = await getData();

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="space-y-4 mb-6 md:mb-0">
            <Badge variant="secondary" className="font-serif">
              Marigold&apos;s Best
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Premium rooms from our catalogue
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Experience luxury and comfort in our carefully curated selection
              of premium accommodations, designed to provide an unforgettable
              stay.
            </p>
          </div>
          <Link
            href="/all"
            className="group inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((room) => (
            <div key={room._id}>
              <Card className="group h-full overflow-hidden border-0 bg-background/50 shadow-md hover:shadow-xl transition-shadow">
                <Link href={`/room/${room.slug}`} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.imageUrl}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <CardContent className="space-y-4 p-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                    >
                      Marigold Room
                    </Badge>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-lg line-clamp-1">
                        {room.name}
                      </h3>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{room.capacity}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bed className="h-4 w-4" />
                          <span>{room.bedrooms}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {room.description}
                    </p>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <div className="mt-auto w-full text-center">
                      <span className="text-2xl font-bold">
                        PKR {room.pricePerNight.toLocaleString()}
                      </span>
                      <span className="text-blue-500 ml-1">/night</span>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
