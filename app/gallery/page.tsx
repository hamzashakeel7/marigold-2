import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const rooms = [
  {
    id: 1,
    name: "Luxury Suite",
    image: "/rom1.jpg",
  },
  {
    id: 2,
    name: "Luxury Suite better",
    image: "/rom2.jpg",
  },
  {
    id: 3,
    name: "Double bed mania",
    image: "/room4.jpg",
  },
  {
    id: 4,
    name: "Family Suite",
    image: "/room5.jpg",
  },
  {
    id: 5,
    name: "Classe Suite",
    image: "/room6.jpg",
  },
  {
    id: 6,
    name: "Garden View Room",
    image: "/room7.jpg",
  },
  {
    id: 7,
    name: "Marigold from outside",
    image: "/out1.jpg",
  },
  {
    id: 8,
    name: "marigold at work",
    image: "/out2.jpg",
  },
  {
    id: 9,
    name: "King suite",
    image: "/room8.jpg",
  },
];

export default function RoomGallery() {
  return (
    <div className="bg-[#EEEEEE] min-h-screen lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Explore Our Rooms
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Discover comfort and luxury in every corner
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Dialog key={room.id}>
              <DialogTrigger asChild>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    height:
                      room.id % 3 === 0
                        ? "300px"
                        : room.id % 3 === 1
                          ? "400px"
                          : "350px",
                  }}
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold text-center px-4">
                      {room.name}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogTitle className="sr-only">{room.name}</DialogTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
                      <p className="text-gray-600 mb-4">
                        Experience luxury and comfort in our{" "}
                        {room.name.toLowerCase()}. Perfect for your stay,
                        whether it&apos;s for business or pleasure.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
