"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaMinus, FaHeart } from "react-icons/fa6";
import { CgRedo } from "react-icons/cg";
import { Button } from "@/components/ui/button";
const RelatedProducts = dynamic(
  () => import("@/components/singleProductPage/RelatedProducts"),
);
const RecentlyViewed = dynamic(() => import("@/components/RecentlyViewed"));

const SingleProductsTaps = dynamic(
  () => import("@/components/singleProductPage/SingleProductsTaps/index"),
);
import SingleProduct from "@/components/singleProductComponent";
import dynamic from "next/dynamic";

export default function page() {
  const [value, setValue] = useState(1);

  const increase = () => setValue((prev) => prev + 1);
  const decrease = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="space-y-5">
      <div className="flex gap-5 h-auto bg-white rounded-lg p-5 flex-col lg:flex-row">
        <div className="w-full flex flex-4">
          <SingleProduct variant="single" />
        </div>
        <div className="bg-background rounded-lg p-5 flex flex-col gap-3 flex-1 h-full">
          <div className="flex flex-col">
            <span className="text-gray-600 font-medium uppercase text-sm">
              Total price:
            </span>
            <span className="text-3xl font-bold">$609.00</span>
          </div>
          <div className="flex items-center ">
            <img
              src="/images/icons/affirm.png"
              alt="affirm logo"
              className="object-cover mb-3"
            />
            <span className="text-red-500 text-sm font-bold ml-2">$49/m</span>
            <span className="text-sm ml-1">in 12 months.</span>
            <Link href="href" className="text-blue-600 underline text-sm">
              See more
            </Link>
          </div>
          <hr />
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/icons/instockicon.png"
              alt="in stock icon"
              width={12}
              height={12}
            />
            <span className="text-sm">In stock</span>
          </div>
          <div className="flex items-center border rounded-lg w-full justify-between px-3 py-2 overflow-hidden bg-white">
            <button
              aria-label="Decrease Quantity"
              onClick={decrease}
              disabled={value === 1}
              className="px-4 py-2 text-lg font-bold disabled:cursor-not-allowed cursor-pointer"
            >
              <FaMinus className="w-4 h-4 font-extrabold" />
            </button>

            <input
              type="number"
              value={value}
              min={1}
              onChange={(e) => {
                const val = Number(e.target.value);
                setValue(val < 1 ? 1 : val);
              }}
              className="w-16 text-center outline-none appearance-none font-bold"
            />

            <button
              aria-label="Increase Quantity"
              onClick={increase}
              className="px-4 py-2 text-lg font-bold cursor-pointer"
            >
              <FaPlus className="w-4 h-4 font-extrabold" />
            </button>
          </div>
          <Button className="text-white text-xs!" size="cart">
            ADD TO CART
          </Button>
          <Button
            className="text-xs! flex items-center bg-amber-400"
            size="cart"
          >
            <span className="">BUY WITH</span>
            <Image
              src="/images/icons/paypal.png"
              alt="paypal icon"
              width={60}
              height={60}
            />
          </Button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaHeart className="text-green-500 w-4 h-4" />
              <span className="text-gray-500 text-sm"> Wishlist added </span>
            </div>
            <div className="h-px w-5 rotate-90 bg-gray-300/80"></div>
            <div className="flex items-center gap-2">
              <CgRedo className="text-gray-500 w-5 h-5" />
              <span className="text-gray-500 text-sm"> Compare </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-medium">
              Guaranteed Safe Checkout
            </span>
            <div className="relative w-full h-5">
              <Image src="/images/icons/pay.png" alt="pay methods" fill />
            </div>
          </div>
        </div>
      </div>
      <SingleProductsTaps />
      <RelatedProducts />
      <RecentlyViewed title="your recently viewed" />
    </div>
  );
}
