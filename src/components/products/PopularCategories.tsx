const categories = [
  { title: "Android", number: 120, image: "/images/brands/android.png" },
  { title: "Xiaomi", number: 80, image: "/images/brands/xiaomi.png" },
  { title: "5G Support", number: 50, image: "/images/5g.png" },
  {
    title: "iPhone (iOS)",
    number: 100,
    image: "/images/products/iphone.png",
  },
  {
    title: "Accessories",
    number: 200,
    image: "/images/products/accessories.png",
  },
  {
    title: "Apple Tablets",
    number: 40,
    image: "/images/brands/apple-tablets.png",
  },
  {
    title: "Samsung Tablets",
    number: 35,
    image: "/images/brands/samsung-tablets.png",
  },
  {
    title: "eReader",
    number: 5,
    image: "/images/products/ereader.png",
  },
];

export default function PopularCategories() {
  return (
    <div className="flex flex-col bg-white p-5 rounded-lg gap-5">
      <h3 className="font-bold uppercase text-xl">popular categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer flex items-start justify-between border border-transparent hover:border-primary rounded-lg py-4 px-2 transition-all drop-shadow-blue-300"
          >
            <div className="flex flex-col ">
              <span className="font-bold">{category.title}</span>
              <span className="text-xs text-gray-600">
                {category.number} Items
              </span>
            </div>
            <div className="relative w-14 h-14 mb-2">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
