"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cities, City } from "@/types/types";
import { useState } from "react";
import { FaPinterest } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function page() {
  const citiesData: Cities = {
    cairo: ["Nasr City", "Maadi", "Heliopolis"],
    giza: ["Dokki", "Haram", "Mohandessin"],
    sohag: ["Sohag City", "Tahta", "Akhmim"],
  };
  const [city, setCity] = useState<City | "">("");
  const [subCity, setSubCity] = useState("");

  return (
    <div className="bg-white px-8 py-5 rounded-lg">
      <h3 className="font-bold  text-2xl">
        Contact us for all your questions and opinions
      </h3>
      <form className="flex flex-col items-start gap-4 mt-5 w-full">
        <div className="flex items-center gap-3 w-full flex-col lg:flex-row">
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

        <div className="grid w-full items-center gap-1 text-sm">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <Input required type="email" id="email" className="py-5" />
        </div>

        <div className="grid w-full items-center gap-1 text-sm">
          <label htmlFor="phone" className="font-semibold">
            Phone Number <span className="text-gray-400">(optional)</span>
          </label>
          <Input type="tel" id="phone" className="py-5" />
        </div>

        <div className="grid w-full items-center gap-2 text-sm">
          <label className="font-semibold">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value as City | "")}
            className="border rounded-md p-2 border-gray-300 focus:border-primary outline-none"
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
              className="border rounded-md p-2 border-gray-300 focus:border-primary outline-none"
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
          <label className="font-semibold">Message</label>
          <textarea
            rows={5}
            className="border rounded-md p-2 border-gray-300 focus:border-primary outline-none w-full"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-primary" />
          <div className="text-sm font-medium">
            I want to receive news and updates once in a while. By submitting,
            I’m agreed to the{" "}
            <span className="text-primary underline">Terms & Conditions</span>
          </div>
        </label>

        <Button
          aria-label="Send Message"
          className="uppercase h-fit w-fit mt-5 text-sm px-7 py-3 text-white"
        >
          send message
        </Button>
      </form>
      <div className="bg-background px-7 py-5 flex flex-col gap-2 mt-8 rounded-xl">
        <span className="text-gray-500 text-sm font-semibold">
          united states (head quater)
        </span>
        <span className="mt-3">152 Thatcher Road St, Mahattan, 10463, US</span>
        <span>(+025) 3886 25 16</span>
        <span className="text-primary underline">hello@swattechmart.com</span>
        <div className="flex items-center gap-3 mt-8">
          <div className="rounded-full bg-white p-2.5 cursor-pointer group hover:bg-primary transition-colors duration-300">
            <FaTwitter className="group-hover:text-white" />
          </div>
          <div className="rounded-full bg-white p-2.5 cursor-pointer group hover:bg-primary transition-colors duration-300">
            <FaFacebookF className="group-hover:text-white" />
          </div>
          <div className="rounded-full bg-white p-2.5 cursor-pointer group hover:bg-primary transition-colors duration-300">
            <FaInstagram className="group-hover:text-white" />
          </div>
          <div className="rounded-full bg-white p-2.5 cursor-pointer group hover:bg-primary transition-colors duration-300">
            <TiSocialYoutube className="group-hover:text-white" />
          </div>
          <div className="rounded-full bg-white p-2.5 cursor-pointer group hover:bg-primary transition-colors duration-300">
            <FaPinterest className="group-hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
