import { type FC } from 'react'
import type { Product } from '../lib/types'
import Rating from './Rating'

const ProductCard: FC<Product> = ({ title, description, rating }) => (
    <div className='border p-3 '>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-gray-600 mb-2'>{description}</p>
        <Rating rating={rating} />
    </div>
)

export default ProductCard