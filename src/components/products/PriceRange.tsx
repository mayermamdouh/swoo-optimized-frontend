"use client";

import { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  min?: number;
  max?: number;
  gap?: number;
};

export default function PriceRange({ min = 0, max = 1000, gap = 100 }: Props) {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(700);

  const minPercent = (minPrice / max) * 100;
  const maxPercent = (maxPrice / max) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="relative h-6">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-300 rounded">
          <div
            className="absolute h-0.5 bg-primary rounded"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(+e.target.value, maxPrice - gap))
          }
          className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-auto"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(+e.target.value, minPrice + gap))
          }
          className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-auto"
        />
      </div>

      <div className="flex items-center gap-3 ">
        <div className="relative w-1/2 font-bold">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">
            $
          </span>
          <input
            type="number"
            value={minPrice}
            min={min}
            max={maxPrice - gap}
            onChange={(e) =>
              setMinPrice(Math.min(+e.target.value, maxPrice - gap))
            }
            className="bg-white w-full pl-7 p-2 border rounded text-sm focus:outline-none"
          />
        </div>

        <span>-</span>

        <div className="relative w-1/2 font-bold">
          <span className="absolute left-3 top-1/2 -translate-y-1/2  text-sm">
            $
          </span>
          <input
            type="number"
            value={maxPrice}
            min={minPrice + gap}
            max={max}
            onChange={(e) =>
              setMaxPrice(Math.max(+e.target.value, minPrice + gap))
            }
            className="bg-white w-full pl-7 p-2 border rounded text-sm focus:outline-none"
          />
        </div>

        <Button aria-label="Go" className="w-fit text-white">
          Go
        </Button>
      </div>
    </div>
  );
}
