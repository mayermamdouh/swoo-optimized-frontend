"use client";
import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";

const images = [
  {
    image: "/images/hero/slider1.png",
    description: "aPodOs work wounders with easy",
  },
  { image: "/images/hero/slider2.png", description: "PC GAMING CASES " },
];

export default function Carousel() {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative w-full mx-auto h-80 overflow-hidden rounded-lg">
      {images.map((item, index) => (
        <div
          key={index}
          className={` w-full h-full transition-opacity duration-500 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.image}
            alt={`slide-${index}`}
            fill
            className="object-cover"
            priority={index === current}
          />
          <div className="absolute top-20 left-10 z-10 text-primary text-xl w-40">
            {item.description}
            <Button className="mt-10">Buydsadasda</Button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-3 right-5 px-3 py-1 bg-white rounded-3xl flex items-center justify-center gap-2 z-10">
        <button
          onClick={prevSlide}
          className=" text-gray-500   rounded-full cursor-pointer"
          aria-label="Previous Slide"
        >
          <MdKeyboardArrowLeft className="h-5 w-5" />
        </button>

        <div className="text-secondary text-sm font-bold   ">
          {current + 1} / {images.length}
        </div>

        <button
          onClick={nextSlide}
          className=" text-gray-500  rounded-full cursor-pointer"
          aria-label="Next Slide"
        >
          <MdKeyboardArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
