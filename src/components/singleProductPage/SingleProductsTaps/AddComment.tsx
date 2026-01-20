import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddCommentProps = {
  newRating: number;
  setNewRating: (value: number) => void;
};

export default function AddComment({
  newRating,
  setNewRating,
}: AddCommentProps) {
  return (
    <div className="flex-2 flex flex-col gap-3">
      <h4 className="font-medium mb-3 text-xl">Add A Review</h4>
      <h4 className="uppercase font-medium">Your rating</h4>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${
              newRating >= star
                ? "text-yellow-400 hover:text-yellow-300"
                : "text-gray-300 hover:text-gray-200"
            }`}
            onClick={() => setNewRating(star)}
            aria-label={`${star} stars`}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        name="comment"
        rows={6}
        placeholder="Write your comment here"
        className="bg-white p-2 text-sm rounded-sm border hover:border-primary focus:border-primary focus:outline-none"
      ></textarea>
      <div className="flex items-center flex-wrap gap-2">
        <Input
          type="text"
          placeholder="Your Name *"
          className="py-5 flex-1 hover:border-primary"
        />
        <Input
          type="email"
          placeholder="Your Email *"
          className="py-5 flex-1 hover:border-primary"
        />
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="checked:accent-primary checked:border-primary"
        />
        <span className="text-sm">Save my name & email for next time</span>
      </label>
      <Button
        aria-label="Submit Comment"
        className="text-white uppercase"
        size="cart"
      >
        Submit Comment
      </Button>
    </div>
  );
}
