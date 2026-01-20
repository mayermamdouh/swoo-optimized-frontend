import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

export default function SocialIcons() {
  const icons = [
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <TiSocialYoutube />, name: "YouTube" },
    { icon: <FaPinterest />, name: "Pinterest" },
  ];

  return (
    <div className="flex items-center gap-3 mt-5">
      {icons.map((item, index) => (
        <div
          key={index}
          className="rounded-full bg-gray-300 p-2.5 cursor-pointer hover:text-white hover:bg-primary transition duration-200 "
          title={item.name}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
