import Image from "next/image";
import ProductHeader from "./ProductHeader";

type ProductGalleryProps = {
  images: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
  variant?: "home" | "single";
};

export default function ProductGallery({
  images,
  mainImage,
  setMainImage,
  variant,
}: ProductGalleryProps) {
  return (
    <div
      className={`flex gap-2 ${
        variant === "single" ? "flex-col" : "flex-row-reverse"
      }`}
    >
      <div className="flex w-full flex-col">
        <ProductHeader variant={variant} />
        <div
          className={`relative w-full ${variant === "single" ? "h-96" : "h-80"}`}
        >
          <Image
            src={mainImage}
            alt="main product"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-lg"
            priority={variant === "single"}
          />
        </div>
      </div>

      <div
        className={`flex ${
          variant === "single" ? "flex-row gap-10" : "flex-col"
        }`}
      >
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setMainImage(img)}
            className={`relative cursor-pointer ${
              variant === "single" ? "w-20 h-20" : "w-16 h-22"
            }`}
          >
            <Image
              className="object-contain"
              src={img}
              alt={`product-${index}`}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
