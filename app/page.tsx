import React from "react";
import Hero from "./components/Hero";
import BestOffer from "./components/BestOffer";
import Categories from "./components/Categories";
import Allrooms from "./components/Allrooms";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div className="">
      <div>
        <Hero />
        <div className="">
          <BestOffer />
          <Categories />
          <Allrooms />
          <About />
          <Gallery />
          <Newsletter />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default page;
