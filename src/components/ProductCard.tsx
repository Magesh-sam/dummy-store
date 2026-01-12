import { type FC } from 'react'
import type { Product } from '../lib/types'
import Rating from './Rating'
import Cart from './icons/Cart'



const ProductCard: FC<Product> = ({ title, price, rating, thumbnail, description }) => (
    <div className=' p-3 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col gap-3 '>
        <img src={thumbnail} alt={description} className='rounded-xl bg-blue-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ' />
        <Rating rating={rating} />

        <h3 className='text-2xl font-bold wrap-break-word'>{title}</h3>
        <h4 className='text-xl font-semibold'>${price}</h4>
        <button className='max-w-sm w-fit px-3 py-2 rounded-sm  flex gap-2 items-center bg-blue-200'>
            <span>Add to Cart</span>
            <Cart />
        </button>
    </div>
)

export default ProductCard