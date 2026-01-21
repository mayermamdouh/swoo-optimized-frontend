import AnimatedComponent from "@/components/AnimatedComponent";
import FeaturedBrands from "@/components/FeaturedBrands";
import PromoBar from "@/components/PromoBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LiaCheckCircle } from "react-icons/lia";
import { LiaShippingFastSolid, LiaHandHoldingUsdSolid } from "react-icons/lia";

export default function page() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 rounded-lg bg-white p-7">
        <div className="rounded-lg border">
          <div className="relative w-full mx-auto h-80 overflow-hidden rounded-lg">
            <div className=" w-full h-full transition-opacity duration-500 ease-in-out">
              <Image
                src="/images/about/about1.png"
                alt="about page image"
                fill
                className="object-cover"
              />
              <div className="absolute flex flex-col gap-2 top-1/2 -translate-y-1/2 left-8 lg:left-16 z-10">
                <span className="font-bold text-5xl">Best experience</span>
                <span className="text-4xl font-medium">always wins</span>
                <span className="text-sm text-gray-600 mt-8 font-medium ">
                  #1 Online Marketplace for Electronic & Technology <br /> in
                  Mahanttan, CA
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5 py-10 px-16 flex-col lg:flex-row">
            <p className="flex-3 uppercase font-black text-xl">
              our purpose is to{" "}
              <span className="text-primary">
                {" "}
                enrich <br /> and enhance lives
              </span>{" "}
              through <br />
              technology
            </p>
            <div className="flex-4 flex-col lg:flex-row flex items-start justify-between gap-5 ">
              <div className="flex-1 flex flex-col items-start justify-center">
                <span className="text-4xl font-bold">$12,5M</span>
                <span className="text-gray-600 uppercase text-sm">
                  total revenue from 2001 - 2023
                </span>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center">
                <span className="text-4xl font-bold">12K+</span>
                <span className="text-gray-600 uppercase text-sm">
                  orders delivered successful on everyday
                </span>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center">
                <span className="text-4xl font-bold">725+</span>
                <span className="text-gray-600 uppercase text-sm">
                  store and office in U.S and worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 flex-col lg:flex-row">
          <div className="relative w-full min-h-75 lg:min-h-107.5 flex-1 overflow-hidden rounded-lg">
            <Image
              src="/images/about/about2.png"
              alt="about page image"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 bg-background min-h-75 lg:min-h-107.5 rounded-lg">
            <div className="py-16 px-6 lg:px-20">
              <p className="font-bold text-xl mb-6">
                We connect millions of buyers and sellers around the world,
                empowering people & creating economic opportunity for all.
              </p>

              <p className="text-gray-700">
                Within our markets, millions of people around the world connect,
                both online and offline, to make, sell and buy unique goods.
              </p>

              <Button className="uppercase mt-5 text-sm py-6 px-8 text-white w-fit">
                Our showreel
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatedComponent>
        <div className="flex items-center gap-2 flex-col lg:flex-row">
          <div className="flex-1 bg-white rounded-lg p-7 flex flex-col gap-8 h-56 w-full">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase text-xl flex-1">
                100% authentic <br /> products
              </span>
              <div className=" h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                <LiaCheckCircle className="h-8 w-8 text-white " />
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Swoo Tech Mart just distribute 100% authorized products &
              guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum
              sapien varius.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-7 flex flex-col gap-8 h-56 w-full">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase text-xl flex-1">
                fast
                <br /> delivery
              </span>
              <div className="relative h-16 w-16 bg-primary rounded-full">
                <div className=" h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                  <LiaShippingFastSolid className="h-8 w-8 text-white " />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Fast shipping with a lots of option to delivery. 100% guarantee
              that your goods alway on time and perserve quality.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-7 flex flex-col gap-8 h-56 w-full">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase text-xl">
                affordable
                <br /> price
              </span>
              <div className="relative h-16 w-16 bg-primary rounded-full">
                <div className=" h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                  <LiaHandHoldingUsdSolid className="h-8 w-8 text-white " />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              We offer an affordable & competitive price with a lots of special
              promotions.
            </p>
          </div>
        </div>
      </AnimatedComponent>
      <AnimatedComponent>
        <div className="bg-white p-7 rounded-lg">
          <h4 className="font-bold text-xl mb-4 uppercase">
            our mission and vision
          </h4>
          <p>
            Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras
            non elit vel magna molestie pellentesque in eu dui. Donec laoreet
            quis erat vitae finibus. Vestibulum enim eros, porta eget quam et,
            euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id
            felis placerat porta vel sed augue.{" "}
            <strong>Vivamus mollis mauris</strong> vitae rhoncus egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
      </AnimatedComponent>
      <AnimatedComponent>
        <FeaturedBrands />
      </AnimatedComponent>
      <AnimatedComponent>
        <PromoBar />
      </AnimatedComponent>
    </div>
  );
}
