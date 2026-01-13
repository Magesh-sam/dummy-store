
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import type { Product } from "../lib/types";

function HomeProducts() {
    const { isLoading, isError, error, data } = useFetchProducts();
    if (isLoading) {
        return <p>Loading</p>
    }
    if (isError) {
        return <p>Error : {error?.message}</p>
    }
    return (

        <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-3 my-3">

            {
                data?.products?.map((p: Product) => <ProductCard key={p.id} {...p} />)
            }

        </section>



    )
}

export default HomeProducts