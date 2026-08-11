import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: number;
  maxRating?: number;
  className?: string;
}

export default function StarRating({
  rating,
  size = 14,
  maxRating = 5,
  className,
}: StarRatingProps) {
  return (
    <div
      className={cn("flex gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of ${maxRating} stars`}
    >
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < Math.round(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-slate-300 dark:text-slate-700"
          )}
        />
      ))}
    </div>
  );
}
