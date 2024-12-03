"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// fake images
const roomImages = [
  "/category5.jpg",
  "/category2.jpg",
  "/category3.jpg",
  "/category4.jpg",
];

export default function RoomDetail() {
  const [likes, setLikes] = useState(false); // toggle effect of like and unlike
  const [showLikes, setShowLikes] = useState(0); // toggle effect of like and unlike
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const { isSignedIn, user } = useAuth(); // Clerk authentication state
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const router = useRouter();

  // fake comments
  const [comments, setComments] = useState([
    { id: 1, author: "Hamza Shakeel", text: "Great room! Loved the view." },
    {
      id: 2,
      author: "Durrani",
      text: "Comfortable and clean. Will book again.",
    },
  ]);
  const [showReservationThankYou, setShowReservationThankYou] = useState(false);

  const handleLike = () => {
    setLikes(!likes);
    setShowLikes(showLikes + 1);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 2000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), author: "You", text: comment },
      ]);
      setComment("");
    }
  };

  const handleReserve = () => {
    if (!isSignedIn) {
      // Redirect to sign-in page if user is not logged in
      router.push("/auth/sign-in");
    } else if (selectedDates && selectedDates.length > 0) {
      // Show confirmation dialog
      setShowConfirmationDialog(true);
    } else {
      alert("Please select your dates.");
    }
  };

  // email on reserve
  const sendEmail = async () => {
    const emailData = {
      userEmail: user?.emailAddresses[0]?.emailAddress, // User's email from clerk
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

  const confirmReservation = () => {
    sendEmail();
    setShowConfirmationDialog(false);
  };

  const handleImageClick = (image: string) => {
    setModalImage(image);
    setShowImageModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-10 lg:py-36 w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Luxurious Ocean View Suite</h1>
        <p className="text-xl text-muted-foreground mb-4 text-gray-500">
          Experience tranquility with breathtaking views
        </p>
        <div className="flex items-center">
          <Button
            variant="outline"
            onClick={handleLike}
            className="flex items-center"
          >
            <Heart className="mr-2" />
            Like ({showLikes})
          </Button>
          {showThankYou && (
            <div className="ml-4 bg-green-100 text-green-800 px-3 py-1 rounded-md">
              Thank you!
            </div>
          )}
        </div>
      </div>

      {/* slider and price section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={roomImages[currentImageIndex]}
            alt={`Room image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Luxurious Ocean View Suite
          </h2>
          <p className="text-muted-foreground mb-4 text-gray-500">
            Indulge in luxury with our spacious ocean view suite. Featuring
            modern amenities, a private balcony, and stunning panoramic views of
            the crystal-clear waters...
          </p>
          <div className="flex items-center mb-4">
            <MessageSquare className="mr-2" />
            <span>{comments.length} comments</span>
          </div>
          <p className="text-3xl font-bold pt-5 md:pt-10">$299 / night</p>
        </div>
      </div>

      {/* description and calendar section */}
      <div className="flex items-center justify-between flex-col lg:flex-row gap-5 lg:gap-36 mb-5 lg:mb-12 w-full bg-gray-200 shadow-xl p-5 rounded-md">
        <div className="lg:w-10/12 w-full flex items-start flex-col gap-1 lg:gap-10">
          <h3 className="text-2xl font-semibold mb-4 ">Room Details</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Our Luxurious Ocean View Suite offers an unparalleled experience of
            comfort and elegance. With its spacious layout and modern design,
            this suite is perfect for those seeking a memorable stay. The suite
            features a king-size bed with premium linens, a separate living
            area, and a fully equipped kitchenette. The highlight is the private
            balcony that offers breathtaking views of the ocean, perfect for
            enjoying sunsets or your morning coffee. Additional amenities
            include high-speed Wi-Fi, a large flat-screen TV, in-room safe, and
            a luxurious bathroom with a rain shower and complimentary
            toiletries.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
          <h3 className="text-2xl font-semibold mb-4">Select Dates</h3>
          <Calendar
            mode="multiple"
            selected={selectedDates}
            onSelect={setSelectedDates}
            className="rounded-md border mb-6 bg-white p-10"
          />
        </div>
      </div>

      {/* reserve button */}
      <div className="flex justify-center mb-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -2, 0, -2, 0], // Move up slightly and vibrate
            rotate: [0, -5, 5, -5, 0], // Vibrate left-right
          }}
          transition={{
            duration: 0.5, // Duration of one vibration cycle
            repeat: Infinity, // Repeat indefinitely
            repeatDelay: 2, // Delay before next animation cycle
          }}
        >
          <Button
            onClick={handleReserve}
            size="lg"
            className="text-lg px-8 py-6 bg-blue-500 hover:bg-blue-700"
          >
            Reserve Now
          </Button>
        </motion.div>
      </div>
      {/* confirmation dialog on reserve button click */}
      {showConfirmationDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Reservation</h2>
            <p>
              You are about to reserve the room for the following dates:{" "}
              {selectedDates.map((date) => date.toDateString()).join(", ")}
            </p>
            <div className="flex justify-end mt-4">
              <Button
                onClick={confirmReservation}
                className="mr-2 bg-green-500"
              >
                Confirm
              </Button>
              <Button
                onClick={() => setShowConfirmationDialog(false)}
                className="bg-red-500"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {showReservationThankYou && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-[17vw] lg:left-[45vw] transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg"
          >
            Thank you for your reservation!
          </motion.div>
        )}
      </AnimatePresence>

      {/* comments section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Give us a Review ⭐</h3>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment..."
            className="mb-4 w-full lg:w-1/2"
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
            Post Comment
          </Button>
        </form>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-muted p-4 rounded-lg">
              <p className="font-semibold">{comment.author}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* More images with modal popup */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-12">
        {roomImages.map((image, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Image
              src={image}
              alt={`Room thumbnail ${index + 1}`}
              width={500}
              height={500}
              className="cursor-pointer rounded-lg"
              onClick={() => handleImageClick(image)}
            />
          </motion.div>
        ))}
      </div>

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
                width={600}
                height={400}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
