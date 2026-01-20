"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cities, City } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const citiesData: Cities = {
    cairo: ["Nasr City", "Maadi", "Heliopolis"],
    giza: ["Dokki", "Haram", "Mohandessin"],
    sohag: ["Sohag City", "Tahta", "Akhmim"],
  };

  const [city, setCity] = useState<City | "">("");
  const [subCity, setSubCity] = useState("");
  const [street, setStreet] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="bg-white px-8 py-5 rounded-lg">
      <h3 className="uppercase text-lg font-bold mb-5">Checkout</h3>
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <div className="flex-2 flex flex-col gap-5 w-full ">
          <h4 className="text-md font-bold">Billing Detail</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 w-full">
              <div className="grid w-full items-center gap-1 text-sm">
                <label htmlFor="firstname" className="font-semibold">
                  First Name
                </label>
                <Input required id="firstname" className="py-5" />
              </div>

              <div className="grid w-full items-center gap-1 text-sm">
                <label htmlFor="lastname" className="font-semibold">
                  Last Name
                </label>
                <Input required id="lastname" className="py-5" />
              </div>
            </div>
            <div className="grid w-full items-center gap-2 text-sm">
              <label className="font-semibold">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value as City | "")}
                className="border rounded-md px-2 py-3 border-gray-300 focus:border-primary outline-none"
                required
              >
                <option value="">Select city</option>
                {Object.keys(citiesData).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {city && (
              <div className="grid w-full items-center gap-2 text-sm">
                <label className="font-semibold">Sub-city</label>
                <select
                  value={subCity}
                  onChange={(e) => setSubCity(e.target.value)}
                  className="border rounded-m px-2 py-3 border-gray-300 focus:border-primary outline-none"
                  required
                >
                  <option value="">Select sub-city</option>
                  {citiesData[city].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid w-full items-center gap-2 text-sm">
              <label className="font-semibold">Street Address</label>
              <Input
                required
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Enter your street"
                className="border rounded-lg px-2 py-5"
              />
            </div>

            <div className="grid w-full items-center gap-1 text-sm">
              <label htmlFor="phone" className="font-semibold">
                Phone Number
              </label>
              <Input type="tel" id="phone" className="py-5" />
            </div>
            <div className="grid w-full items-center gap-1 text-sm">
              <label htmlFor="email" className="font-semibold">
                Email Address
              </label>
              <Input required type="email" id="email" className="py-5" />
            </div>

            <span className="text-md font-bold mt-10">
              Additional Information
            </span>
            <div className="grid w-full items-center gap-2 text-sm mt-8">
              <label className="font-semibold text-md">
                Order Notes <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                rows={5}
                className="border rounded-md p-2 border-gray-300 focus:border-primary outline-none w-full"
                placeholder="Note about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="bg-[#e1e3eb] flex-1 w-full flex flex-col sticky top-5 rounded-lg overflow-hidden">
          <div className="bg-[#edeff5] px-4 py-6 flex flex-col gap-1 rounded-b-lg">
            <h3 className="font-bold mb-6">Your Order</h3>
            <div className="text-sm uppercase  flex items-center justify-between text-gray-600">
              <span>Product</span>
              <span>sub total</span>
            </div>
            <hr className="border-t border-gray-300 my-4 w-full" />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-7">
                <div className="flex-1 relative w-10 h-16 flex items-center justify-center overflow-hidden">
                  <Image
                    alt="product image"
                    src="/images/laptop.png"
                    fill
                    className="object-contain p-2 bg-white"
                  />
                </div>
                <div className="flex-5 flex flex-col text-sm font-medium">
                  <span>Pinnaeple Macbook Pro 2022</span>
                  <span>M1/ 512GB</span>
                  <span className="text-gray-500">x3</span>
                </div>
              </div>
              <div className="text-sm flex items-center justify-between ">
                <span className="text-black">
                  Countrywide Standard Shipping Free
                </span>
                <span className="text-red-500">+ $30.50</span>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4 w-full" />
            <div className="flex items-center justify-between">
              <span className="text-black ">Order Total</span>
              <span className="font-bold text-primary">$1,746.50</span>
            </div>
          </div>
          <div className=" px-4 py-6 ">
            <div className="flex flex-col gap-4 text-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  value="basic"
                  checked={value === "basic"}
                  onChange={(e) => setValue(e.target.value)}
                  className="accent-primary scale-125 mt-1 shrink-0"
                />

                <div className="flex flex-col gap-2">
                  <span className="font-bold">Direct Bank Transfer</span>
                  <span className="text-gray-600">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer font-bold">
                <input
                  type="checkbox"
                  value="standard"
                  checked={value === "standard"}
                  onChange={(e) => setValue(e.target.value)}
                  className="accent-primary scale-125 shrink-0"
                />
                Cash on Delivery
              </label>
            </div>

            <div className="flex items-center justify-center">
              <Button
                aria-label="Place Order"
                className="uppercase mt-5 text-sm w-full py-5.5 text-white"
              >
                place order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
