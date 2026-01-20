import Image from "next/image";

type CommentComponentProps = {
  rating: number;
  setRating: (value: number) => void;
  commentText: string;
  personName: string;
  imageSrc: string;
};

export default function CommentComponent({
  rating,
  setRating,
  commentText,
  personName,
  imageSrc,
}: CommentComponentProps) {
  return (
    <div className="flex items-center bg-white px-3 py-5 gap-5 rounded-lg w-full">
      <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={`${personName} image`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg">{personName}</h4>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-sm ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                aria-label={`${star} stars`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm font-medium">{commentText}</p>
      </div>
    </div>
  );
}
