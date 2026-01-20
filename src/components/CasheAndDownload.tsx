import Image from "next/image";

export default function CasheAndDownload() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="relative flex-1 w-full min-h-45 lg:h-44 rounded-lg overflow-hidden">
        <Image
          src="/images/products/cashe.png"
          alt="cashe image"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute lg:right-10 lg:left-auto left-4 right-4 top-1/2 -translate-y-1/2 text-primary">
          <span className="text-yellow-300 text-4xl block font-bold">
            10% Back
          </span>
          <span className="text-white text-sm mt-2 block">
            Earn 10% Cash back on <br /> Swootech.{" "}
            <span className="underline font-bold">Learn How</span>
          </span>
        </div>
      </div>

      <div className="relative flex-1 w-full min-h-45 lg:h-44 rounded-lg overflow-hidden">
        <Image
          src="/images/download.png"
          alt="download app"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute lg:left-10 lg:right-auto left-4 right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
            <span className="text-white text-2xl font-bold">
              Download <br />
              our app
            </span>
            <span className="text-gray-200 text-sm mt-2 lg:mt-3">
              Enter your phone number <br /> and we'll send you a download link.
            </span>
          </div>
          <div className="relative bg-white/10 rounded-sm mt-2 lg:mt-3 w-full lg:w-3/4">
            <input
              type="text"
              placeholder="Phone number"
              className="py-2 px-3 border-none outline-none text-white text-sm w-full"
            />
            <button
              aria-label="SEND LINK"
              className="text-green-400 font-semibold text-sm absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
            >
              SEND LINK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
