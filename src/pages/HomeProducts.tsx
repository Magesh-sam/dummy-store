
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useFetchProducts } from "../hooks/useFetchProducts";
import type { Product } from "../lib/types";

function HomeProducts() {
    const { isLoading, isError, error, data } = useFetchProducts({});
    if (isLoading) {
        return <ProductSkeleton />
    }
    if (isError) {
        return <p>Error : {error?.message}</p>
    }
    if (data?.products.length === 0) {
        return <p className='text-red-500'>No Products Found</p>
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

export default HomeProducts