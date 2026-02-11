import type { ChangeEvent } from "react"

export type ProductsData = {
    products: [],
    total: number,
    skip: number,
    limit: number
}

export type FetchError = {
    message: string | null,
    error: unknown | null
}

export type Category = {
    slug: string,
    name: string,
    url: string,
}

/* Components */

export type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    tags: string[],
    images: string[],
    thumbnail: string,
}


export type CartItem = Product & { quantity: number }


export interface CartSliceState {
    cartItems: CartItem[],
    totalQuantity: number,
    totalPrice: number
}

export interface NavbarProps {
    value:string,
    toggleMenu:()=>void,
    handleChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    handleKeyDown:(e: React.KeyboardEvent<HTMLInputElement>)=>void,

}

export type RatingProps = { rating: number }

