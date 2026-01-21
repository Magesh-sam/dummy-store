import { useEffect, useState } from 'react'
import type { FetchError, ProductsData } from '../lib/types';

const useFetchProductsByCategory = (category: string, retries = 3, retryDelay = 1000) => {
    const [data, setData] = useState<ProductsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<FetchError | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        let timeoutId: number;
        const fetchProductsByCategory = async (attempt = 1) => {
            if (attempt == 1) {
                setIsLoading(true);
                setIsError(false);
                setError(null);
            }
            if (!category) {
                alert("Category Cannot be empty");
                return;
            }
            try {

                const res = await fetch(`https://dummyjson.com/products/category/${category}`, { signal: controller.signal });
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                const data: ProductsData = await res.json();


                if (!controller.signal.aborted) {
                    setData(data);
                    setIsLoading(false);
                }
            } catch (err) {
                // Stop completely if the user cancelled (unmounted or dependencies changed)
                if (controller.signal.aborted) return

                if (attempt < retries) {
                    // Wait before retrying
                    timeoutId = setTimeout(() => {
                        fetchProductsByCategory(attempt + 1)
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
        fetchProductsByCategory();

        return () => {
            controller.abort();
            clearTimeout(timeoutId);
        }
    }, [retries, retryDelay,category])
    return { isLoading, data, isError, error }
}

export default useFetchProductsByCategory