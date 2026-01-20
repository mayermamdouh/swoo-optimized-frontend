import dynamic from "next/dynamic";
import Image from "next/image";
const ImageSlider = dynamic(() => import("./ImageSlider"));
const Categories = dynamic(() => import("./Categories"));
import { Button } from "./ui/button";

export default function Promotions() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 ">
      <div className="flex-1">
        <Categories />
      </div>

      <div className="flex-2 flex flex-col gap-2">
        <div>
          <ImageSlider />
        </div>

        <div className="flex flex-1 gap-2 items-stretch">
          <div className="flex-1">
            <div className="relative h-40 lg:h-full bg-white rounded-lg p-2 overflow-hidden">
              <Image
                src="/images/products/playstation.png"
                alt="Sono Playgo 5 product"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute top-5 left-5 z-10 text-black text-sm w-40 font-semibold">
                <div>
                  Sono Playgo 5 <br />
                  from <span className="text-primary">$569</span>
                </div>
                <div className="underline uppercase mt-14 cursor-pointer">
                  Discover now
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-40 lg:h-full bg-white rounded-lg p-2 overflow-hidden">
              <Image
                src="/images/products/keyboard.png"
                alt="product image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-5 left-5 z-10 text-sm w-1/2 ">
                <div className="text-white font-bold">Logitek Bluetooth </div>
                <span className="text-yellow-400 font-bold">Keyboard</span>
                <div className="text-white mt-10">Best for all device</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="relative bg-white rounded-lg p-2 h-52 overflow-hidden">
          <Image
            src="/images/hero/slider6.png"
            alt="product image"
            fill
            className="object-cover"
            priority
          />
          <div className="text-black absolute top-5 right-1 z-10 text-xl w-40">
            <div className="text-xs uppercase mb-2">xomia</div>
            <div className="text-md font-bold">
              Sport Water Resistance Watch
            </div>
            <Button className="mt-5">Buy Now</Button>
          </div>
        </div>

        <div className="relative bg-white rounded-lg p-2 h-52 overflow-hidden">
          <Image
            src="/images/hero/slider7.png"
            alt="product image"
            fill
            className="object-cover"
            priority
          />
          <div className="flex flex-col absolute top-7 left-7 z-10 text-primary text-xl w-1/3">
            <div className="text-white text-md font-bold uppercase">
              OKODo hero 11+ black
            </div>
            <div className="flex flex-col mt-10">
              <div className="uppercase text-gray-400 text-xs">from</div>
              <span className="text-primary text-md">$169</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
