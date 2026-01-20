import { useState } from "react";
import Image from "next/image";

export default function DescriptionTab() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6">
      <p className="text-sm font-medium">
        Built for ultra-fast performance, the thin and lightweight Samsung
        Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop on
        a crisp, clear Super AMOLED display. Expandable memory lets you enjoy
        more of your favorite content. And connecting and sharing between all
        your Samsung devices is easier than ever. Welcome to life with the
        reimagined Samsung Galaxy Tab S2. Watch thev world come to life on your
        tablet's <strong>Super AMOLED display *</strong> . With deep contrast,
        rich colors and crisp details, you won't miss a thing
      </p>

      <figure className="w-full">
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <Image
            src="/images/singleproduct1.jpeg"
            alt="Samsung Galaxy Tab S2"
            fill
            className="object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-2 text-sm text-center text-gray-500 font-medium">
          * The Galaxy Tab S2’s 4:3 ratio display is ideal for office tasks.
        </figcaption>
      </figure>
      <div className="space-y-3">
        <h4 className="font-bold">From the manufacturer</h4>
        <p className="text-gray-900 text-sm">
          Dive into the blockbuster movies you can't wait to see. Switch between
          your favorite apps quickly and easily. The new and improved octa-core
          processor gives you the power and speed you need to see more and do
          more. Expand your tablet's memory from 32GB to up to an additional
          128GB and enjoy more of your favorite music, photos, movies and games
          on the go with a microSD card. With Quick Connect, start a show on
          your Smart TV and, with the touch of a button, take it with you by
          moving it to your Galaxy Tab S2.
        </p>
        <p className="text-gray-900 text-sm">
          Or send videos and photos from your tablet screen to your TV screen to
          share with everyone in the room. Work effortlessly between your
          Samsung tablet and Samsung smartphone with SideSync. Quickly drag and
          drop photos between devices. And even respond to a call from your
          smartphone right on your tablet screen.
        </p>
      </div>

      <div className="gap-2 flex items-center  w-full flex-col lg:flex-row">
        {["/images/singleproduct2.png", "/images/singleproduct3.png"].map(
          (src, idx) => (
            <div
              key={idx}
              className="lg:flex-1 relative w-full h-96 overflow-hidden rounded-lg "
            >
              <Image
                src={src}
                alt={`Galaxy Tab S2 image ${idx + 2}`}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ),
        )}
      </div>

      <div className="relative">
        <div
          className={`relative space-y-4 text-sm/7 font-medium transition-all duration-300 ${
            expanded ? "max-h-full" : "max-h-28 overflow-hidden"
          }`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <p key={index}>
              The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing
              8-megapixel camera with Auto Focus and a 2.1-megapixel camera on
              the front. Take high-quality pictures and video or video chat with
              friends, family, and colleagues. Customize your Galaxy Tab S2 with
              the apps you use most. The Samsung Galaxy Essentials widget
              provides a collection of premium complimentary apps optimized for
              your tablet screen. Select and download the apps you want to
              instantly upgrade your tablet experience.
            </p>
          ))}

          {!expanded && (
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent" />
          )}
        </div>

        {!expanded && (
          <button
            aria-label="See more"
            onClick={() => setExpanded(true)}
            className="mt-3 text-primary font-medium text-sm hover:underline cursor-pointer"
          >
            See more
          </button>
        )}
      </div>
    </div>
  );
}
