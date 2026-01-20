"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart, MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShippingFast, FaUndo, FaLock, FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "pages",
      href: "/about",
      submenu: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Login", href: "/login" },
        { name: "Profile", href: "/profile" },
        { name: "Register", href: "/register" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "Products", href: "/products" },
        { name: "Cart", href: "/cart" },
        { name: "Checkout", href: "/checkout" },
        { name: "Single Product", href: "/products/32" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex flex-col w-full px-5 pt-5">
      <div
        className={`flex items-center bg-white h-16 gap-5  px-5 lg:px-10 rounded-t-lg   ${!open ? "rounded-b-lg transition-all ease-in-out" : "rounded-b-none "}`}
      >
        <div>
          <Image
            src="/images/icons/logoo.png"
            alt="logo image"
            width={120}
            height={100}
            className="mt-2.5 w-30 h-auto"
          />
        </div>

        <nav className="hidden lg:flex space-x-5 text-secondary ml-3 items-center gap-2">
          {navLinks.map((link, index) => {
            const hasDropdown = link.submenu && link.submenu.length > 0;

            return (
              <div key={index} className="relative">
                <div
                  onClick={() => hasDropdown && toggleDropdown(link.name)}
                  className="cursor-pointer font-bold text-sm flex items-center hover:text-primary select-none"
                >
                  {!hasDropdown ? (
                    <Link href={link.href} className="uppercase">
                      {link.name}
                    </Link>
                  ) : (
                    <div className="uppercase">{link.name}</div>
                  )}
                  {hasDropdown && (
                    <MdKeyboardArrowDown className="h-5 w-5 mt-0.5 ml-1" />
                  )}
                </div>

                {hasDropdown && openDropdown === link.name && (
                  <div className="divide-y absolute top-full left-0 mt-1 w-40 bg-white shadow-lg z-50 flex flex-col">
                    {link.submenu!.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="px-4 font-medium py-2 hover:bg-gray-100 text-gray-700 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center ml-auto gap-2">
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href=""
              className="p-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary group"
            >
              <FaRegHeart className="text-secondary group-hover:text-white" />
            </Link>

            <Link
              href="/cart"
              className="relative p-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary group"
            >
              <MdOutlineShoppingCart className="text-secondary group-hover:text-white" />
              <div className="absolute -top-1 -right-1 bg-primary h-5 w-5 rounded-full text-xs flex items-center justify-center text-white">
                1
              </div>
            </Link>
            <button
              aria-label="Toggle Menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <FiMenu size={24} />
            </button>
          </div>

          <div className="hidden lg:flex flex-row gap-2">
            <Link
              className="p-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group hover:bg-primary"
              href="/favorites"
            >
              <FaRegHeart className="text-secondary group-hover:text-white" />
            </Link>
            <Link
              className="flex items-center justify-center gap-2 group"
              href="/login"
            >
              <div className="p-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-primary ">
                <GoPerson className="text-secondary font-bold h-4 w-4 cursor-pointer group-hover:text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500">WELCOME</span>
                <span className="text-sm text-black font-bold">
                  LOG IN / REGISTER
                </span>
              </div>
            </Link>
            <Link
              className="flex items-center justify-center gap-2 group"
              href="/cart"
            >
              <div className="relative w-10 h-10 select-none p-3 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-primary">
                <MdOutlineShoppingCart className="text-secondary h-4 w-4 cursor-pointer group-hover:text-white" />
                <div className="absolute top-6 left-6 bg-primary rounded-full h-5 w-5 flex items-center justify-center text-white text-xs">
                  1
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500">CART</span>
                <span className="text-sm text-black font-bold">$102</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <nav
        className={`lg:hidden bg-white shadow-md flex flex-col gap-2 rounded-b-lg 
            transition-all duration-300 ease-in-out 
            ${open ? "max-h-100 " : "max-h-0 overflow-hidden"}`}
      >
        <div className="px-5 py-3 flex flex-col gap-4">
          {navLinks.map((link, index) => {
            const hasDropdown = link.submenu && link.submenu.length > 0;

            return (
              <div key={index} className="relative space-y-2">
                <div
                  onClick={() => hasDropdown && toggleDropdown(link.name)}
                  className="cursor-pointer font-bold text-sm flex items-center hover:text-primary select-none"
                >
                  {!hasDropdown ? (
                    <Link href={link.href} className="uppercase">
                      {link.name}
                    </Link>
                  ) : (
                    <div className="uppercase">{link.name}</div>
                  )}
                  {hasDropdown && (
                    <MdKeyboardArrowDown className="h-5 w-5 mt-0.5 ml-1" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    openDropdown === link.name
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }
                `}
                >
                  {hasDropdown && (
                    <div className="z-10 flex flex-col">
                      {link.submenu!.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="px-4 font-medium py-2 hover:bg-gray-100 text-gray-700 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <Link
            href="/register"
            className="font-bold text-sm text-secondary hover:text-primary"
          >
            REGISTER
          </Link>
          <Link
            href="/login"
            className="font-bold text-sm text-secondary hover:text-primary"
          >
            LOGIN
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-evenly rounded-md bg-primary text-white p-3">
        <div className="relative w-full flex-2">
          <input
            type="text"
            placeholder="Search anything..."
            className="rounded-4xl bg-white px-2 py-3 pl-4 pr-10 w-full focus:outline-none text-secondary text-sm"
          />
          <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer" />
        </div>
        <div className="flex-3 hidden md:flex items-center ml-7 gap-5">
          <div className="flex-1 flex items-center gap-2">
            <FaShippingFast className="text-md shrink-0" />
            <span className="text-xs lg:text-sm font-medium">
              FREE SHIPPING OVER 200 EGP
            </span>
          </div>
          <div className="flex-1 flex items-center gap-2 ">
            <FaLock className="text-sm shrink-0" />
            <span className="text-xs lg:text-sm font-medium">
              100% SECURE PAYMENT
            </span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <FaUndo className="text-sm shrink-0" />
            <span className="text-xs lg:text-sm font-medium">
              30 DAYS MONEY BACK
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
