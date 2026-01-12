import type { RatingProps } from "../lib/types"
import Star from "./icons/Star"

const Rating = ({ rating }: RatingProps) => (
    <div className="flex gap-3 items-center" title={`Rating: ${rating}0`}>
        {[1, 2, 3, 4, 5].map(n => (
            <Star key={n} filled={rating >= n} />
        ))}
    </div>
)

export default Rating
