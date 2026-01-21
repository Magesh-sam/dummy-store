
import { Link, useParams } from 'react-router-dom';
import useFetchProductsByCategory from '../hooks/useFetchProductsByCategory';
import ProductSkeleton from '../components/skeletons/ProductSkeleton';
import ProductCard from '../components/ProductCard';
import type { Product } from '../lib/types';

const ProductsByCategory = () => {
    const { slug } = useParams();
    const { isLoading, isError, error, data } = useFetchProductsByCategory(slug || "");
    if (isLoading) {
        return <ProductSkeleton />
    }
    if (isError) {
        return <p>Error : {error?.message}</p>
    }
    return (

        <>
            <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-3 my-3">

                {
                    data?.products?.map((p: Product) => <ProductCard key={p.id} {...p} />)
                }

            </section>
            <div className="w-full flex justify-center items-center">

                <Link className="mx-auto" to={"/products"}>View All Products</Link>
            </div>
        </>


    )
}

export default ProductsByCategory