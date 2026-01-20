import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";
export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-white p-5">
      <div className="flex flex-col lg:flex-row items-start p-10 gap-10 w-full">
        <div className="flex-2 flex flex-col items-start w-full">
          <h2 className="text-lg font-bold uppercase">
            Swoo - 1st NYC tech online market
          </h2>
          <span className="mt-6 uppercase">hotline 24/7</span>
          <div className="text-primary text-3xl font-bold">
            (025) 3686 25 16
          </div>
          <div className=" text-md mt-6">
            257 Thatcher Road St, Brooklyn, Manhattan,
            <br /> NY 10092
          </div>
          <span className="">contact@Swootechmart.com</span>
          <SocialIcons />
        </div>
        <div className="flex-5 flex flex-col gap-1 w-full">
          <div className="flex w-full flex-col lg:flex-row gap-4">
            <div className="flex-1 flex flex-col items-start gap-5">
              <h2 className="text-lg font-bold uppercase">top Categories</h2>

              <ul className="flex flex-col gap-2  text-gray-500">
                <li>Laptops</li>
                <li>PC & Computers</li>
                <li>Cell Phones</li>
                <li>Tablets</li>
                <li>Gaming & VR</li>
                <li>Networks</li>
                <li>Cameras</li>
                <li>Sounds</li>
                <li>Office</li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-start gap-5">
              <h2 className="text-lg font-bold uppercase">company</h2>

              <ul className="flex flex-col gap-2 text-gray-500">
                <li>About Swoo</li>
                <li>Contact</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Store Locations</li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-start gap-5">
              <h2 className="text-lg font-bold uppercase">help center</h2>

              <ul className="flex flex-col gap-2 text-gray-500">
                <li>Laptops</li>
                <li>PC & Computers</li>
                <li>Cell Phones</li>
                <li>Tablets</li>
                <li>Gaming & VR</li>
                <li>Networks</li>
                <li>Cameras</li>
                <li>Sounds</li>
                <li>Office</li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-start gap-5">
              <h2 className="text-lg font-bold uppercase">partner</h2>

              <ul className="flex flex-col gap-2 text-gray-500">
                <li>Become Seller</li>
                <li>Affiliate</li>
                <li>Advertise</li>
                <li>Partnership</li>
              </ul>
            </div>
          </div>
          <h3 className="font-bold text-xl uppercase mt-10">
            subscribe & get <span className="text-red-500">10% off</span> for
            your first order
          </h3>
          <div className="relative mt-3 w-full">
            <span className="absolute top-1/2 -translate-y-1/2 text-gray-400">
              <MdOutlineEmail className="h-5 w-5 text-black" />
            </span>
            <input
              type="text"
              placeholder="Enter your email address"
              className="font-semibold border-b outline-none p-2 pl-8 text-sm w-full"
            />
            <div className="cursor-pointer flex items-center gap-3 absolute right-3 top-1/2 -translate-y-1/2 text-primary uppercase font-bold text-sm">
              <span>sunscribe</span>
              <FaArrowRightLong className="w-3 h-3 text-primary" />
            </div>
          </div>
          <div className="text-gray-600">
            By subscribing, you’re accepted the our{" "}
            <span className="font-bold underline text-sm text-black">
              Policy
            </span>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4 w-full" />
      <div className="flex items-center text-gray-600">
        <div>
          © 2024 <span className="text-black font-bold">Swoo</span> . All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
}
