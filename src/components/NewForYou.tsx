import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { brands } from "@/app/data/brands/brands";

export default function NewForYou() {
  return (
    <div className="flex flex-col gap-8 bg-white rounded-lg px-6 py-10 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold uppercase">brand new for you</h2>
      </div>
      <Carousel className="w-full relative">
        <CarouselContent className="flex items-start">
          {brands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-full h-56 relative">
                  <Image
                    src={brand.image}
                    alt="product image"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>

                <div className="w-full text-center space-y-1">
                  <div className="font-bold text-md">{brand.name}</div>
                  <div className="text-gray-500 text-md">
                    {brand.description}
                  </div>
                  <Button aria-label="SHOP NOW" variant="outline">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-12 -translate-y-1/2 right-0 bg-background rounded-2xl h-7 flex items-center justify-between">
          <CarouselPrevious className="cursor-pointer border-none ">
            <MdKeyboardArrowLeft />
          </CarouselPrevious>
          <CarouselNext className="cursor-pointer border-none">
            <MdKeyboardArrowRight />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
