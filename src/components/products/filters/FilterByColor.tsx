import { useState } from "react";
import { IoMdCheckbox, IoMdCheckmark } from "react-icons/io";

const Colors: string[] = [
  "black",
  "white",
  "red",
  "blue",
  "green",
  "yellow",
  "gray",
  "purple",
];

export default function FilterByColor() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleToggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="flex items-center flex-wrap gap-3">
      {Colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleToggleColor(color)}
          className={`w-9 h-9 rounded-md border-2 cursor-pointer flex items-center justify-center `}
          style={{ backgroundColor: color }}
        >
          {selectedColors.includes(color) && (
            <IoMdCheckmark className="text-gray-300 w-4 h-4" />
          )}
        </div>
      ))}
    </div>
  );
}
