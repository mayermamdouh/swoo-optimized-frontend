type BrandFilterProps = {
  Brands: string[];
  isShowingBrands: boolean;
};
export default function FilterByBrands({
  Brands,
  isShowingBrands,
}: BrandFilterProps) {
  return (
    <div
      className={`overflow-hidden transition-[height] duration-300 ease-in-out ${
        isShowingBrands ? "h-48" : "h-0"
      }`}
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-1 pr-10 bg-white rounded-sm focus:outline-none text-sm"
        />
        <MdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="h-40 flex flex-col gap-2 overflow-y-auto mt-3">
        {Brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-sm font-medium">{brand}</span>
              <span className="text-sm font-medium text-gray-400">(13)</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
import { MdSearch } from "react-icons/md";
