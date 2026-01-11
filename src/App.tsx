import ProductCard from "./component/Product";
import { useFetchProducts } from "./hooks/useFetchProducts"
import type { Product } from "./lib/types";

function App() {
  const { isLoading, isError, error, data } = useFetchProducts();
  if (isLoading) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>Error : {error?.message}</p>
  }
  return (
    <main>
      <h1 className='text-3xl font-bold text-center' >Dummy Store</h1>
      <section className="grid grid-cols-1 gap-3 mx-3 my-3">

        {
          data?.products?.map((p: Product) => <ProductCard {...p} />)
        }
      </section>
    </main>
  )
}

export default App