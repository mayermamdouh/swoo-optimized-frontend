"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Products } from "../data/products/products";

export default function page() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white w-full p-5 rounded-lg">
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <div className="flex-2 flex flex-col gap-5 w-full">
          {Products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 flex flex-col lg:flex-row items-center rounded-lg gap-5 lg:gap-10 border border-transparent hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex w-full lg:hidden items-center justify-between gap-2">
                <div className="font-bold bg-primary py-1 px-2 text-xs text-white rounded-lg flex flex-col items-start">
                  <span>SAVE</span>
                  <span className="mt-1">${product.valueSaved}</span>
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <div className="w-fit p-2.5 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center">
                    <FaHeart className="text-gray-400  h-4 w-4  " />
                  </div>
                  <div className="w-fit p-2.5 rounded-full bg-red-400/10 group hover:bg-red-500 cursor-pointer flex items-center justify-center">
                    <FaRegTrashCan className="text-red-500 group-hover:text-white h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-56 h-64 lg:h-56 flex items-center justify-center overflow-hidden">
                <Image
                  alt="product image"
                  src={product.image}
                  fill
                  className="object-contain p-10 bg-white rounded-lg"
                />
                <div className="absolute top-0 left-0 z-10 font-bold bg-primary py-1 px-2 text-xs text-white rounded-lg hidden lg:flex  flex-col items-start">
                  <span>SAVE</span>
                  <span className="mt-1">${product.valueSaved}</span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="hidden lg:flex items-center justify-end gap-2">
                  <div className="w-fit p-2.5 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center">
                    <FaHeart className="text-gray-400  h-4 w-4  " />
                  </div>
                  <div className="w-fit p-2.5 rounded-full bg-red-400/10 group hover:bg-red-500 cursor-pointer flex items-center justify-center">
                    <FaRegTrashCan className="text-red-500 group-hover:text-white h-4 w-4" />
                  </div>
                </div>
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
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <div className="font-bold text-red-600 text-lg">
                    ${product.currentPrice}
                  </div>
                  <div className="font-bold text-gray-600 line-through text-md">
                    ${product.oldPrice}
                  </div>
                </div>
                <div className="p-2 border border-gray-300 flex items-center w-fit rounded-md gap-7 mt-4">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="text-sm cursor-pointer  "
                  >
                    <AiOutlineMinus size={17} />
                  </button>

                  <span className="text-sm font-bold">{count}</span>

                  <button
                    onClick={() => setCount(count + 1)}
                    className="text-sm cursor-pointer "
                  >
                    <AiOutlinePlus size={17} />
                  </button>
                </div>
                <div className="self-start text-primary text-xs bg-primary/10 px-3 py-1 rounded-sm mt-4 w-fit">
                  FREE SHIPPING
                </div>
                <div className="flex items-center gap-1.5 mt-2 mb-5">
                  <Image
                    src="/images/icons/instockicon.png"
                    alt="in stock icon"
                    width={12}
                    height={12}
                  />
                  <span className="text-sm">In stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 w-full flex flex-col px-3 py-5 border border-primary rounded-lg sticky top-5">
          <h3 className="font-bold mb-6">Order Summary</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Sub Total:</span>
            <span className="font-bold">$1,270.00</span>
          </div>
          <hr className="border-t border-gray-300 my-4 w-full" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Shpping estimate:</span>
            <span className="font-bold">$600.00</span>
          </div>
          <hr className="border-t border-gray-300 my-4 w-full" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Tax estimate:</span>
            <span className="font-bold">$137.00</span>
          </div>
          <hr className="border-t border-gray-300 my-4 w-full" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-black font-bold uppercase">
              Order total:
            </span>
            <span className="font-bold">$137.00</span>
          </div>
          <div className="flex items-center justify-center">
            <Button className="uppercase h-10 w-32 mt-5 text-white">
              checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
