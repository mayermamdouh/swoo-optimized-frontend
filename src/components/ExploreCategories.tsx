import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

interface CategoryItemType {
  image: string;
  title: string;
  items: number;
}

interface CategoryType {
  title: string;
  mainImage: string;
  items: CategoryItemType[];
}

const categories: CategoryType[] = [
  {
    title: "Audios & Cameras",
    mainImage: "/images/products/audio.png",
    items: [
      { image: "/images/products/speaker.png", title: "Speaker", items: 12 },
      { image: "/images/products/camera.png", title: "DSLR Camera", items: 9 },
      { image: "/images/products/earbods.png", title: "Earbuds", items: 5 },
      { image: "/images/microphone.png", title: "Microphone", items: 12 },
    ],
  },
  {
    title: "Gaming",
    mainImage: "/images/products/gaming.png",
    items: [
      { image: "/images/products/speaker.png", title: "Speaker", items: 12 },
      { image: "/images/products/camera.png", title: "DSLR Camera", items: 9 },
      { image: "/images/products/earbods.png", title: "Earbuds", items: 5 },
      { image: "/images/microphone.png", title: "Microphone", items: 12 },
    ],
  },
  {
    title: "Office Equipments",
    mainImage: "/images/products/projector.png",
    items: [
      { image: "/images/products/speaker.png", title: "Speaker", items: 12 },
      { image: "/images/products/camera.png", title: "DSLR Camera", items: 9 },
      { image: "/images/products/earbods.png", title: "Earbuds", items: 5 },
      { image: "/images/microphone.png", title: "Microphone", items: 12 },
    ],
  },
];

export default function ExploreCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {categories.map((cat, index) => (
        <CategoryCard key={index} category={cat} />
      ))}
    </div>
  );
}

const CategoryItem = ({ image, title, items }: CategoryItemType) => (
  <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:text-primary">
    <div className="relative rounded-full w-30 h-30 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
    <div className="font-bold">{title}</div>
    <span className="text-gray-500 text-sm">{items} Items</span>
  </div>
);

interface CategoryCardProps {
  category: CategoryType;
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <div className="bg-white px-7 py-5 flex flex-col gap-5 rounded-lg">
    <div className="flex items-center justify-between">
      <h1 className="text-xl text-black font-bold uppercase wrap-break-word mr-2">
        {category.title}
      </h1>
      <div className="flex items-center text-gray-600 cursor-pointer">
        <span className="text-sm">View All</span>
        <MdKeyboardArrowRight className="h-5 w-5" />
      </div>
    </div>

    <div className="relative rounded-2xl w-full h-48 overflow-hidden">
      <Image
        src={category.mainImage}
        alt={`${category.title} image`}
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>

    <hr className="border-t border-gray-300 my-4 w-full" />

    <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-8">
      {category.items.map((item, idx) => (
        <CategoryItem
          key={idx}
          image={item.image}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  </div>
);
