"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Star, Users, Wifi, Coffee, Tv } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/card";
import Newsletter from "./Newsletter";

const roomImages = [
  "/category5.jpg",
  "/category2.jpg",
  "/category3.jpg",
  "/category4.jpg",
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Coffee, label: "Coffee Maker" },
  { icon: Tv, label: "Smart TV" },
  { icon: Users, label: "Up to 4 Guests" },
];

export default function RoomDetail() {
  const [likes, setLikes] = useState(false);
  const [showLikes, setShowLikes] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const { isSignedIn, user } = useAuth();
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const router = useRouter();

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
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = () => {
    setLikes(!likes);
    setShowLikes(showLikes + 1);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 2000);
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
    if (!isSignedIn) {
      const redirectUrl = window.location.pathname;
      router.push(
        `/auth/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`
      );
    } else if (selectedDates && selectedDates.length > 0) {
      setShowConfirmationDialog(true);
    } else {
      alert("Please select your dates.");
    }
  };

  const sendEmail = async () => {
    const emailData = {
      userEmail: user?.emailAddresses[0]?.emailAddress,
      selectedDates,
    };

    try {
      const response = await fetch("/api/reserve-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Reservation email sent successfully!");
      } else {
        alert("Failed to send reservation email.");
      }
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  const confirmReservation = async () => {
    try {
      await sendEmail();
      setShowConfirmationDialog(false);
      router.push("/Thankyou");
    } catch (error) {
      console.error("Failed to confirm reservation:", error);
      alert("An error occurred while confirming your reservation.");
    }
  };

  const handleImageClick = (image: string) => {
    setModalImage(image);
    setShowImageModal(true);
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
            Marigold Accomadtions
          </Badge>
          <h1 className="text-4xl font-bold mb-2">
            Luxurious Ocean View Suite
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Experience tranquility with breathtaking views
          </p>
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
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src={roomImages[currentImageIndex]}
                alt={`Room image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {roomImages.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden ${
                    index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`Room thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
              <p className="text-muted-foreground mb-6">
                Indulge in luxury with our spacious ocean view suite. Featuring
                modern amenities, a private balcony, and stunning panoramic
                views of the crystal-clear waters.
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
                $299{" "}
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
              <Button onClick={handleReserve} size="lg" className="w-full">
                Reserve Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
          <div className="space-y-4 mb-6">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold">{comment.author}</p>
                    <div className="flex">
                      {[...Array(comment.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p>{comment.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <form onSubmit={handleCommentSubmit}>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a review..."
              className="mb-4"
            />
            <Button type="submit">Post Review</Button>
          </form>
        </div>

        {showConfirmationDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">Confirm Reservation</h2>
                <p className="mb-4">
                  You are about to reserve the room for the following dates:{" "}
                  {selectedDates?.map((date) => date.toDateString()).join(", ")}
                </p>
                <div className="flex justify-end gap-4">
                  <Button onClick={confirmReservation} variant="default">
                    Confirm
                  </Button>
                  <Button
                    onClick={() => setShowConfirmationDialog(false)}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <AnimatePresence>
          {showImageModal && modalImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              onClick={() => setShowImageModal(false)}
            >
              <motion.div
                className="relative bg-white p-4 rounded-lg"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={modalImage}
                  alt="Enlarged Room Image"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
