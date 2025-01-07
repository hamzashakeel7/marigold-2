/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, Key } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Star, Users, Wifi, Coffee, Tv } from "lucide-react";
import { useAuth, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/Checkbox";
import Newsletter from "./Newsletter";
import { Input } from "@/components/ui/input";

export interface Room {
  _id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  images: { asset: { url: string } }[];
  slug: string;
  bedrooms: number;
  extraFeatures: string[];
  likes: number;
}

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Coffee, label: "Coffee Maker" },
  { icon: Tv, label: "Smart TV" },
  { icon: Users, label: "Up to 4 Guests" },
];

export default function RoomDetail({
  rooms,
  slug,
}: {
  rooms: Room[];
  slug: string;
}) {
  const initialRoom = rooms.find((room) => room.slug === slug) || null;
  const [currentRoom, setCurrentRoom] = useState<Room | null>(initialRoom);

  const [likes, setLikes] = useState(false);
  const [showLikes, setShowLikes] = useState(rooms[0]?.likes || 0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isSignedIn } = useAuth(); // Clerk authentication state
  const { user } = useUser(); // Fetch user details
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    acceptDates: false,
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Hamza Shakeel",
      text: "Great room! Loved the view.",
      rating: 5,
    },
    {
      id: 2,
      author: "Durrani",
      text: "Comfortable and clean. Will book again.",
      rating: 4,
    },
  ]);

  useEffect(() => {
    if (initialRoom) {
      setCurrentRoom(initialRoom);
      setShowLikes(initialRoom.likes);
    }
  }, [initialRoom]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % (currentRoom?.images.length || 1)
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [currentRoom]);

  const handleLike = () => {
    setLikes(!likes);
    setShowLikes((prev) => (likes ? prev - 1 : prev + 1));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), author: "You", text: comment, rating: 5 },
      ]);
      setComment("");
    }
  };

  const handleReserve = () => {
    if (selectedDates && selectedDates.length > 0) {
      setIsPopupOpen(true);
    } else {
      alert("Please select your dates.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Extract name and value from the input field
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field in the formData state
    }));
  };

  const handleImageClick = (image: string) => {
    setModalImage(image);
    setShowImageModal(true);
  };

  const handleSubmitReservation = async () => {
    setIsSubmitting(true);
    const { name, email, phone } = formData;

    // Validate fields
    if (
      !name ||
      !email ||
      !phone ||
      !selectedDates ||
      selectedDates.length === 0
    ) {
      alert("Please fill all fields and select dates.");
      return;
    }

    try {
      const response = await fetch("/api/reserve-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email, // Sending `email` correctly
          phone,
          selectedDates, // Pass selected dates
        }),
      });

      if (response.ok) {
        setIsPopupOpen(false);
        router.push("/Thankyou");
      } else {
        alert("Failed to confirm reservation.");
      }
    } catch (error) {
      console.error("Error in reservation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            Marigold Accommodations
          </Badge>
          <h1 className="text-4xl font-bold mb-2">{currentRoom?.name}</h1>
          {/* <p className="text-xl text-muted-foreground mb-4">
            {currentRoom?.description}
          </p> */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={handleLike}
              className="flex items-center gap-2"
            >
              <Heart className={likes ? "fill-red-500 text-red-500" : ""} />
              {showLikes}
            </Button>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" />
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground ml-1">
                ({comments.length} reviews)
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative lg:h-[600px] h-[300px] w-[330px] lg:w-full rounded-lg overflow-hidden">
              <Image
                src={currentRoom?.images[currentImageIndex]?.asset.url || ""}
                alt={`Room image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {currentRoom?.images.map(
                (
                  image: { asset: { url: any } },
                  index: Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => handleImageClick(image.asset?.url || "")}
                  >
                    <Image
                      src={image.asset.url}
                      alt={`Room thumbnail`}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <Card className="">
            <CardContent className="p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
              <p className="text-muted-foreground mb-6">
                {currentRoom?.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <amenity.icon className="text-blue-500" />
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
              <div className="text-3xl font-bold mb-6">
                ${currentRoom?.pricePerNight}
                <span className="text-lg font-normal text-muted-foreground">
                  / night
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  className="rounded-md border mb-6 w-[300px] flex items-center justify-center"
                />
              </div>
              <Button onClick={handleReserve} className="w-full">
                Reserve Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Popup */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">
                  Complete Your Reservation
                </h2>
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mb-4"
                />
                <Input
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mb-4"
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mb-4"
                />
                <Button onClick={handleSubmitReservation} className="w-full">
                  {isSubmitting ? "Submitting..." : "Confirm Reservation"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsPopupOpen(false)}
                  className="w-full mt-4"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 border rounded-lg">
                <h3 className="font-bold">{comment.author}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Rating: {"⭐".repeat(comment.rating)}
                </p>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleCommentSubmit} className="mb-12">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment"
            className="mb-4"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-4 rounded-lg">
              <Image
                src={modalImage || ""}
                alt="Modal image"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <Button
                onClick={() => setShowImageModal(false)}
                className="mt-4 w-full"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center items-center mb-10 flex-col px-5">
        <div className="flex justify-start items-start mb-5">
          <h2 className="text-3xl font-semibold">
            Look at our rooms in a better fashion
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-2 lg:px-32">
          {currentRoom?.images.map(
            (image: { asset: { url: any } }, index: Key | null | undefined) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg overflow-hidden h-[150px] w-[150px]`}
                onClick={() => handleImageClick(image.asset?.url || "")}
              >
                <Image
                  src={image.asset?.url || ""}
                  alt={`Room thumbnail`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            )
          )}
        </div>
      </div>
      <Newsletter />
    </>
  );
}
