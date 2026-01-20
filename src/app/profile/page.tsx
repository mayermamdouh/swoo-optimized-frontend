"use client";
import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import AccountInfo from "@/components/profile/AccountInfo";
import MyOrders from "@/components/profile/MyOrders";
import MyAddress from "@/components/profile/MyAddress";
import ChangePassword from "@/components/profile/ChangePassword";

const menuItems = ["Account info", "My order", "My address", "Change password"];

export default function page() {
  const [activeItem, setActiveItem] = useState("Account info");

  return (
    <div className="p-5 flex flex-col lg:flex-row bg-white rounded-lg w-full gap-10">
      <div className="flex-1 flex flex-col gap-3 bg-gray-100/40 rounded-lg items-start p-3">
        <div className="relative px-5 w-full h-80 lg:h-56 flex items-center justify-center overflow-hidden">
          <Image
            alt="product image"
            src="/images/profile/avatar.jpg"
            fill
            className="object-contain  rounded-lg"
          />
        </div>
        <span className="font-bold">Mark Cole</span>
        <span className="text-gray-500">swoo@gmail.com</span>
        <ul className="w-full mt-5 flex flex-col gap-2">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveItem(item)}
              className={`px-2 py-3 flex items-center justify-between rounded-lg cursor-pointer transition-all
            ${
              activeItem === item
                ? "bg-primary text-white"
                : "bg-white hover:bg-primary hover:text-white"
            }`}
            >
              <span>{item}</span>
              <MdKeyboardArrowRight className="h-5 w-5" />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-4 flex flex-col">
        {activeItem === "Account info" && <AccountInfo />}
        {activeItem === "My order" && <MyOrders />}
        {activeItem === "My address" && <MyAddress />}
        {activeItem === "Change password" && <ChangePassword />}
      </div>
    </div>
  );
}
