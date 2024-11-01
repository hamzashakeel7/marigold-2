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
    image:
      "https://plus.unsplash.com/premium_photo-1720020552740-072db3289c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ocean View Room",
    image:
      "https://images.unsplash.com/photo-1720048170996-40507a45c720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Cozy Studio",
    image:
      "https://plus.unsplash.com/premium_photo-1720020552740-072db3289c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Family Suite",
    image:
      "https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Penthouse",
    image:
      "https://images.unsplash.com/photo-1729366791122-5334a68b6b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Garden View Room",
    image:
      "https://images.unsplash.com/photo-1720048170996-40507a45c720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Executive Suite",
    image:
      "https://images.unsplash.com/photo-1729614499339-b98e60ff68d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Beachfront Bungalow",
    image:
      "https://images.unsplash.com/photo-1730216597753-1b8ac897bcc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    id: 9,
    name: "City View Apartment",
    image:
      "https://images.unsplash.com/photo-1721332154161-847851ea188b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
];

export default function RoomGallery() {
  return (
    <div className="bg-[#EEEEEE] min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
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
