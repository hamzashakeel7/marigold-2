import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#EEEEEE] pt-5 pb-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-blue-600 text-lg font-medium mb-2">
            Discover Our Story
          </h3>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Who are we ??
          </h2>
          <p className="text-gray-600 text-sm mx-auto">
            Nestled in the heart of Karachi, Marigold Accommodations offers a
            luxurious retreat where comfort meets style. Whether you’re here for
            business, leisure, or a special occasion, we provide an exceptional
            experience tailored to your needs. Our modern amenities, exceptional
            service, and prime location make us the ideal choice for travelers
            seeking a memorable stay. Experience Comfort Like Never Before Our
            thoughtfully designed rooms and suites are crafted to provide a
            peaceful haven with everything you need for a restful stay. Enjoy
            stunning views, plush bedding, and state-of-the-art technology, all
            aimed at ensuring your utmost comfort and convenience. Unparalleled
            Service At Marigold Accommodations, we pride ourselves on offering
            personalized, attentive service to make you feel right at home. From
            our concierge team, ready to assist with bookings and
            recommendations, to our housekeeping staff, dedicated to keeping
            your space pristine, every detail is handled with care. Explore
            Karachi Whether you&apos;re here to explore the local culture,
            attend a business event, or relax and unwind, Marigold
            Accommodations places you close to everything. Discover iconic
            landmarks, enjoy vibrant shopping districts, and indulge in
            world-class dining just minutes away from your doorstep. Dining &
            Relaxation Savor delicious meals at our on-site restaurant, offering
            a curated menu with fresh, local ingredients. After a day of
            sightseeing or meetings, unwind with a drink at our cozy lounge or
            take a dip in our pool for the ultimate relaxation experience. Plan
            Your Event With our elegant meeting rooms and versatile event
            spaces, Marigold Accommodations is the perfect venue for
            conferences, weddings, and celebrations. Let us help you create
            unforgettable moments with customized packages and attentive event
            planning services. Book Your Stay Today Ready to experience luxury,
            comfort, and exceptional service? Browse our rooms, view special
            offers, and book your stay at Marigold Accommodations today. We look
            forward to welcoming you soon!
          </p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/iABaGWS5FH8"
                title="Marigold CEO"
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
