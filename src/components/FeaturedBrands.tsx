import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const brands = [
  "/images/brands/brand1.png",
  "/images/brands/brand2.png",
  "/images/brands/brand3.png",
  "/images/brands/brand4.png",
  "/images/brands/brand5.png",
  "/images/brands/brand6.png",
];

export default function FeaturedBrands() {
  return (
    <section className="flex flex-col gap-3 bg-white rounded-lg p-3 h-52">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl text-black font-bold">FEATURED BRANDS</h1>
        <div className="flex items-center text-gray-600">
          <span className="">View All</span>
          <MdKeyboardArrowRight className="h-5 w-5" />
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-4 gap-10 px-5  ">
        {brands.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`brand-${index}`}
            width={100}
            height={100}
            className="object-cover"
          />
        ))}
      </div>
    </section>
  );
}
