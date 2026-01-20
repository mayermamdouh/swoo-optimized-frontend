"use client";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { LiaSyncAltSolid } from "react-icons/lia";
import FilterByBrands from "./filters/FilterByBrands";
import PriceRange from "./PriceRange";
import FilterByRating from "./filters/FilterByRating";
import FilterByColor from "./filters/FilterByColor";
import FilterByMemory from "./filters/FilterByMemory";
import { useState } from "react";

type RatingItem = {
  star: number;
  number: number;
};

type MemoryItem = {
  gb: number;
  number: number;
};
type ProductFiltersProps = {
  Brands: string[];
  Rating: RatingItem[];
  Memory: MemoryItem[];
};

export default function ProductFilters({
  Brands,
  Rating,
  Memory,
}: ProductFiltersProps) {
  const [isShowingBrands, setIsShowingBrands] = useState(true);
  const [isShowingByPrice, setIsShowingByPrice] = useState(true);
  const [isShowingByRating, setIsShowingByRating] = useState(true);
  const [isShowingByColor, setIsShowingByColor] = useState(true);
  const [isShowingByMemory, setIsShowingByMemory] = useState(true);
  return (
    <div className="space-y-4 bg-background p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-bold uppercase text-lg">categories</h3>
        <div className="flex items-center ml-2">
          <button
            aria-label="Reset All"
            className=" text-sm flex items-center gap-2 text-black hover:text-primary  cursor-pointer transition-all duration-200"
          >
            <LiaSyncAltSolid className="text-sm" />
            <span className="font-bold ">Reset All</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsShowingBrands(!isShowingBrands)}
        >
          <h3 className="font-bold  text-lg">By Brands</h3>
          {isShowingBrands ? (
            <MdKeyboardArrowUp className="text-gray-500" size={20} />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" size={20} />
          )}
        </div>
        <FilterByBrands Brands={Brands} isShowingBrands={isShowingBrands} />
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsShowingByPrice(!isShowingByPrice)}
        >
          <h3 className="font-bold  text-lg">By Price</h3>
          {isShowingByPrice ? (
            <MdKeyboardArrowUp className="text-gray-500" size={20} />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-[height] duration-300 ease-in-out ${isShowingByPrice ? "h-24" : "h-0"}`}
        >
          <PriceRange />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsShowingByRating(!isShowingByRating)}
        >
          <h3 className="font-bold  text-lg">By Rateing</h3>
          {isShowingByRating ? (
            <MdKeyboardArrowUp className="text-gray-500" size={20} />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-[height] duration-300 ease-in-out ${isShowingByRating ? "h-36" : "h-0"}`}
        >
          <FilterByRating Rating={Rating} />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsShowingByColor(!isShowingByColor)}
        >
          <h3 className="font-bold  text-lg">By Rateing</h3>
          {isShowingByColor ? (
            <MdKeyboardArrowUp className="text-gray-500" size={20} />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-[height] duration-300 ease-in-out ${isShowingByColor ? "h-24" : "h-0"}`}
        >
          <FilterByColor />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsShowingByMemory(!isShowingByMemory)}
        >
          <h3 className="font-bold  text-lg">By Memory</h3>
          {isShowingByMemory ? (
            <MdKeyboardArrowUp className="text-gray-500" size={20} />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" size={20} />
          )}
        </div>
        <div
          className={`overflow-hidden transition-[height] duration-300 ease-in-out ${isShowingByMemory ? "h-24" : "h-0"}`}
        >
          <FilterByMemory Memory={Memory} />
        </div>
      </div>
      <hr />
    </div>
  );
}
