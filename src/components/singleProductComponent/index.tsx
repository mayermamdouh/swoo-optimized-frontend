"use client";

import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductContent from "./ProductContent";

type singleProductProps = {
  variant?: "home" | "single";
};

export default function SingleProduct({ variant }: singleProductProps) {
  const images = [
    "/images/MidnightBlue.jpg",
    "/images/MidnightBlueBack.jpg",
    "/images/SpaceBlack.jpg",
  ];

  const productColors = [
    {
      name: "Midnight Blue",
      price: "$569.00",
      img: "/images/MidnightBlue.jpg",
    },
    { name: "Crimson Red", price: "$569.00", img: "/images/DeepPurple.jpg" },
    { name: "Forest Green", price: "$569.00", img: "/images/SpaceBlack.jpg" },
  ];

  const storages = ["64GB", "128GB", "256GB", "512GB"];

  const [selectedColor, setSelectedColor] = useState<string | null>(
    productColors[0].name,
  );
  const [selectedStorage, setSelectedStorage] = useState<string | null>(
    storages[1],
  );
  const [rating, setRating] = useState(4);
  const [mainImage, setMainImage] = useState(images[1]);

  return (
    <div className="w-full flex flex-col lg:flex-row p-5">
      <div
        className={`w-full flex ${
          variant === "single" ? "flex-col gap-14" : "flex-row gap-4 mt-5"
        }`}
      >
        <div className={variant === "single" ? "" : "flex-1"}>
          <ProductGallery
            images={images}
            mainImage={mainImage}
            setMainImage={setMainImage}
            variant={variant}
          />
        </div>
      </div>

      <ProductContent
        variant={variant}
        rating={rating}
        setRating={setRating}
        productColors={productColors}
        storages={storages}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedStorage={selectedStorage}
        setSelectedStorage={setSelectedStorage}
      />
    </div>
  );
}
