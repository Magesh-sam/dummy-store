
const Rating = ({ rating }: { rating: number }) => {
    return (
        <div className='rating-container flex gap-3 items-center'>
            <div className={`rating-item border rounded-full w-4 h-4 ${rating >= 1 ? 'bg-yellow-400' : 'bg-white'}`}></div>
            <div className={`rating-item border rounded-full w-4 h-4 ${rating >= 2 ? 'bg-yellow-400' : 'bg-white'}`}></div>
            <div className={`rating-item border rounded-full w-4 h-4 ${rating >= 3 ? 'bg-yellow-400' : 'bg-white'}`}></div>
            <div className={`rating-item border rounded-full w-4 h-4 ${rating >= 4 ? 'bg-yellow-400' : 'bg-white'}`}></div>
            <div className={`rating-item border rounded-full w-4 h-4 ${rating >= 5 ? 'bg-yellow-400' : 'bg-white'}`}></div>

        </div>
    )
}

export default Rating