type MemoryItem = {
  gb: number;
  number: number;
};
type FilterByMemoryProps = {
  Memory: MemoryItem[];
};

export default function FilterByMemory({ Memory }: FilterByMemoryProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Memory.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="cursor-pointer accent-primary" />
            <span className="text-sm font-medium">{item.gb}GB</span>
            <span className="text-sm font-medium text-gray-400">
              ({item.number})
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}
