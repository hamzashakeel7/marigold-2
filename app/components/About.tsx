import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#EEEEEE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-blue-600 text-lg font-medium mb-2">
            Discover Our Story
          </h3>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Who are we ??
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At RoomEase, we&apos;re passionate about making your stay
            unforgettable. With our curated selection of rooms and seamless
            booking process, we ensure that your journey begins with comfort and
            convenience...
          </p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="About RoomEase Bookings"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {["Easy Booking", "Quality Assurance", "24/7 Support"].map(
            (feature, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    {index === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    Experience the best in room booking with our{" "}
                    {feature.toLowerCase()} feature.
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <Link
          href="/about"
          className="text-center flex justify-center items-center"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            View More
          </Button>
        </Link>
      </div>
    </section>
  );
}
