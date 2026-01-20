import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TechNews() {
  return (
    <div className="bg-white px-3 py-6 rounded-lg">
      <div className="flex items-center ">
        <h3 className="font-bold ">TECH NEWS</h3>
      </div>
      <div className="flex items-center mt-6 gap-3">
        <div className="flex-1 relative rounded-2xl w-20 h-20 overflow-hidden">
          <Image
            alt="post image"
            src="/images/hero/slider1.png"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-2 text-sm flex flex-col gap-3">
          <div className="font-bold ">
            {" "}
            How to upgrade HDD for your PC by yourself{" "}
          </div>
          <span className="text-gray-500"> 25 Minutes ago </span>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4 w-full" />
      <div className="flex items-center mt-6 gap-3">
        <div className="flex-1 relative rounded-2xl w-20 h-20 overflow-hidden">
          <Image
            alt="post image"
            src="/images/hero/slider2.png"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-2 text-sm flex flex-col gap-3">
          <div className="font-bold ">
            {" "}
            How to upgrade HDD for your PC by yourself{" "}
          </div>
          <span className="text-gray-500"> 25 Minutes ago </span>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4 w-full" />
      <div className="flex items-center mt-6 gap-3">
        <div className="flex-1 relative rounded-2xl w-20 h-20 overflow-hidden">
          <Image
            alt="post image"
            src="/images/hero/slider1.png"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-2 text-sm flex flex-col gap-3">
          <div className="font-bold ">
            {" "}
            How to upgrade HDD for your PC by yourself{" "}
          </div>
          <span className="text-gray-500"> 25 Minutes ago </span>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4 w-full" />
      <div className="flex items-center font-bold text-gray-800 text-xs">
        <span className=""> See All Articles </span>
        <MdKeyboardArrowRight className="h-5 w-5" />
      </div>
    </div>
  );
}
