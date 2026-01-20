import Image from "next/image";

export default function PromoBar() {
  return (
    <section className="relative p-2 w-full h-24 rounded-xl overflow-hidden">
      <Image
        alt="post image"
        src="/images/hero/banner.png"
        fill
        className="object-cover"
      />
      <div className="relative z-20 flex items-center justify-center h-full text-white text-lg font-bold">
        <Image
          alt="post image"
          src="/images/star.png"
          width={30}
          height={30}
          className="object-cover mr-2"
          loading="lazy"
        />
        <div>
          Member get <span className="text-yellow-300 ">FREE SHIPPING*</span>{" "}
          with no order minimum!. *Restriction apply
          <span className="text-sm ml-2 underline cursor-pointer">
            Try free 30-days trial!
          </span>
        </div>
      </div>
    </section>
  );
}
