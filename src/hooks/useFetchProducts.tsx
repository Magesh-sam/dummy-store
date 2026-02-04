import { useState, useEffect } from 'react'
import type { FetchError, ProductsData } from '../lib/types'

export const useFetchProducts = ({
  skip = 0,
  limit = 20,
  retries = 3,
  retryDelay = 1000, // Add a default delay (ms)
  query = '' }
) => {
  const [data, setData] = useState<ProductsData | null>(null)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<FetchError | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    let timeoutId: number;

    const fetchProducts = async (attempt = 1) => {
      // Only reset error state on the first attempt
      if (attempt === 1) {
        setIsLoading(true)
        setIsError(false)
        setError(null)
      }
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

      try {
        const res = await fetch(
          url,
          { signal: controller.signal }
        )

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`)

        const result: ProductsData = await res.json()

        // Final check before setting state in case component unmounted during JSON parsing
        if (!controller.signal.aborted) {
          setData(result)
          setIsLoading(false)
        }

      } catch (err) {
        // Stop completely if the user cancelled (unmounted or dependencies changed)
        if (controller.signal.aborted) return

        if (attempt < retries) {
          // Wait before retrying
          timeoutId = setTimeout(() => {
            fetchProducts(attempt + 1)
          }, retryDelay)
          return
        }

        // Final Error State
        setIsLoading(false)
        setIsError(true)
        setError({
          message: err instanceof Error ? err.message : 'Unknown error',
          error: err,
        })
      }
    }

    fetchProducts()

    return () => {
      controller.abort()
      clearTimeout(timeoutId) // Clean up the timer if the component unmounts mid-wait
    }
  }, [skip, limit, retries, retryDelay, query])

  return { isLoading, data, isError, error }
}