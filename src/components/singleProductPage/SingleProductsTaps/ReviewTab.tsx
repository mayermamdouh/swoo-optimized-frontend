import { useState } from "react";
import CommentComponent from "./CommentComponent";
import AddComment from "./AddComment";

const commentsData = [
  {
    personName: "Robert Downey Jr",
    commentText: "Lorem ipsum dolor sit amet...",
    imageSrc: "/images/comments/comment1.jpeg",
    initialRating: 4,
  },
  {
    personName: "Ben Chiwell",
    commentText: "Very good experience, will buy again.",
    imageSrc: "/images/comments/comment2.jpeg",
    initialRating: 4,
  },
];

export default function ReviewTab() {
  const [ratings, setRatings] = useState<number[]>(
    commentsData.map((c) => c.initialRating),
  );
  const [newRating, setNewRating] = useState(4);

  return (
    <div className="flex items-start flex-wrap gap-14 bg-gray-100 p-5 py-10 rounded-lg">
      <div className="flex-3 flex flex-col gap-3">
        <h4 className="font-medium mb-3 text-xl">Reviews</h4>
        {commentsData.map((comment, index) => (
          <CommentComponent
            key={index}
            rating={ratings[index]}
            setRating={(value: number) =>
              setRatings((prev) => {
                const copy = [...prev];
                copy[index] = value;
                return copy;
              })
            }
            {...comment}
          />
        ))}
      </div>

      <AddComment newRating={newRating} setNewRating={setNewRating} />
    </div>
  );
}
