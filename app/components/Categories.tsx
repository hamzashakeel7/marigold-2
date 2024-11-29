import React from "react";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Rooms",
    imageUrl: "/category1.jpg",
    link: "/all",
    large: true,
  },
  { title: "Dining", imageUrl: "/category2.jpg", link: "/dining" },
  {
    title: "Roof sitting",
    imageUrl: "/category4.jpg",
    link: "/roof",
  },
  {
    title: "Gym",
    imageUrl: "/category3.jpg",
    link: "/service",
  },
  {
    title: "Basement Cafe",
    imageUrl: "/category5.jpg",
    link: "/cafe",
  },
];

const Categories = () => {
  return (
    <div className="px-5 lg:px-80 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-5 h-auto md:h-[40rem] w-full lg:w-[80rem]">
        {/* Large Card on the Left */}
        <Link
          href={sections[0].link}
          className="col-span-2 md:col-span-1 md:row-span-2 group"
        >
          <div className="relative h-48 md:h-full w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <Image
              src={sections[0].imageUrl}
              alt={sections[0].title}
              style={{
                objectFit: "cover",
              }}
              width={800}
              height={800}
              className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-lg md:text-xl font-semibold">
                {sections[0].title}
              </p>
            </div>
          </div>
        </Link>

        {/* Small Cards */}
        {sections.slice(1).map((section, index) => (
          <Link
            href={section.link}
            key={index}
            className="col-span-1 row-span-1 group"
          >
            <div className="relative h-48 lg:h-80 w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={section.imageUrl}
                alt={section.title}
                style={{
                  objectFit: "cover",
                }}
                width={500}
                height={500}
                className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-semibold">
                  {section.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
