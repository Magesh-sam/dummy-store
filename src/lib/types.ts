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

export type RatingProps = { rating: number }

