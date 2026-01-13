import { useEffect, useState } from 'react'
import type { FetchError, Category } from '../lib/types'

const useFetchCategories = (retries = 3) => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchCategories = async (attempt = 1): Promise<void> => {
      setIsLoading(true)
      setIsError(false)
      setError(null)
      try {
        const res = await fetch('https://dummyjson.com/products/categories', { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch categories");

        // Only call res.json() once
        const result: Category[] = await res.json();
        console.log({ result })
        setCategories(result);
      }
      catch (err) {
        if (controller.signal.aborted) return;
        if (attempt < retries) {
          return fetchCategories(attempt + 1);
        }
        setIsError(true);
        setError({
          message: err instanceof Error ? err.message : null,
          error: err
        })
      }
      finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }
    fetchCategories();
    return () => controller.abort();
  }, [retries]) // Add retries to dependency array

  return {
    categories, isLoading, isError, error
  }
}

export default useFetchCategories