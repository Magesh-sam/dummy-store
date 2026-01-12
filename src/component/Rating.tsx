type RatingProps = { rating: number }

const Star = ({ filled }: { filled: boolean; }) => (
    <svg
        viewBox="0 0 24 24"
        className={`w-4 h-4 ${filled ? 'fill-yellow-400' : 'fill-gray-400/50'}`}
    >
        <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3.1 1.2-6.5L2.5 8.9l6.6-.9L12 2z" />
    </svg>
)

const Rating = ({ rating }: RatingProps) => (
    <div className="flex gap-3 items-center" title={`Rating: ${rating}0`}>
        {[1, 2, 3, 4, 5].map(n => (
            <Star key={n} filled={rating >= n} />
        ))}
    </div>
)

export default Rating
