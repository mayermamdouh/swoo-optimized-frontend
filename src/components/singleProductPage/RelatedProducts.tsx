import { Products } from "@/app/data/products/products";
import ProductCarousel from "../ProductCarousel";

export default function RelatedProducts() {
  return (
    <div className="flex flex-col gap-10 bg-white py-5 px-7 rounded-lg">
      <h3 className="text-lg uppercase font-extrabold">related products</h3>
      <ProductCarousel products={Products} />
    </div>
  );
}
