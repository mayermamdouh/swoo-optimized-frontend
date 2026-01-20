import Promotions from "@/components/Promotions";
import FeaturedBrands from "@/components/FeaturedBrands";
import TopCategories from "@/components/TopCategories";
import DealsDay from "@/components/DealsDay";
import PromoBar from "@/components/PromoBar";
import Taps from "@/components/Tabs";
import ExploreCategories from "@/components/ExploreCategories";
import CasheAndDownload from "@/components/CasheAndDownload";
import NewForYou from "@/components/NewForYou";
import RecentlyViewed from "@/components/RecentlyViewed";
import AboutUs from "@/components/AboutUs";
import AnimatedComponent from "@/components/AnimatedComponent";
export default function Home() {
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <AnimatedComponent>
          <div>
            <Promotions />
          </div>
        </AnimatedComponent>
        <AnimatedComponent>
          <div className="flex flex-col items-start gap-2 lg:flex-row">
            <div className="flex-1 w-full">
              {" "}
              <FeaturedBrands />
            </div>
            <div className="flex-1 w-full">
              <TopCategories />
            </div>
          </div>
        </AnimatedComponent>
        <AnimatedComponent>
          <DealsDay />
        </AnimatedComponent>
        <AnimatedComponent>
          <PromoBar />
        </AnimatedComponent>
        <AnimatedComponent>
          <Taps />
        </AnimatedComponent>
        <AnimatedComponent>
          <NewForYou />
        </AnimatedComponent>
        <AnimatedComponent>
          <ExploreCategories />
        </AnimatedComponent>
        <AnimatedComponent>
          <CasheAndDownload />
        </AnimatedComponent>
        <AnimatedComponent>
          <RecentlyViewed />
        </AnimatedComponent>
        <AboutUs />
      </div>
    </div>
  );
}
