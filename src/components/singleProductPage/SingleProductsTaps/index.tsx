import { useState } from "react";
import DescriptionTab from "./DescriptionTab";
import ReviewTab from "./ReviewTab";
import AdditionalInfoTab from "./AdditionalInfoTab";

export default function SingleProductsTaps() {
  const [currentView, setCurrentView] = useState<
    "description" | "review" | "additional information"
  >("description");

  return (
    <section className="flex flex-col w-full bg-white rounded-lg p-5">
      <div className="flex items-center mb-10">
        <ul className="flex items-center gap-5 text-gray-500 font-semibold text-sm lg:text-xl">
          {["description", "review", "additional information"].map((tab) => (
            <li
              key={tab}
              onClick={() => setCurrentView(tab as any)}
              className={`cursor-pointer uppercase text-sm lg:text-lg${
                currentView === tab ? "text-black" : ""
              }`}
              aria-selected={currentView === tab}
              role="tab"
            >
              {tab === "review" ? "review (5)" : tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        {currentView === "description" && <DescriptionTab />}
        {currentView === "review" && <ReviewTab />}
        {currentView === "additional information" && <AdditionalInfoTab />}
      </div>
    </section>
  );
}
