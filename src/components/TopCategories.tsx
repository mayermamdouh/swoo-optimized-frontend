import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const categories = [
  {
    name: "Headphones",
    image: "/images/products/headphone.png",
  },
  {
    name: "Laptops",
    image: "/images/products/laptop.png",
  },
  {
    name: "PCs",
    image: "/images/products/pc.png",
  },
  {
    name: "Monitors",
    image: "/images/products/mointor.png",
  },
];

export default function TopCategories() {
  return (
    <section className="flex flex-col gap-3 bg-white rounded-lg p-3 h-52">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl text-black font-bold">TOP CATEGORIES</h1>
        <div className="flex items-center text-gray-600">
          <span className="">View All</span>
          <MdKeyboardArrowRight className="h-5 w-5" />
        </div>
      </div>
      <div className="flex items-center justify-between px-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="
        flex flex-col gap-3 items-center justify-start
        border-2 border-transparent
        hover:border-primary
        p-2.5 rounded-2xl cursor-pointer
        transition-colors duration-200 
      "
          >
            <Image
              src={item.image}
              alt={item.name}
              width={65}
              height={65}
              className="object-contain"
            />
            <span className="text-sm text-black font-bold mt-auto">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
