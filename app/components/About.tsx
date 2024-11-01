import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const About = () => {
  return (
    <BackgroundBeamsWithCollision className="">
      <div className="px-5 lg:px-48 mt-10 lg:mt-32">
        <div className="flex items-center text-center justify-center flex-col gap-3 w-full">
          <p className="text-lg md:text-xl text-blue-500 tracking-wider font-serif">
            About Us
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black ">
            Who Are We ?
          </h1>
          <p className="w-full lg:w-2/3 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            consectetur facere minus enim quidem numquam corrupti itaque neque.
            Voluptas sed error eos quaerat fuga dolores beatae non aliquid
            distinctio. Quod?
          </p>

          {/* video */}
          <div className="border-2 border-red-500 mt-5 w-[20rem] h-[10rem] lg:w-[40rem] lg:h-[20rem]">
            <div></div>
          </div>

          <p className="w-full lg:w-2/3 mt-2 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            numquam esse tenetur deleniti. Dolorem culpa in saepe porro fugit
            harum officiis vitae inventore nobis magni, non autem soluta unde
            similique optio eveniet error, consequatur quis dolor et? Iusto
            veritatis voluptates quis et error laudantium tempore dolorum, neque
            architecto porro perspiciatis, fugiat nostrum voluptatibus cum,
            nobis minus autem sed adipisci cumque quo delectus! Libero nemo
            fugiat, veritatis enim nobis harum odit?
          </p>

          <Link href="/about">
            <Button variant={"link"}>View More</Button>
          </Link>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default About;
