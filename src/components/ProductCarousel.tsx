import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Product } from "@/types/types";

type ProductCarouselProps = {
  products: Product[];
  size?: "small" | "large";
};

export default function ProductCarousel({
  products,
  size,
}: ProductCarouselProps) {
  return (
    <Carousel className="w-full relative ">
      <CarouselContent className="flex ">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className={`basis-full ${size === "small" ? "md:basis-1/2 lg:basis-1/3 xl:basis-1/4" : "md:basis-1/2 lg:basis-1/3 xl:basis-1/5"} `}
          >
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="h-16 w-10 absolute left-2 top-1/2 -translate-y-1/2 hover:bg-primary hover:text-white cursor-pointer bg-gray-200 p-2 rounded-lg shadow-lg z-10">
        <MdKeyboardArrowLeft />
      </CarouselPrevious>
      <CarouselNext className="h-16 w-10 absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-200 rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:text-white">
        <MdKeyboardArrowRight />
      </CarouselNext>
    </Carousel>
  );
}
