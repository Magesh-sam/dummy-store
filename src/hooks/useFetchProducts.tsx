import { useState, useEffect, useRef } from 'react'
import type { FetchError, ProductsData } from '../lib/types'

export const useFetchProducts = (
  skip: number,
  limit: number,
  retries = 3
) => {
  const [data, setData] = useState<ProductsData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<FetchError | null>(null)

  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    const fetchProducts = async (attempt = 1): Promise<void> => {
      setIsLoading(true)
      setIsError(false)
      setError(null)

      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
          { signal: controller.signal }
        )

        if (!res.ok) throw new Error('Failed to fetch products')

        const result: ProductsData = await res.json()
        setData(result)
      } catch (err) {
        if (controller.signal.aborted) return

        if (attempt < retries) {
          return fetchProducts(attempt + 1)
        }

        setIsError(true)
        setError({
          message: err instanceof Error ? err.message : null,
          error: err,
        })
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    fetchProducts()

    return () => controller.abort()
  }, [skip, limit, retries])

  return { isLoading, data, isError, error }
}
