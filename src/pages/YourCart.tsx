import ProductCard from "../components/ProductCard";
import type { Product } from "../lib/types";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function YourCart() {

    const state = useSelector((state: RootState) => state.cart)
    return (

        <>
        <h1 className="text-3xl font-bold text-center">Cart Items</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-3 my-3">

                {
                    state.cartItems?.map((p: Product) => <ProductCard key={p.id} {...p} />)
                }

            </section>
            <section className="flex items-end flex-col mr-3 font-bold">
                <p>Total Quantity : {state.totalQuantity}</p>
                <p>Total Price : ${state.totalPrice.toFixed(2)}</p>
            </section>
        </>



    )
}

export default YourCart