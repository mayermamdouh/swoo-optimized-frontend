"use client";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import TechNews from "./TechNews";
import SingleProduct from "./singleProductComponent";

export default function DealsDay() {
  return (
    <section className="flex flex-col items-start gap-2 lg:flex-row ">
      <div className="flex-3 flex flex-col w-full">
        <div className="flex items-center font-bold bg-primary p-3 text-white rounded-lg">
          <h1 className="text-lg">DEALS OF THE DAY</h1>
          <div className="flex items-center ml-auto">
            <span className="text-sm">View All</span>
            <MdKeyboardArrowRight className="h-5 w-5" />
          </div>
        </div>
        <div className=" bg-white rounded-lg ">
          <SingleProduct />
        </div>
      </div>
      <div className="flex-1 w-full">
        <TechNews />
      </div>
    </section>
  );
}
