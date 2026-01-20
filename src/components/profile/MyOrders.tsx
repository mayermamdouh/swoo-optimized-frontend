import Image from "next/image";

import { Products } from "@/app/data/products/products";
import { Product } from "@/types/types";

export default function MyOrders() {
  return (
    <div>
      <h3 className="font-bold text-2xl">Orders History</h3>
      <div className="p-2.5 flex gap-3 flex-col border mt-5 rounded-lg w-full">
        <div className="flex items-center justify-between bg-green-500/10 rounded-lg py-5 px-4">
          <div className="flex flex-col text-sm gap-2">
            <div className="">
              NUM: <span className="font-bold">#45512132</span>
            </div>
            <span className="">DATE: 3/12/2022</span>
          </div>
          <button
            aria-label="Delivered"
            className="relative overflow-hidden text-green-900 bg-green-100 border border-gray-100 py-2.5 px-4 rounded-sm text-sm font-semibold"
          >
            <span className="relative z-10">Delivered</span>

            <span className="absolute inset-0 bg-black/10"></span>
          </button>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          {Products.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  const { valueSaved, image, name, currentPrice, oldPrice, shipping, stock } =
    product;

  return (
    <div className="flex-1 flex items-center bg-gray-100/60 p-2 rounded-lg gap-2 border border-transparent hover:border-gray-300 transition-all duration-300">
      <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden my-5">
        <Image
          alt="product image"
          src={image}
          fill
          className="object-contain p-10 bg-white rounded-lg"
        />
        <div className="absolute top-0 left-0 z-10 font-bold bg-primary py-1 px-2 text-xs text-white rounded-lg flex flex-col items-start">
          <span>SAVE</span>
          <span className="mt-1">{valueSaved}</span>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="cursor-pointer text-xs text-yellow-400">
              ★
            </span>
          ))}
          <span className="ml-1 text-xs">(12)</span>
        </div>
        <h3 className="font-bold text-sm hover:text-primary cursor-pointer">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-3">
          <div className="font-bold text-red-600 text-lg">{currentPrice}</div>
          <div className="font-bold text-gray-600 line-through text-md">
            {oldPrice}
          </div>
        </div>

        {shipping && (
          <div className="self-start text-primary text-xs bg-primary/10 px-3 py-1 rounded-sm mt-4 w-fit">
            FREE SHIPPING
          </div>
        )}

        {stock && (
          <div className="flex items-center gap-1.5 mt-2 mb-5">
            <Image
              src="/images/instockicon.png"
              alt="in stock icon"
              width={12}
              height={12}
            />
            <span className="text-sm">In stock</span>
          </div>
        )}
      </div>
    </div>
  );
};
