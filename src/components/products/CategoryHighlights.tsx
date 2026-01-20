import Image from "next/image";
import { Button } from "../ui/button";
import Carousel from "../ImageSlider";

export default function CategoryHighlights() {
  return (
    <div className="flex flex-col bg-white p-5 rounded-lg gap-5">
      <h3 className="font-bold uppercase text-xl">top cell phones & tablets</h3>
      <div className="flex items-center gap-2 flex-col lg:flex-row">
        <div className="w-full lg:flex-2">
          <Carousel />
        </div>
        <div className="w-full lg:flex-1">
          <div className="relative bg-white rounded-lg p-2 h-80 overflow-hidden">
            <Image
              src="/images/products/products1.png"
              alt="product image"
              fill
              className="object-cover"
            />
            <div className="text-black absolute top-10  z-10 text-xl flex items-start justify-evenly w-full">
              <div className="flex flex-col gap-2">
                <div className="text-md font-bold">
                  redmi note 12 <br /> Pro+ 5g
                </div>
                <span className="text-sm text-gray-600">
                  Rise to the challenge
                </span>
              </div>
              <Button aria-label="Shop Now" className="mt-5 uppercase">
                shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
