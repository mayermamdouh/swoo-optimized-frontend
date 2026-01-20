export default function AdditionalInfoTab() {
  const info = [
    { title: "Weight", value: "0.6 kg" },
    { title: "Dimensions", value: "40 × 30 × 30 cm" },
    { title: "Color", value: "White, Black, Red" },
    { title: "Year", value: "2021" },
    { title: "Style", value: "Classic, Modern" },
  ];

  return (
    <div className="text-sm border border-gray-300 w-1/2 mx-auto flex flex-col divide-y divide-gray-200">
      {info.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-4">
          <h4 className="font-bold text-gray-600">{item.title}</h4>
          <span className="text-gray-600">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
