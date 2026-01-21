import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useFetchProducts } from "../hooks/useFetchProducts";
import type { Product } from "../lib/types";

function AllProducts() {
    const { isLoading, isError, error, data } = useFetchProducts(0,
        100,
    );
    if (isLoading) {
        return <ProductSkeleton />
    }
    if (isError) {
        return <p>Error : {error?.message}</p>
    }
    if (data?.products?.length === 0) {
        return <p>No Products Found</p>
    }
    return (

        <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-3 my-3">

            {
                data?.products?.map((p: Product) => <ProductCard key={p.id} {...p} />)
            }

        </section>



    )
}

export default AllProducts