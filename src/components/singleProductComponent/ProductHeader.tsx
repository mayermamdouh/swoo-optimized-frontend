import { GoPlus } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";

type ProductHeaderProps = {
  variant?: "home" | "single";
};

export default function ProductHeader({ variant }: ProductHeaderProps) {
  return (
    <div className={`flex items-center justify-between px-5 `}>
      <div className="bg-primary p-3 text-white rounded-lg">SAVE $199.00</div>
      <div className="relative flex flex-col items-center group">
        <div className="bg-gray-200/50 p-2 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200 z-10">
          <GoPlus className="w-4 h-4" />
        </div>

        <div className="absolute top-0 mt-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-20">
          <div className="bg-gray-200/50 p-2 rounded-full mb-2 hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200">
            <RxEyeOpen className="w-4 h-4" />
          </div>
          <div className="bg-gray-200/50 p-2 rounded-full mb-2 hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200">
            <IoCartOutline className="w-4 h-4" />
          </div>
          <div className="bg-gray-200/50 p-2 rounded-full hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer transition-colors duration-200">
            <IoIosHeart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
