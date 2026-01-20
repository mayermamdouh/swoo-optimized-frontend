import Image from "next/image";

import SocialIcons from "../SocialIcons";
import { Progress } from "../ui/progress";

type ProductContentProps = {
  variant?: "home" | "single";
  rating: number;
  setRating: (v: number) => void;
  productColors: any[];
  storages: string[];
  selectedColor: string | null;
  setSelectedColor: (c: string) => void;
  selectedStorage: string | null;
  setSelectedStorage: (s: string) => void;
};

export default function ProductContent({
  variant,
  rating,
  setRating,
  productColors,
  storages,
  selectedColor,
  setSelectedColor,
  selectedStorage,
  setSelectedStorage,
}: ProductContentProps) {
  const handleChangeColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleChangeStorage = (storage: string) => {
    setSelectedStorage(storage);
  };
  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-sm ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-1 text-xs">(12)</span>
      </div>

      <h3 className="font-bold">
        Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
      </h3>

      <div className="flex items-center gap-2">
        <div className="font-bold text-red-600 text-2xl">$450</div>
        <div className="font-bold text-gray-600 line-through">$759.00</div>
      </div>

      <ul className="text-xs space-y-2 list-disc pl-3 font-medium">
        <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
        <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
        <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
      </ul>

      <div className="flex items-center gap-3 mt-2">
        <div className="text-primary text-sm bg-primary/10 px-3 py-1 rounded-sm">
          FREE SHAIPPING
        </div>
        <div className="text-red-500 text-sm bg-red-300/10 px-3 py-1 rounded-sm">
          FREE GIFT
        </div>
      </div>

      {variant === "single" ? (
        <div className="flex flex-col gap-4 w-full mt-3 ">
          <hr />
          <div className="text-sm">
            <span className="uppercase font-bold">Color</span>
            <span className="text-gray-600 font-medium">: Midnight Blue</span>
          </div>
          <div className="flex items-center lg:justify-between gap-2 flex-wrap">
            {productColors.map((color) => (
              <div
                key={color.name}
                onClick={() => handleChangeColor(color.name)}
                className={`w-fit lg:flex-1 px-3 py-1.5 border rounded-lg flex items-center cursor-pointer
                          ${selectedColor === color.name ? "border-primary" : "border-gray-300"}`}
              >
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={color.img}
                    alt={color.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col flex-1 text-xs ml-2">
                  <span className="font-extrabold">{color.name}</span>
                  <span className="font-bold">{color.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm">
            <span className="uppercase font-extrabold">memory size: </span>
            <span className="text-gray-600 font-medium">128GB</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {storages.map((storage) => (
              <div
                key={storage}
                onClick={() => handleChangeStorage(storage)}
                className={`w-fit py-2 px-3 border rounded-lg text-center cursor-pointer transition-all 
                  duration-200 ${selectedStorage === storage ? "border-primary" : "border-gray-300"}`}
              >
                <div className="flex flex-col text-xs ">
                  <span className="font-bold">{storage}</span>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="text-sm">
            <span className="uppercase font-extrabold">SKU: </span>
            <span className="text-gray-600 font-medium">ABC025168</span>
          </div>
          <div className="text-sm">
            <span className="uppercase font-extrabold">Category: </span>
            <span className="text-gray-600 font-medium">
              Cell Phones & Tablets
            </span>
          </div>
          <div className="text-sm">
            <span className="uppercase font-extrabold">Brand: </span>
            <span className="text-primary font-medium">sumsong</span>
          </div>
          <SocialIcons />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex-1 uppercase text-xs font-semibold">
              hurry up! Promotion will expires in
            </span>
            <div className="flex-2 flex items-center gap-3">
              <div className=" flex flex-col justify-center items-center bg-gray-200 py-2 px-4 rounded-lg gap-2">
                <div className="font-bold">20</div>
                <div className="text-gray-600 font-semibold">d</div>
              </div>
              <div className="flex flex-col justify-center items-center bg-gray-200 py-2 px-4 rounded-lg gap-2">
                <div className="font-bold">13</div>
                <div className="text-gray-600 font-semibold">h</div>
              </div>
              <div className="flex flex-col justify-center items-center bg-gray-200 py-2 px-4 rounded-lg gap-2">
                <div className="font-bold">10</div>
                <div className="text-gray-600 font-semibold ">m</div>
              </div>
              <div className="flex flex-col justify-center items-center bg-gray-200 py-2 px-4 rounded-lg gap-2">
                <div className="font-bold">40</div>
                <div className="text-gray-600 font-semibold ">s</div>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-4 w-full" />
          <Progress value={33} />
          <div className="text-sm space-x-1">
            <span className="text-gray-600">Sold:</span>
            <span className="font-bold">26/75</span>
          </div>
        </>
      )}
    </div>
  );
}
