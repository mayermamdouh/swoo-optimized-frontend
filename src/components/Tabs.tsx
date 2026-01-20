"use client";
import { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import { bestSellers } from "@/app/data/products/bestSellers";
import { popular } from "@/app/data/products/popular";
import { newIn } from "@/app/data/products/newIn";

export default function Tabs() {
  const [currentView, setCurrentView] = useState<
    "bestSellers" | "newIn" | "popular"
  >("bestSellers");

  const products =
    currentView === "bestSellers"
      ? bestSellers
      : currentView === "newIn"
        ? newIn
        : popular;

  return (
    <section className="flex flex-col w-full bg-white rounded-lg px-2 py-4">
      <div className="flex items-center mb-4">
        <ul className="flex items-center gap-5 text-gray-600 font-bold text-sm lg:text-xl p-3">
          <li
            onClick={() => setCurrentView("bestSellers")}
            className={`cursor-pointer ${
              currentView === "bestSellers" && "text-primary"
            }`}
          >
            BEST SELLER
          </li>

          <li
            onClick={() => setCurrentView("newIn")}
            className={`cursor-pointer ${
              currentView === "newIn" && "text-primary"
            }`}
          >
            NEW IN
          </li>

          <li
            onClick={() => setCurrentView("popular")}
            className={`cursor-pointer ${
              currentView === "popular" && "text-primary"
            }`}
          >
            POPULAR
          </li>
        </ul>
      </div>
      <ProductCarousel products={products} />
    </section>
  );
}
