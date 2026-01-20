import CategoryHighlights from "@/components/products/CategoryHighlights";
import PopularCategories from "@/components/products/PopularCategories";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
const ProductFilters = dynamic(
  () => import("@/components/products/ProductsFilters"),
);
const ProductCarousel = dynamic(() => import("@/components/ProductCarousel"));
const ProductCard = dynamic(() => import("@/components/ProductCard"));
const RecentlyViewed = dynamic(() => import("@/components/RecentlyViewed"));
import { Products } from "../data/products/products";
import dynamic from "next/dynamic";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function page() {
  const categories: string[] = [
    "All",
    "Iphone",
    "Samsung",
    "Xiaomi",
    "Asus",
    "Oppo",
    "Gaming Smartphone",
    "Ipad",
    "Window Tablets",
    "eReader",
    "Smartphone Chargers",
    "5G Support Smartphone",
    "Smartphone Accessories",
    "Tablets Accessories",
    "Cell Phones  $200",
  ];

  const Brands: string[] = [
    "envato",
    "Samsung",
    "photodune",
    "Asus",
    "microlancer",
    "envato",
    "Samsung",
    "photodune",
    "Asus",
    "microlancer",
  ];

  type RatingItem = {
    star: number;
    number: number;
  };
  const Rating: RatingItem[] = [
    { star: 5, number: 50 },
    { star: 4, number: 40 },
    { star: 3, number: 30 },
    { star: 2, number: 20 },
    { star: 1, number: 10 },
  ];

  type MemoryItem = {
    gb: number;
    number: number;
  };
  const Memory: MemoryItem[] = [
    { gb: 12, number: 20 },
    { gb: 8, number: 15 },
    { gb: 6, number: 10 },
    { gb: 3, number: 8 },
    { gb: 2, number: 5 },
    { gb: 1, number: 3 },
  ];

  return (
    <div className=" flex flex-col gap-3">
      <CategoryHighlights />
      <AnimatedComponent>
        <PopularCategories />
      </AnimatedComponent>
      <AnimatedComponent>
        <div className="flex flex-col bg-white rounded-lg p-5">
          <div className="flex items-start gap-5 flex-wrap lg:flex-nowrap">
            <div className="w-full md:flex-1 flex flex-col gap-4 shrink-0">
              <div className="space-y-4 bg-background p-6 rounded-lg">
                <h3 className="font-bold uppercase text-lg">categories</h3>
                <button
                  aria-label="All Categories"
                  className="w-fit text-sm flex items-center gap-2 bg-white text-black hover:text-white hover:bg-primary px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
                >
                  <MdKeyboardArrowLeft className="text-lg" />
                  <span className="font-bold ">All Categories</span>
                </button>
                <h5 className="font-bold text-sm">Cell Phones & Tablets</h5>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="font-medium text-sm hover:underline hover:text-primary cursor-pointer transition-all duration-200"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <ProductFilters Brands={Brands} Rating={Rating} Memory={Memory} />
            </div>

            <div className="w-full md:flex-4 flex flex-col min-w-0">
              <h3 className="font-bold text-2xl">
                Best seller in this category
              </h3>
              <ProductCarousel products={Products} size="small" />
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Products.map((product, index) => (
                  <div key={index}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink isActive href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">20</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </AnimatedComponent>
      <AnimatedComponent>
        <RecentlyViewed />
      </AnimatedComponent>
    </div>
  );
}
