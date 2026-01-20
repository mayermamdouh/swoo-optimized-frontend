import { FaStar } from "react-icons/fa";

type RatingItem = {
  star: number;
  number: number;
};

type FilterByRateProps = {
  Rating: RatingItem[];
};

export default function FilterByRating({ Rating }: FilterByRateProps) {
  return (
    <div className="flex flex-col gap-2">
      {Rating.map((item, index) => (
        <label
          key={index}
          className="flex items-center justify-between cursor-pointer"
        >
          <input type="checkbox" className="mr-2" />
          <div className="flex items-center gap-1 flex-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={i < item.star ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({item.number})</span>
          </div>
        </label>
      ))}
    </div>
  );
}
