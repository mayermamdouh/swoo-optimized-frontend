import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Products } from "@/app/data/products/products";

type RecentlyViewedProps = {
  title?: string;
};

export default function RecentlyViewed({
  title = "brand new for you",
}: RecentlyViewedProps) {
  return (
    <div className="flex flex-col gap-8 bg-white rounded-lg p-6 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 lg:gap-10">
          <h2 className="text-sm lg:text-xl font-bold uppercase">{title}</h2>
          <div className="flex items-center ml-auto">
            <span className="text-sm cursor-pointer">View All</span>
            <MdKeyboardArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
      <Carousel className="w-full relative">
        <CarouselContent className="flex items-center">
          {Products.map((itme, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="relative flex-1  cursor-pointer flex items-center w-full  border border-transparent hover:border-gray-300 p-2 rounded-lg ">
                <div className="absolute top-1 left-2 font-semibold bg-primary py-1 px-2 text-[10px] text-white rounded-lg flex flex-col items-start z-10">
                  <span>SAVE</span>
                  <span>${itme.valueSaved}</span>
                </div>
                <div className="flex-1 w-full h-28 relative">
                  <Image
                    src={itme.image}
                    alt="product image"
                    fill
                    className="object-contain mx-auto"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`cursor-pointer text-xs ${"text-yellow-400"}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-1 text-xs">(12)</span>
                  </div>
                  <h3 className="font-bold text-sm hover:text-primary cursor-pointer">
                    {itme.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="font-bold text-red-600 text-lg">
                      ${itme.currentPrice}
                    </div>
                    <div className="font-bold text-gray-600 line-through text-md">
                      ${itme.oldPrice}
                    </div>
                  </div>
                </div>
                <div className="absolute top-1 right-2 p-2 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center">
                  <FaHeart className="text-gray-400  h-3.5 w-3.5  " />
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
