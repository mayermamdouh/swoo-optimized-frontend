import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Product } from "@/types/types";

export default function ProductCard({
  valueSaved,
  image,
  name,
  currentPrice,
  oldPrice,
  shipping,
  stock,
}: Product) {
  return (
    <div className="group cursor-pointer flex flex-col gap-2 my-5 border border-transparent hover:border-gray-300 p-3 rounded-lg ">
      <div className="flex items-center justify-between">
        <div className="font-bold bg-primary py-1 px-2 text-xs text-white rounded-lg flex flex-col items-start">
          <span>SAVE</span>
          <span className="mt-1">${valueSaved}</span>
        </div>
        <div className="p-2 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center">
          <FaHeart className="text-gray-400  h-3.5 w-3.5  " />
        </div>
      </div>
      <div className="w-full h-40 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain mx-auto"
          loading="lazy"
        />
      </div>
      <hr className="border-t border-gray-100 my-4 w-full" />
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-sm ${"text-yellow-400"}`}
          >
            ★
          </span>
        ))}
        <span className="ml-1 text-xs">(12)</span>
      </div>
      <h3 className="font-bold text-sm hover:text-primary cursor-pointer">
        {name}
      </h3>
      <div className="flex items-center gap-2">
        <div className="font-bold text-red-600 text-xl">${currentPrice}</div>
        <div className="font-bold text-gray-600 line-through">${oldPrice}</div>
      </div>

      {Number(shipping) === 0 ? (
        <div className="self-start text-primary text-xs bg-primary/10 px-3 py-1 rounded-sm mt-4">
          FREE SHIPPING
        </div>
      ) : (
        <div className="self-start  text-xs bg-gray-300/40 px-3 py-1 rounded-sm mt-4">
          ${Number(shipping)} SHIPPING
        </div>
      )}
      {stock ? (
        <div className="flex items-center gap-1.5">
          <Image
            src="/images/icons/instockicon.png"
            alt="in stock icon"
            width={12}
            height={12}
          />
          <span className="text-sm">In stock</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <Image
            src="/images/icons/outstockicon.png"
            alt="in stock icon"
            width={12}
            height={12}
          />
          <span className="text-sm">Out of stock</span>
        </div>
      )}

      <Button
        aria-label="ADD TO CART"
        className="cursor-pointer py-5 shadow-xl text-sm opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:text-white"
      >
        ADD TO CART
      </Button>
    </div>
  );
}
