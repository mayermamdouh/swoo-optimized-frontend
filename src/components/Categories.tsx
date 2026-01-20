import { IoIosLaptop } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { CiMobile2, CiHardDrive } from "react-icons/ci";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineSound } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const categories = [
  { icon: IoIosLaptop, name: "Laptops" },
  { icon: FaComputer, name: "Desktops" },
  { icon: CiMobile2, name: "Mobiles" },
  { icon: HiOutlineDeviceTablet, name: "Tablets" },
  { icon: IoCameraOutline, name: "Cameras" },
  { icon: AiOutlineSound, name: "Audio" },
  { icon: CiHardDrive, name: "Hard Drives" },
];

export default function Categories() {
  return (
    <section className="bg-white p-4 rounded-lg h-full">
      <span className="text-red-500">SALE 40% OFF</span>
      <div className="flex flex-col gap-3 items-start mt-4">
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-black w-full p-2 group hover:text-primary rounded cursor-pointer"
            >
              <Icon className="h-4 w-4" />
              <span className="font-bold">{item.name}</span>
              <MdKeyboardArrowRight className="h-5 w-5 ml-auto " />
            </div>
          );
        })}
      </div>
    </section>
  );
}
