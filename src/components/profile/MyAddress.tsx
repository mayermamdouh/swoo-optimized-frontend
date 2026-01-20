import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Cities, City } from "@/types/types";

export default function AddressForm() {
  const citiesData: Cities = {
    cairo: ["Nasr City", "Maadi", "Heliopolis"],
    giza: ["Dokki", "Haram", "Mohandessin"],
    sohag: ["Sohag City", "Tahta", "Akhmim"],
  };

  const [city, setCity] = useState<City | "">("");
  const [subCity, setSubCity] = useState("");
  const [street, setStreet] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city || !subCity || !street) {
      alert("Please fill all fields!");
      return;
    }
    const data = {
      country: "Egypt",
      city,
      subCity,
      street,
    };
    console.log("Address data:", data);
  };

  return (
    <div className="w-full ">
      <h3 className="font-bold text-2xl mb-5">My Address</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="grid w-full items-center gap-2 text-sm">
          <label className="font-semibold">Country</label>
          <select
            disabled
            className="border rounded-md py-2.5 px-2 pr-8 bg-gray-100"
          >
            <option value="egypt">Egypt</option>
          </select>
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
          <label className="font-semibold">Street Address</label>
          <Input
            required
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Enter your street"
            className="border rounded p-2"
          />
        </div>

        <Button
          aria-label="Save Address"
          className="uppercase h-10 w-28 mt-5 text-white"
        >
          save
        </Button>
      </form>
    </div>
  );
}
